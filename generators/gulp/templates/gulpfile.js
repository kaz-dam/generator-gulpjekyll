var gulp = require('gulp');
var args = require('yargs').argv;
var browserify = require('browserify');
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var $ = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort;

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('test-js', function() {
	log('Testing js files with JSHint and JSCS');

	return gulp.src(config.bundleJs)
			.pipe($.if(args.verbose, $.print()))
			// .pipe($.jscs())
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
			.pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function() {
	log('Compiling ' + config.styleCompiler + ' --> CSS');

	return gulp.src(config.style)
			.pipe($.plumber())
			<% if (sass) { %>
				.pipe($.sass())
			<% } else if (less) { %>
				.pipe($.sass())
			<% } %>
			.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
			.pipe(gulp.dest(config.buildStyle));
});

gulp.task('fonts', ['clean-fonts'], function() {
	log('Copying fonts');

	return gulp.src(config.fonts)
			.pipe(gulp.dest(config.buildFonts));
});

gulp.task('images', ['clean-images'], function() {
	log('Copying and compressing the images');

	return gulp.src(config.images)
			.pipe($.imagemin({optimizationLevel: 4}))
			.pipe(gulp.dest(config.buildImages));
});

gulp.task('clean', function() {
	var delAll = [].concat(config.build, config.tmpFiles, config.srcTempFiles);
	clean(delAll);
});

gulp.task('clean-temp', function() {
	var delBothTempFolder = [].concat(config.tmpFiles, config.srcTempFiles);
	clean(delBothTempFolder);
});

gulp.task('clean-images', function() {
	clean(config.buildImages);
});

gulp.task('clean-fonts', function() {
	clean(config.buildFonts);
});

gulp.task('clean-styles', function() {
	clean(config.buildStyle);
});

gulp.task('clean-code', function() {
	var files = [].concat(
		config.cleanjs,
		config.htmlBuild
	);
	clean(files);
});

// Wiredep and inject
gulp.task('wiredep', ['build-dev'], function() {
	log('Injecting the bower components into html');
	var options = config.wiredepOptions();
	var wiredep = require('wiredep').stream;

	return gulp.src(config.htmlBuild)
			.pipe(wiredep(options))
			.pipe(gulp.dest(config.build));
});

gulp.task('inject', ['wiredep'], function() {
	log('Injecting all the needed components');
	clean(config.htmlForInject);

	return gulp.src(config.htmlBuild)
		.pipe($.inject(gulp.src(config.buildCss), {relative: true}))
		.pipe($.inject(gulp.src(config.serveBundle), {relative: true}))
		.pipe(gulp.dest(config.build));
});

// hbs-tmpl
gulp.task('tmpl', function() {
	log('Rendering templates to a js file');

	gulp.src(config.templates)
		.pipe($.handlebars())
		.pipe($.wrap('Handlebars.template(<%= contents %>)'))
		.pipe($.declare({
			root: 'module.exports',
			noRedeclare: true
		}))
		.pipe($.concat('templates.js'))
		.pipe(gulp.dest(config.jsModules));
});

// Browserify
gulp.task('browserify', function() {
	return browserify(config.mainJs, {debug: true})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest(config.jsFolder));
});

// jekyll
gulp.task('jekyll:dev', ['clean-temp'], $.shell.task('jekyll build --incremental --no-watch'));

// build-dev -> build for development
gulp.task('build-dev', ['jekyll:dev', 'fonts', 'images', 'styles', 'browserify'], function() {
	log('Building the site in the serve folder');

	var files = [].concat(config.tmpFiles, config.bundleJs);

	return gulp.src(files)
			.pipe($.if('bundle.js', gulp.dest(config.serveJs), gulp.dest(config.build)));
});

// build-prod -> build for production
gulp.task('build-prod', ['inject'], function() {
	log('Optimizing everything for production');

	var cssFilter = $.filter('**/*.css', {restore: true});
	var jsFilter = $.filter('**/*.js', {restore: true});

	return gulp.src(config.htmlBuild)
			.pipe($.plumber())
			.pipe($.useref())
			.pipe($.if('!**/*.html', $.rev()))
			.pipe($.revReplace())
			.pipe(cssFilter)
			.pipe($.csso())
			.pipe(cssFilter.restore)
			.pipe(jsFilter)
			.pipe($.uglify())
			.pipe(jsFilter.restore)
			.pipe(gulp.dest(config.build))
			.pipe($.callback(function() {
				clean(config.serveBundle);
				clean(config.serveMain);
			}));
});

// serve -> set up local server from serve folder
gulp.task('serve-dev', function() {
	sync(true);
});

gulp.task('serve-prod', function() {
	sync(false);
});

//////////////////////////////////

function sync(isDev) {
	if (browserSync.active) {
		return;
	}

	log('Starting BrowserSync on the port ' + port);

	if (isDev) {
		gulp.watch([
			config.htmlSrc,
			config.everyjs,
			config.allFiles
		], ['inject']);

		gulp.watch(config.templates, ['tmpl']);

		gulp.watch([
			config.srcStyle
		], ['styles']);
	} else {
		gulp.watch([
			config.htmlSrc,
			config.templates,
			config.cleanjs,
			config.allFiles
		], ['build-prod']);
	}

	var options = {
		// proxy: 'localhost:' + port,
		port: 3000,
		files: [
			config.build + '**/*.*'
		],
		ghostMode: {
			clicks: true,
			location: false,
			forms: true,
			scroll: true
		},
		server: {
			baseDir: 'serve'
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'gulp-patterns',
		notify: true,
		reloadDelay: 1000
	};

	browserSync(options);
}

function clean(path) {
	log('Cleaning out: ' + $.util.colors.blue(path));
	del(path);
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