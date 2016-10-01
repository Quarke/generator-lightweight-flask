'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        var async = this.async();
        this.log(yosay(
            'Building something with the ' + chalk.blue('lightweight-flask gen') + '!'
            ));

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            default: 'flaskSPA'
        }];

        return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
            this.name = props.name;
            async()
        }.bind(this));
    },

    writing: function () {
        this.template('.bowerrc', '.bowerrc');
        this.fs.copy(
            this.templatePath(),
            this.destinationPath()
        );
    },

    install: function () {
        this.bowerInstall();
    }
});