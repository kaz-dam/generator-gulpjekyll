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

gulp.task('clean-styles', function() {
	
});

//////////////////////////////////

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