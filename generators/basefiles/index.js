'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
	constructor: function() {
		yeoman.Base.apply(this, arguments);

		this.option('projectName', {
			type: String,
			required: true,
			desc: 'Project name'
		});

		this.option('projectDescription', {
			type: String,
			required: true,
			desc: 'Project description'
		});

		this.option('projectURL', {
			type: String,
			required: true,
			desc: 'Project URL'
		});

		this.option('authorName', {
			type: String,
			required: true,
			desc: 'Author name'
		});
	},

	configuring: function() {
		this.fs.copyTpl(
			this.templatePath('README.md'),
			this.destinationPath('README.md'),
			{
				projectName: this.options.projectName,
				projectDescription: this.options.projectDescription,
				projectURL: this.options.projectURL,
				authorName: this.options.authorName
			}
		);

		this.fs.copy(
			this.templatePath('editorconfig'),
			this.destinationPath('.editorconfig')
		);

		this.fs.copy(
			this.templatePath('jshintrc'),
			this.destinationPath('.jshintrc')
		);

		this.fs.copy(
			this.templatePath('gitattributes'),
			this.destinationPath('.gitattributes')
		);

		this.fs.copy(
			this.templatePath('gitignore'),
			this.destinationPath('.gitignore')
		);
	}
});