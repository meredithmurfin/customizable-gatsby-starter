#!/usr/bin/env bash

function remove_dependencies() {
    echo "Removing the following dependencies: $*"
    yarn remove $*
}

function remove_files() {
    echo "Removing $*"
    rm -R $*
}

# echo "Removing package.json variables: engines"
# node src/setup/postsetup.js

# remove_dependencies "edit-json-file"

# remove_files "src/setup"
