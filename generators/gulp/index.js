'use strict';

var _ = require('lodash');
var yeoman = require('yeoman-generator');
var args = require('yargs').argv;

module.exports = yeoman.Base.extend({
	constructor: function() {
		yeoman.Base.apply(this, arguments);

		this.option('uploading', {
			required: true,
			name: 'uploading',
			type: 'list',
			message: 'How will you upload the site?',
			choices: ['Amazon S3', 'Rsync', 'Github Pages', 'None']
		});

		this.option('cssPreprocessor', {
			required: true,
			name: 'cssPreprocessor',
			type: 'list',
			message: 'CSS preprocessor',
			choices: ['Sass', 'Less']
		});

		if (args.amazon) {
			this.options.uploading = 'Amazon S3';
		}

		if (args.rsync) {
			this.options.uploading = 'Rsync';
		}

		if (args.pages) {
			this.options.uploading = 'Github Pages';
		}

		if (args.sass) {
			this.options.cssPreprocessor = 'Sass';
		}

		if (args.less) {
			this.options.cssPreprocessor = 'Less';
		}
	},

	writing: function() {
		
	}
});