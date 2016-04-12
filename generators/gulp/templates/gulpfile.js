var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config');
var del = require('del');
var _ = require('lodash');
var $ = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort; //todo

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('test-js', function() {
	log('Testing js files with JSHint and JSCS');

	return gulp.src(config.everyjs) //todo
			.pipe($.if(args.show, $.print()))
			.pipe($.jscs())
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
			.pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function() {
	log('Compiling ' + config.styleCompiler + ' --> CSS'); //todo

	return gulp.src(config.style)
			.pipe($.plumber())
			.pipe($.sass()) //todo
			.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
			.pipe(gulp.dest(config.buildStyle)); //todo
});

gulp.task('fonts', ['clean-fonts'], function() {
	log('Copying fonts');

	return gulp.src(config.fonts) //todo
			.pipe(gulp.dest(config.build)); //todo
});

gulp.task('images', ['clean-images'], function() {
	log('Copying and compressing the images');

	return gulp.src(config.images) //todo
			.pipe($.imagemin({optimizationLevel: 4}))
			.pipe(gulp.dest(config.build)); //todo
});

gulp.task('clean', function(done) {
	var delall = [].concat(config.build, config.temp); //todo
	clean(delall, done);
});

gulp.task('clean-images', function(done) {
	clean(config.build); //todo
});

gulp.task('clean-fonts', function(done) {
	clean(config.build, done); //todo
});

gulp.task('clean-styles', function(done) {
	clean(config.buildStyle, done); //todo
});

gulp.task('clean-code', function(done) {
	var files = [].concat(
		config.temp, //todo js
		config.build, //todo html
		config.build //todo js
	);
	clean(files, done);
});

// wiredep, bower

// hbs-tmpl

// browser-sync

// jekyll

// watch

// build

// test

// serve-dev

// serve-build

//////////////////////////////////

function clean(path, done) {
	log('Cleaning out: ' + $.util.colors.blue(path));
	del(path, done);
}

function log(msg) {
	if(typeof(msg) === 'object') {
		for (var prop in msg) {
			if (msg.hasOwnProperty(prop)) {
				$.util.log($.util.colors.yellow(msg[prop]));
			}
		}
	} else {
		$.util.log($.util.colors.yellow(msg));
	}
}