#!/usr/bin/env node

/**
 * Module dependencies.
 */

    //https://github.com/segmentio/metalsmith/blob/master/examples/project-scaffolder/build.js
    var CTU_LINKS_BASEURL = "https://www.ctu.gov.cz";



    var debug = require('debug')('nodeNettest:server');
    var request = require('request');
    var fs = require('fs');
    var path = require('path');
    var cheerio = require('cheerio');
    var randomstring = require('randomstring');
    var gitDescribe = require('git-describe');
    var mkdirp = require('mkdirp');
    var sass = require('@metalsmith/sass');
    var ignore = require('metalsmith-ignore');
    
    var nunjucks = require('nunjucks');
    nunjucks.configure({ autoescape: false });
    
    var Metalsmith = require('metalsmith');
    var layouts = require('metalsmith-layouts');
    var watch = require('metalsmith-watch');
    var fingerprint = require('metalsmith-fingerprint-ignore');
    var debug = require('debug');
    debug.enable();
    
    var langs = [];
    langs.push(require("./lang/en.js"));
    langs.push(require("./lang/cs.js"));
    
    var remoteFiles = require("./conf/remoteFiles.json");
    
    var target = null, targets = ["qostest","nettest"];
    var useWatch = false;
    var downloadedOnce = false;
    var updateCtuDependencies = true;
    
    //check command line to find which target should be built
    process.argv.forEach(function(val, index, array) {
        //node build nettest/qostest
        if (index === 2) {
            if (targets.indexOf(val) >= 0) {
                target = val;
            }
        }
        if (index >= 3 && val === "watch") {
            useWatch = true;
        }
        else if (index >= 3 && val == "--ignore-ctu-dependencies") {
            updateCtuDependencies = false;
        }
    });
    
    if (target === null ){
        console.log("invalid target, try 'node build nettest' or 'node build qostest");
        process.exit();
    }
    
    
    //execute
    var metalsmith = Metalsmith(__dirname)
        //.use(generateRandomJSTestFilesIfMissing())
        //.use(updateCtuDependencies ? fetchRemoteFiles(remoteFiles) : noOp)
        .use(setConfig())
        .use(duplicateFile())
        .use(ignore( ['scss/**/*.scss','!scss/app.scss']))
        .use(sass({
            "outputStyle": "compressed",
            sourceMap: true,
            sourceMapContents: true
        }))
        .use(fingerprint({
            pattern: ['css/*.css', 'js/**/*.js', 'scss/*.css',
                    '!template/**/*.', '!js/test/jstest.js'],
            deactivate: useWatch,
            keep: false
        }))
        .use(fingerprint({
            pattern: ['lib/**/*.js', 'lib/**/*.css'],
            deactivate: useWatch,
            keep: true //for loading polyfills in JS
        }))
        .use(layouts({
            engine: 'nunjucks',
            directory: 'templates'
        }))
        .use((useWatch) ? (watch({
            paths: {
                "${source}/**/*": true,
                "templates/**/*": "**/*.html",
                "lang/**/*": true
            }
        })) : null)
        .build(function(err) {
                if (err) throw err;
            });
    
    
    /**
     * Check if all files required for the jstest are existing
     * if not, generate them
     */
    function generateRandomJSTestFilesIfMissing() {
        return function (files, metalsmith, done) {
            //only if on first run
            if (downloadedOnce) {
                done();
                return;
            }
    
            var fileArray = Object.keys(files);
            var createdFiles = false;
            for (var i=0;i<=102400;i=Math.max(100,i*2)) {
                //check if file exists
                var filePath = "jstest.nettest%PS%files%PS%".replace(/%PS%/g,path.sep) + ("000000"+i).slice(-6);
                if (fileArray.indexOf(filePath) < 0) {
                    //generate
                    //var fileStream = fs.openSync(filePath,"w");
                    filePath = "src" + path.sep + filePath;
                    console.log("generating random file: " + filePath);
                    if (i===0) {
                        var fd = fs.openSync(filePath,"w");
                        fs.closeSync(fd);
                    }
    
                    for (var j=0;j<i;j=j+100) {
                        var string = randomstring.generate(100*1024);
                        fs.appendFileSync(filePath, string);
                    }
    
                    createdFiles = true;
                }
            }
            if (!createdFiles) {
                done();
            }
            else {
                console.log("random files for the jstest have been created, please run the build again!");
            }
        }
    }
    
    //metalsmith no operation
    function noOp(files, metalsmith, done) { done() }
    
    /**
     * Transform the filelist provided by alladin-it for CTU-dependencies
     * to accomodate the fetchRemoteFiles-Metalsmith-Plugin
     * @param json
     */
    function transformRemoteNettestJSONtoFetchableFiles(json) {
        var filesArray = [];
        json.forEach(function(arg) {
            if (arg.dirAndFile.indexOf("/__nettest") === 0) {
                var file = {
                    source : CTU_FILES_BASEURL + arg.dirAndFile,
                    target : "./templates/parts/" + arg.file
                };
            }
            else {
                var file = {
                    source : CTU_FILES_BASEURL + arg.dirAndFile,
                    target : "src/" + arg.dirAndFile.replace("fileadmin","fileadmin.nettest")
                };
            }
            filesArray.push(file);
        });
        return filesArray;
    }
    
    
    /**
     * Download the files given in the list and save them (+ override of they exist)
     * @param fileList [{source, target}]
     */
    function fetchRemoteFiles(fileList) {
        return function (files, metalsmith, done) {
            if (downloadedOnce) {
                done();
                return;
            }
    
            var filesArray;
            if (typeof fileList == "function") {
                filesArray = fileList();
            }
            else {
                filesArray = fileList;
            }
    
            var downloaded = 0;
    
            var baseRequest = request.defaults({
                pool: {
                    maxSockets: 10
                },
                time: 100000
            });
    
            filesArray.reverse().forEach(function (fileInfo) {
                var folder = path.dirname(fileInfo.target);
                mkdirp.sync(folder);
                var file = fs.createWriteStream(fileInfo.target);
                baseRequest(fileInfo.source)
                    .on('error', function(err) {
                        console.log(err);
                        downloaded++;
                        if (downloaded === filesArray.length) {
                            done();
                        }
                    })
                    .pipe(file).on('finish', function () {
                    downloaded++;
                    console.log("Downloaded File: (" + downloaded + "/" + filesArray.length + ")" + fileInfo.source + " -> " + fileInfo.target);
                    if (downloaded === filesArray.length) {
                        done();
                    }
                });
            });
        }
    }
    
    /**
     * Replaces all URLS in the given files with URLS now redirecting
     * to the CTU baseurl
     *
     * @param fileList
     * @returns {Function}
     */
    function transformCTUUrls(fileList) {
        //transformation for CTU Nettest 301 URLs
        var specialNetTestUrls = {
            "/Test": "Test",
            "/Help": "Help",
            "/Download": "Download",
            "/Upload": "Upload",
            "/Result": "Result",
            "/Ping": "Ping",
            "/Icon": "Icon",
            "/Opentests": "Opentests",
            "/Result": "Result",
            "/Loop": "Loop",
            "/Opentests": "Opentests",
            "/CertMeasurement": "CertMeasurement",
            "/tk/nettest" : "",
            "/en": "",
            "/cs": ""
        };
    
        return function(files, metalsmith, done) {
            if (downloadedOnce) {
                done();
                return;
            }
            downloadedOnce = true;
    
            var count = 0;
            fileList.forEach(function(path) {
                var language = (path.indexOf("_cs")>0)?"cs":"en";
                fs.readFile(path, function(err, data) {
                    var $ = cheerio.load(data);
    
                    $("a[href]").each(function(t) {
                        var href = $(this).attr("href");
    
                        //only replace relative URLs (no mailtos, tel, http, etc.)
                        if (href.indexOf(":") === -1 || href.indexOf(":") > 6 || href.indexOf('nettest') !== -1) {
                            $(this).attr("href", CTU_LINKS_BASEURL + href);
    
                            //maybe it's even a special nettest url that needs to be relative?
                            if (href.indexOf('nettest') !== -1) {
                                for(var key in specialNetTestUrls) {
                                    if (href.endsWith(key) === true) {
                                        $(this).attr("href", "/" + language + "/" + specialNetTestUrls[key]);
                                    }
                                }
                            }
                        }
                    });
    
                    var html = $.html();
    
                    fs.writeFile(path, html, function(err) {
                        count++;
                        console.log("replaced relative urls in: "  + path)
    
                        if (count === fileList.length) {
                            done();
                        }
                    });
                })
            });
    
        }
    }
    
    function setConfig() {
        return function (files, metalsmith, done) {
            //nettest or qostest?
            var metadata = metalsmith.metadata();
            metadata['target'] = target;
            metadata['basetemplate'] = (target === "qostest")?"templates/qosPage.html":"templates/nettestPage.html";
            try {
                metadata['gitDescribe'] = gitDescribe({
                    match: false
                });
            } catch(e) {
                console.log("not a valid git directory, cannot include build info in /admin page, message: " + e.message);
            }
    
            //delete duplicate files from build
            Object.keys(files).forEach(function (file) {
                targets.forEach(function(cTarget) {
                    //@TODO: Refine
                    if (file.indexOf("." + cTarget) > 0) {
                        //rename if target, delete otherwise
                        if (cTarget === target) {
                            var newFilename = file.replace("." + cTarget,"")
                            files[newFilename] = files[file];
                        }
    
                        delete files[file];
                    }
                });
            });
    
            done();
        }
    }
    
    function duplicateFile() {
        return function (files, metalsmith, done) {
            //refine language files based on target build
            langs.forEach(function(lang) {
    
                var flattenTargetTree = function(array, key) {
                    var data = array[key];
                    if (data instanceof Object) {
                        //replace based on target if exists
                        if (data[target] !== undefined) {
                            array[key] = array[key][target];
                        }
                        //elsewise, recurse with child nodes
                        else {
                            Object.keys(data).forEach(function(nKey) {
                                flattenTargetTree(data, nKey);
                            });
                        }
                    }
                };
    
                Object.keys(lang.strings).forEach(function(key) {
                    flattenTargetTree(lang.strings, key);
                    /*var data = lang.strings[key];
                    if (data instanceof Object) {
    
                        //replace based on target
                        lang.strings[key] = lang.strings[key][target];
                    }*/
                });
    
            });
    
            //for each language
            Object.keys(files).forEach(function (file) {
                if (isRootHTML(file)) {
                    langs.forEach(function (lang) {
    
                        //add for CS and EN
                        var data = files[file];
                        var newFilename = lang.language + path.sep + file;
                        var clone = JSON.parse(JSON.stringify(data));
                        files[newFilename] = clone;
                        files[newFilename].Lang = lang.strings
    
                    });
                    delete files[file];
                }
            });
    
            console.log("done duplicating");
            done();
        }
    }
    
    
    
    function isRootHTML(file) {
        //@TODO: Refine
        var isHTML = (file.lastIndexOf(".html") > 0);
        var isRoot = (file.indexOf(path.sep) <0);
    
        return isHTML && isRoot;
    }    