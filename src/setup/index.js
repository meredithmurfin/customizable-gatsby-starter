#!/usr/bin/env node

const figlet = require('figlet');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');

const colors = {
    title: '#ff0087',
    subtitle: '#ff87af',
};

const run = async () => {
    console.log(
        chalk.hex(colors.title)(
            figlet.textSync('customizable gatsby starter', {
                font: 'big',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            })
        )
    );
    console.log(
        chalk.hex(colors.subtitle)(
            'Welcome to the customizable-gatsby-starter CLI.'
        )
    );
};

run();
