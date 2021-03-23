#!/usr/bin/env bash

function remove_dependencies() {
    echo "Removing the following dependencies: $*"
    yarn remove $*
}

function remove_files() {
    echo "Removing $*"
    rm -R $*
}

# remove_dependencies "edit-json-file" "chalk" "inquirer" "shelljs" "figlet"

# echo "Removing package.json variables: engines scripts.setup scripts.postsetup"
# node src/setup/postsetup.js

# remove_files "src/setup"
