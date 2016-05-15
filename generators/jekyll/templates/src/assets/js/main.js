///////////////////
// Entry point for Browserify. It'll create the bundle.js from this file.
///////////////////

var Myobject = require('./modules/Myobject');
var templates = require('./modules/templates');
var logger = require('./modules/logger');
var anotherLogger = require('./modules/anotherLogger');

var myobject = new Myobject();