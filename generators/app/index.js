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

    var dependencies = ['ruby', 'bundle', 'yo', 'gulp', 'node'].every(function(dep) {
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
  },

  prompting: function () {
    var done = this.async();

    if (!this.options['skip-wlcome-message']) {
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
      name: 'uploading',
      type: 'list',
      message: 'How will you upload the site?',
      choices: ['Amazon S3', 'Rsync', 'Github Pages', 'None'],
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
    }];

    this.prompt(prompts, function (props) {
      this.props = _.extend(this.props, props);

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
