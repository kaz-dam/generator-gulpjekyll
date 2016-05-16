'use strict';

var _ = require('lodash');
var yeoman = require('yeoman-generator');
var args = require('yargs').argv;

module.exports = yeoman.Base.extend({
	constructor: function() {
		yeoman.Base.apply(this, arguments);

		this.option('cssPreprocessor', {
			required: true,
			name: 'cssPreprocessor',
			type: 'list',
			message: 'CSS preprocessor',
			choices: ['Sass', 'Less']
		});

		if (args.sass) {
			this.options.cssPreprocessor = 'Sass';
		}

		if (args.less) {
			this.options.cssPreprocessor = 'Less';
		}
	},

	writing: {
		package: function() {
			//	writing package.json
			var pckg = this.fs.readJSON(this.destinationPath('package.json'), {});

			pckg.devDependencies = pckg.devDependencies || {};
			_.extend(pckg.devDependencies, {
				"browser-sync": "^2.12.3",
			    "browserify": "^13.0.0",
			    "del": "^2.2.0",
			    "gulp": "^3.9.1",
			    "gulp-autoprefixer": "^3.1.0",
			    "gulp-bump": "^2.1.0",
			    "gulp-callback": "0.0.3",
			    "gulp-concat": "^2.6.0",
			    "gulp-csso": "^2.0.0",
			    "gulp-declare": "^0.3.0",
			    "gulp-filter": "^4.0.0",
			    "gulp-handlebars": "^4.0.0",
			    "gulp-if": "^2.0.0",
			    "gulp-imagemin": "^2.4.0",
			    "gulp-inject": "^4.0.0",
			    "gulp-jscs": "^3.0.2",
			    "gulp-jshint": "^2.0.0",
			    "gulp-load-plugins": "^1.2.1",
			    "gulp-plumber": "^1.1.0",
			    "gulp-print": "^2.0.1",
			    "gulp-rev": "^7.0.0",
			    "gulp-rev-replace": "^0.4.3",
			    "gulp-shell": "^0.5.2",
			    "gulp-task-listing": "^1.0.1",
			    "gulp-uglify": "^1.5.3",
			    "gulp-useref": "^3.0.8",
			    "gulp-util": "^3.0.7",
			    "gulp-wrap": "^0.11.0",
			    "jshint-stylish": "^2.1.0",
			    "lodash": "^4.11.0",
			    "node-notifier": "^4.5.0",
			    "vinyl-source-stream": "^1.1.0",
			    "wiredep": "^4.0.0",
			    "yargs": "^4.6.0"
			});

			if (this.options.cssPreprocessor === 'Sass') {
				pckg.devDependencies['gulp-sass'] = '^2.2.0';
			} else {
				pckg.devDependencies['gulp-less'] = '^3.0.5';
			}

			//	writing bower.json
			var bowerPckg = this.fs.readJSON(this.destinationPath('bower.json'), {});

			bowerPckg.dependencies = bowerPckg.dependencies || {};
			_.extend(bowerPckg.dependencies, {
				"jquery": "^2.2.3",
			    "handlebars": "^4.0.5",
			    "normalize-css": "^4.1.1",
			    "jquery-touchswipe": "^1.6.15"
			});

			this.fs.writeJSON(this.destinationPath('package.json'), pckg);
			this.fs.writeJSON(this.destinationPath('bower.json'), bowerPckg);
		},

		gulpfile: function() {
			this.fs.copyTpl(
				this.templatePath('gulpfile.js'),
				this.destinationPath('gulpfile.js'),
				{
					sass: this.options.cssPreprocessor === 'Sass',
					less: this.options.cssPreprocessor === 'Less',
					contents: '<%= contents %>'
				}
			);

			this.fs.copyTpl(
				this.templatePath('gulp.config.js'),
				this.destinationPath('gulp.config.js'),
				{
					sass: this.options.cssPreprocessor === 'Sass',
					less: this.options.cssPreprocessor === 'Less'
				}
			);
		}
	}
});