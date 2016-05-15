(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///////////////////
// Entry point for Browserify. It'll create the bundle.js from this file.
///////////////////

var Myobject = require('./modules/Myobject');
var templates = require('./modules/templates');
var logger = require('./modules/logger');
var anotherLogger = require('./modules/anotherLogger');

var myobject = new Myobject();
},{"./modules/Myobject":2,"./modules/anotherLogger":3,"./modules/logger":4,"./modules/templates":5}],2:[function(require,module,exports){
module.exports = 

function Myobject() {
	var self = this;

	self.firstVar = 'a';
	self.secondVar = 'b';

	self.config = {
		// Here you can cache DOM objects with jquery, which existing by the time the page loads and you create the instance of this object.
		// Note that if there is some DOM object that'll dynamically created, you'll can't call it from here.
	};

	self.logger();
	self.anotherLogger();
};
},{}],3:[function(require,module,exports){
var myobject = require('./Myobject');

myobject.prototype.logger = function() {
	console.log('Log from the anotherLogger.js');
};

module.exports = myobject;
},{"./Myobject":2}],4:[function(require,module,exports){
var myobject = require('./Myobject');

myobject.prototype.logger = function() {
	console.log('Log from the logger.js and stuff');
};

module.exports = myobject;
},{"./Myobject":2}],5:[function(require,module,exports){
module.exports["secondTest"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "			<li>"
    + this.escapeExpression(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"item","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"wrapper\">\r\n	<ul class=\"items\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.itemObj : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</div>";
},"useData":true});
module.exports["test"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<img src=\""
    + alias3(((helper = (helper = helpers.filePath || (depth0 != null ? depth0.filePath : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filePath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.fileName || (depth0 != null ? depth0.fileName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fileName","hash":{},"data":data}) : helper)))
    + "\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"stuff\">"
    + this.escapeExpression(((helper = (helper = helpers.someContent || (depth0 != null ? depth0.someContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"someContent","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.obj : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiLCJzcmMvYXNzZXRzL2pzL21vZHVsZXMvTXlvYmplY3QuanMiLCJzcmMvYXNzZXRzL2pzL21vZHVsZXMvYW5vdGhlckxvZ2dlci5qcyIsInNyYy9hc3NldHMvanMvbW9kdWxlcy9sb2dnZXIuanMiLCJzcmMvYXNzZXRzL2pzL21vZHVsZXMvdGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEVudHJ5IHBvaW50IGZvciBCcm93c2VyaWZ5LiBJdCdsbCBjcmVhdGUgdGhlIGJ1bmRsZS5qcyBmcm9tIHRoaXMgZmlsZS5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxudmFyIE15b2JqZWN0ID0gcmVxdWlyZSgnLi9tb2R1bGVzL015b2JqZWN0Jyk7XHJcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL21vZHVsZXMvdGVtcGxhdGVzJyk7XHJcbnZhciBsb2dnZXIgPSByZXF1aXJlKCcuL21vZHVsZXMvbG9nZ2VyJyk7XHJcbnZhciBhbm90aGVyTG9nZ2VyID0gcmVxdWlyZSgnLi9tb2R1bGVzL2Fub3RoZXJMb2dnZXInKTtcclxuXHJcbnZhciBteW9iamVjdCA9IG5ldyBNeW9iamVjdCgpOyIsIm1vZHVsZS5leHBvcnRzID0gXHJcblxyXG5mdW5jdGlvbiBNeW9iamVjdCgpIHtcclxuXHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdHNlbGYuZmlyc3RWYXIgPSAnYSc7XHJcblx0c2VsZi5zZWNvbmRWYXIgPSAnYic7XHJcblxyXG5cdHNlbGYuY29uZmlnID0ge1xyXG5cdFx0Ly8gSGVyZSB5b3UgY2FuIGNhY2hlIERPTSBvYmplY3RzIHdpdGgganF1ZXJ5LCB3aGljaCBleGlzdGluZyBieSB0aGUgdGltZSB0aGUgcGFnZSBsb2FkcyBhbmQgeW91IGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhpcyBvYmplY3QuXHJcblx0XHQvLyBOb3RlIHRoYXQgaWYgdGhlcmUgaXMgc29tZSBET00gb2JqZWN0IHRoYXQnbGwgZHluYW1pY2FsbHkgY3JlYXRlZCwgeW91J2xsIGNhbid0IGNhbGwgaXQgZnJvbSBoZXJlLlxyXG5cdH07XHJcblxyXG5cdHNlbGYubG9nZ2VyKCk7XHJcblx0c2VsZi5hbm90aGVyTG9nZ2VyKCk7XHJcbn07IiwidmFyIG15b2JqZWN0ID0gcmVxdWlyZSgnLi9NeW9iamVjdCcpO1xyXG5cclxubXlvYmplY3QucHJvdG90eXBlLmxvZ2dlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnNvbGUubG9nKCdMb2cgZnJvbSB0aGUgYW5vdGhlckxvZ2dlci5qcycpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBteW9iamVjdDsiLCJ2YXIgbXlvYmplY3QgPSByZXF1aXJlKCcuL015b2JqZWN0Jyk7XHJcblxyXG5teW9iamVjdC5wcm90b3R5cGUubG9nZ2VyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc29sZS5sb2coJ0xvZyBmcm9tIHRoZSBsb2dnZXIuanMgYW5kIHN0dWZmJyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG15b2JqZWN0OyIsIm1vZHVsZS5leHBvcnRzW1wic2Vjb25kVGVzdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyO1xuXG4gIHJldHVybiBcIlx0XHRcdDxsaT5cIlxuICAgICsgdGhpcy5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaXRlbSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaXRlbSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiaXRlbVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2xpPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwid3JhcHBlclxcXCI+XFxyXFxuXHQ8dWwgY2xhc3M9XFxcIml0ZW1zXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLml0ZW1PYmogOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcdDwvdWw+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbm1vZHVsZS5leHBvcnRzW1widGVzdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiLCBhbGlhczM9dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIlx0PGltZyBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5maWxlUGF0aCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuZmlsZVBhdGggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImZpbGVQYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcIlxuICAgICsgYWxpYXMzKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuZmlsZU5hbWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbGVOYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJmaWxlTmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlcjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzdHVmZlxcXCI+XCJcbiAgICArIHRoaXMuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnNvbWVDb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zb21lQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwic29tZUNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5vYmogOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyJdfQ==
