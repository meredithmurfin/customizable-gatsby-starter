#!/usr/bin/env node
/* eslint-disable */
import inquirer from 'inquirer';
import Rx from 'rxjs';
import {
    logFigletTitle,
    logFigletSubtitle,
    logSectionTitle,
    logSectionSubtitle,
} from './helpers.js';

function reducer(state) {
    return (action) => {
        state[action.name] = action.answer;
    };
}

function handleDefault(deps, answer) {
    deps.reduce(answer);
}

function handleAnswer(deps) {
    return (answer) => {
        switch (answer.name) {
            case hasUrl:
                return answer.name;
            default:
                return handleDefault(deps, answer);
        }
    };
}

function handleError(error) {
    console.log(error);
}

function handleComplete() {
    console.log(state);
}

const state = {};
var prompts = new Rx.Subject();
const reduce = reducer(state);

const run = async () => {
    // inquirer
    //     .prompt(prompts)
    //     .ui.process.subscribe(
    //         handleAnswer({ state, prompts, reduce }),
    //         handleError,
    //         handleComplete
    //     );
    logFigletTitle('customizable gatsby starter');
    logFigletSubtitle(
        'Welcome to the interactive customizable-gatsby-starter CLI.\n'
    );
    logSectionTitle("Let's start by setting basic project information.");
    logSectionSubtitle(
        'This information will be used to set up your package.json and Gatsby metadata.'
    );
    logSectionSubtitle("Don't worry, this data can easily be changed later.\n");
    const projectInfo = await inquirer
        .prompt([
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
        ])
        .then((answer) => {
            console.log(answer);
            return answer;
        })
        .catch((error) => {
            console.log(error);
        });
    const moreProjectInfo = await inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'hasUrl',
                message:
                    'Do you have a URL you would like to add for this project?',
            },
        ])
        .then((answer) => {
            console.log(answer);
            return answer;
        })
        .catch((error) => {
            console.log(error);
        });
    if (moreProjectInfo.hasUrl) {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'url',
                    message: 'What is the URL?',
                },
            ])
            .then((answer) => {
                console.log(answer);
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

run();
