/* eslint-env node*/

const editJsonFile = require('edit-json-file');

let file = editJsonFile('./package.json');

file = editJsonFile('./package.json', {
    autosave: true,
    stringify_width: 4,
});
file.unset('engines');
file.unset('scripts.setup');
file.unset('scripts.postsetup');
