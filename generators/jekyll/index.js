'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
	constructor: function() {
		yeoman.Base.apply(this, arguments);

		this.option('projectName', {
			type: String,
			required: true,
			desc: 'projectName'
		});

		this.option('projectDescription', {
			type: String,
			required: true,
			desc: 'projectDescription'
		});

		this.option('projectURL', {
			type: String,
			required: true,
			desc: 'projectURL'
		});

		this.option('authorName', {
			type: String,
			required: true,
			desc: 'authorName'
		});

		this.option('authorEmail', {
			type: String,
			required: true,
			desc: 'authorEmail'
		});

		this.option('authorURI', {
			type: String,
			required: true,
			desc: 'authorURI'
		});

		this.option('authorBIO', {
			type: String,
			required: true,
			desc: 'authorBIO'
		});

		this.option('authorTwitter', {
			type: String,
			required: true,
			desc: 'authorTwitter'
		});

		this.option('authorGithub', {
			type: String,
			required: true,
			desc: 'authorGithub'
		});

		this.option('jekyllPermalinks', {
			type: String,
			required: true,
			desc: 'jekyllPermalinks'
		});
	},

	writing: function() {
		this.fs.copy(
			this.templatePath('Gemfile'),
			this.destinationPath('Gemfile')
		);

		this.fs.copyTpl(
			this.templatePath('config.yml'),
			this.destinationPath('_config.yml'),
			{
				projectName: this.options.projectName,
				projectDescription: this.options.projectDescription,
				projectURL: this.options.projectURL,
				authorName: this.options.authorName,
				authorEmail: this.options.authorEmail,
				authorURI: this.options.authorURI,
				authorBIO: this.options.authorBIO,
				authorTwitter: this.options.authorTwitter,
				authorGithub: this.options.authorGithub,
				jekyllPermalinks: this.options.jekyllPermalinks
			}
		);

		this.fs.copyTpl(
			this.templatePath('config.build.yml'),
			this.destinationPath('_config.build.yml')
		);

		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath('src')
		);
	}
});