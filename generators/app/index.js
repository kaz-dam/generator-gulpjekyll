'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var shelljs = require('shelljs');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.option('skip-install', {
      desc: 'Skip installing dependencies',
      type: Boolean
    });

    var dependencies = ['ruby', 'bundle', 'yo', 'gulp', 'node', 'bower'].every(function(dep) {
      return shelljs.which(dep);
    });

    if (!dependencies) {
      this.log(chalk.red('One or more of the dependencies are missing!'));
      this.log(chalk.yellow('Make sure that the required dependencies are installed and they\'re in $PATH'));
      sheljs.exit(1);
    }
  },

  initializing: function() {
    this.props = {};
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.bowerPkg = this.fs.readJSON(this.destinationPath('bower.json'), {});
  },

  prompting: function () {
    var done = this.async();

    if (!this.options['skip-welcome-message']) {
      this.log(yosay(
        'Welcome to Adam\'s ' + chalk.red('gulpjekyll') + ' generator!'
      ));
    }

    var prompts = [{
      name: 'projectName',
      message: 'What is the name of the project?',
      store: true
    }, {
      name: 'projectDescription',
      message: 'Describe the project',
      store: true
    }, {
      name: 'projectURL',
      message: 'What will be the URL for the project?',
      store: true
    }, {
      name: 'authorName',
      message: 'What\'s your name?',
      store: true
    }, {
      name: 'authorEmail',
      message: 'What\'s your Email?',
      store: true
    }, {
      name: 'authorURI',
      message: 'What is your homepage?',
      store: true
    }, {
      name: 'authorBio',
      message: 'Write about yourself',
      store: true
    }, {
      name: 'authorTwitter',
      message: 'Your twitter name ' + chalk.yellow('(without the @):'),
      store: true
    }, {
      name: 'authorGithub',
      message: 'Your Github username',
      store: true
    }, {
      name: 'jekyllPermalinks',
      type: 'list',
      message: 'Permalink style' + (chalk.yellow(
                  '\n date: /:categories/:year/:month/:day/:title.html' +
                  '\n pretty: /:categories/:year/:month/:day/:title/' +
                  '\n ordinal: /:categories/:year/:y_day/:title.html' +
                  '\n none: /:categories/:title.html\n')),
      choices: ['date', 'pretty', 'ordinal', 'none'],
      store: true
    }, {
      name: 'cssPreprocessor',
      type: 'list',
      message: chalk.yellow('CSS preprocessor'),
      choices: ['Sass', 'Less'],
      store: true
    }];

    this.prompt(prompts, function (props) {
      this.props = _.extend(this.props, props);

      done();
    }.bind(this));
  },

  writing: function () {
    var pkgJSONFields = {
      name: _.kebabCase(this.props.projectName),
      version: '0.0.0',
      description: this.props.projectDescription,
      homepage: this.props.projectURL,
      author: {
        name: this.props.authorName,
        email: this.props.authorEmail
      }
    };

    var bowerJSONFields = {
      name: _.kebabCase(this.props.projectName),
      description: this.props.projectDescription,
      author: {
        name: this.props.authorName,
        email: this.props.authorEmail
      },
      homepage: this.props.authorURI,
      ignore: [
        "**/.*",
        "node_modules",
        "bower_components",
        "test",
        "tests"
      ]
    };

    this.fs.writeJSON('package.json', _.extend(pkgJSONFields, this.pkg));
    this.fs.writeJSON('bower.json', _.extend(bowerJSONFields, this.bowerPkg));
  },

  default: function() {
    this.composeWith('gulpjekyll:basefiles', {
      options: {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
        projectURL: this.props.projectURL,
        authorName: this.props.authorName
      }
    }, {
      local: require.resolve('../basefiles')
    });

    this.composeWith('gulpjekyll:gulp', {
      options: {
        cssPreprocessor: this.props.cssPreprocessor
      }
    }, {
      local: require.resolve('../gulp')
    });

    this.composeWith('gulpjekyll:jekyll', {
      options: {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
        projectURL: this.props.projectURL,
        authorName: this.props.authorName,
        authorEmail: this.props.authorEmail,
        authorURI: this.props.authorURI,
        authorBIO: this.props.authorBIO,
        authorTwitter: this.props.authorTwitter,
        authorGithub: this.props.authorGithub,
        jekyllPermalinks: this.props.jekyllPermalinks
      }
    }, {
      local: require.resolve('../jekyll')
    });
  },

  install: function () {
    if (this.options['skip-install']) {
      this.log('Please run \'npm install\' and \'bundle install\'');
    } else {
      this.npmIsntall();
      this.spawnCommand('bundle', ['install']);
    }
  }
});
