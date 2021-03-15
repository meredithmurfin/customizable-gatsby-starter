module.exports = {
    extends: 'stylelint-config-sass-guidelines',
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'no-missing-end-of-source-newline': null,
    },
};
