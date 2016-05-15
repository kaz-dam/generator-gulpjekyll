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