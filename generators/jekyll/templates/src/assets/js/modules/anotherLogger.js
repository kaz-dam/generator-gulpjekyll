var myobject = require('./Myobject');

myobject.prototype.logger = function() {
	console.log('Log from the anotherLogger.js');
};

module.exports = myobject;