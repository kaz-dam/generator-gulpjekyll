module.exports = function() {
	var serve = './serve/',
		src = './src/',
		tmp = './tmp/',
		buildStyle = serve + 'assets/style/',

		config = {

		defaultPort: 8080,

		build: serve,
		buildFonts: serve + 'assets/fonts/',
		fonts: src + 'assets/fonts/*.css',
		images: src + 'assets/images/*.jpg',
		buildImages: serve + 'assets/images/',
		templates: src + 'assets/templates/*.hbs',
		allFiles: [
			src + '**/*.md',
			src + '**/*.txt',
			src + '**/*.xml'
		],

		/****
		* html
		*****/
		htmlBuild: serve + '**/*.html',
		htmlSrc: src + '**/*.html',
		htmlHead: src + '_includes/',
		htmlDefault: src + '_layouts/',

		/****
		* Style
		*****/
		styleCompiler: 'Sass', // todo sass or less
		style: src + 'assets/style/main.scss',
		buildStyle: buildStyle,
		buildCss: buildStyle + '*.css',
		srcStyle: src + 'assets/style/**/*.*',
		serveMain: serve + 'assets/style/main.css',

		/****
		* js
		*****/
		jsFolder: src + 'assets/js/',
		everyjs: [
			src + 'assets/js/**/*.js',
			'!' + src + 'assets/js/bundle.js'
		],
		cleanjs: serve + 'assets/js/**/*.js',
		jsModules: src + 'assets/js/modules/',
		mainJs: src + 'assets/js/main.js',
		bundleJs: src + 'assets/js/bundle.js',
		serveJs: serve + 'assets/js/',
		serveBundle: serve + 'assets/js/bundle.js',

		/****
		* bower and npm
		*****/
		bower: {
			json: require('./bower.json'),
			components: './bower_components/',
			ignorePath: '../..'
		},

		/****
		* Templates
		*****/
		tmp: tmp,
		tmpIndex: tmp + 'index.html',
		tmpStyle: tmp + '**/main.css',
		tmpFiles: tmp + '**/*.*',
		srcTemp: src + 'temp/',
		srcTempFiles: src + 'temp/*.html'

	};

	///////////////////////

	config.wiredepOptions = function() {
		var options = {
			bowerJson: config.bower.json,
			componentSrc: config.bower.components
		};
		return options;
	};

	return config;
};