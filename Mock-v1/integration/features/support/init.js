/* eslint new-cap: "off", no-invalid-this: "off" */

'use strict';

const apickli = require('./apickli.js');
const {Before, setDefaultTimeout} = require('cucumber');

Before(function() {
  this.apickli = new apickli.Apickli('http', 'aminnerekar-eval-pro.apigee.net/simpleproxy');
  this.apickli.addRequestHeader('Cache-Control', 'no-cache');
this.apickli.addRequestHeader('Content-Type', 'application/json');
});

setDefaultTimeout(60 * 1000);
