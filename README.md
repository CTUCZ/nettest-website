CTU NetTest website
===================

This project contains the source codes of the CTU NetTest website: https://nettest.ctu.gov.cz.

Requirements
------------

For building the website, the following tools are needed:

  * NodeJS
  * NPM
  * Git


Building and running the Website
--------------------------------

1. Build

	```bash
	npm install
	node build nettest 
	```
	
	It is possible to live-rebuild changed sources by running:
	
	```bash
	node build nettest watch
	```
	
2. Deploy

    Use the `build`-directory as the root directory for your
	webserver, e.g.	in conjunction with the `http-server` 
	node module (`npm install http-server -g`).
	
	```bash
	http-server build -p 8081
	```
	
    It is also possible to use prepared npm scripts: ```npm start``` or  ```npm run dev```.
	
	Now, the website is ready to use: <http://localhost:8081/en>.

Get in Touch
------------

* [CTU-NetTest](https://nettest.ctu.gov.cz) on the web
* [RTR-Netztest](https://www.netztest.at) on the web
