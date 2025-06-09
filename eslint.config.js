const globals = require('globals');
const pluginJs = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
];
