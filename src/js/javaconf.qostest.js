//var controlProxy = "https://nettest.cz";
//var mapProxy = "https://nettest.cz";
var controlProxy = "";
var mapProxy = "";
var statisticProxy = "";
var wspath = "RMBTControlServer";
var statisticpath = "RMBTStatisticServer";

var userServerSelection = TRUE; //otherwise: 0 (FALSE);

var crossDomain = false;

var TestTypes = {
    Websocket : "websocket",
    Java : "Java",
    JavaScript : "jstest"
};

var preferredTest = TestTypes.Websocket;

//can be changed in cookie (/Options-Page)
var UserConf = {
    runQos: true,
    qosSsl: true,
    runNdt: false,
    preferredTest: preferredTest,
    preferredServer: "default"
};

var test_version_name = "0.1";
var test_language;
var cookie_uuid;
var test_type = "DESKTOP";
var test_version_code = "1";
var test_name = "RMBT"; 
var test_timezone;
var test_devices;
var test_networks;
var client_name = "RMBTjs";
var test_token, testUUID;
var bing_api_key = "";
var fallbackOnJS = false;
var terms_version = 4;

test_timezone = "Europe/Prague"; 


var geo_HighAccuracy = true;
var geo_timeout = 10000;
var geo_maximumAge = 60000;

var browser_list = [
	"MSIE",
	"Firefox",
	"Chrome",
	"Safari",
	"Opera"
];
