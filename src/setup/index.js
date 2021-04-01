#!/usr/bin/env node
/* eslint-disable */
import {
    logFigletTitle,
    logFigletSubtitle,
    logSectionTitle,
    logSectionSubtitle,
    requestUserInput,
} from './helpers.js';

const run = async () => {
    logFigletTitle('customizable gatsby starter');
    logFigletSubtitle(
        'Welcome to the interactive customizable-gatsby-starter CLI.\n'
    );
    logSectionTitle("Let's start by setting basic project information.");
    logSectionSubtitle(
        "This information will be used to set up your package.json and Gatsby metadata. Don't worry, this data can easily be changed later.\n"
    );
    const projectInfo = requestUserInput([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of your project.',
        },
    ]);
};

run();
