module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ignorePatterns: ['.eslintrc.js'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        extraFileExtensions: ['.json'],
        project: './tsconfig.eslint.json', // This setting is required if you want to use rules which require type information
    },
    plugins: [
        '@typescript-eslint', // Specifies the ESLint plugins
        'json',
        'react',
        'react-hooks',
        'prettier',
    ],
    extends: [
        'eslint:recommended', // Enables rules recommended by @eslint: https://eslint.org/docs/rules/
        'plugin:react/recommended', // Enables rules recommended by @eslint-plugin-react: https://www.npmjs.com/package/eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Enables rules recommended by @typescript-eslint/eslint-plugin: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // Enables rules recommended by @typescript-eslint/eslint-plugin that require type checking: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
        'plugin:json/recommended', // Enables rules specifically for .json files: https://www.npmjs.com/package/eslint-plugin-json
        'prettier',
        'prettier/prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        // *** Make sure plugin:prettier/recommended is ALWAYS the last configuration in the extends array
        'plugin:prettier/recommended', // Enables rules recommended by @eslint-plugin-prettier and @eslint-config-prettier
    ],
    env: {
        // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
        es6: true,
        node: true, // Node.js global variables and Node.js scoping.
        browser: true,
    },
    settings: {
        react: {
            version: 'detect', // Tells @eslint-plugin-react to automatically detect the version of React to use
        },
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }], // Displays prettier errors as ESLint errors
        // @eslint-plugin-react rules in addition to plugin:react/recommended
        'react/boolean-prop-naming': [
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
            'error',
            {
                propTypeNames: ['boolean', 'mutuallyExclusiveTrueProps'],
                rule: '^(is|should|has|can|did|contains)[A-Z]([A-Za-z]?)+',
                message:
                    'It is preferred that your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
                validateNested: true,
            },
        ],
        'react/destructuring-assignment': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/function-component-definition': [
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'function-expression',
            },
        ],
        'react/no-typos': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        'react/self-closing-comp': 'error', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/sort-prop-types': [
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
            'error',
            {
                requiredFirst: true,
            },
        ],
        // @typescript-eslint rules in addition to plugin:@typescript-eslint/recommended
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/array-type.md
        '@typescript-eslint/consistent-type-assertions': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface',
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        '@typescript-eslint/consistent-type-imports': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-imports.md
            'error',
            { prefer: 'no-type-imports', disallowTypeAnnotations: true },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
            'error',
            {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            },
        ],
        '@typescript-eslint/member-delimiter-style': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        '@typescript-eslint/member-ordering': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/member-ordering.md
        '@typescript-eslint/method-signature-style': ['error', 'method'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/method-signature-style.md
        '@typescript-eslint/naming-convention': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/naming-convention.md
            'error',
            {
                selector: ['default'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: ['variable'],
                format: ['camelCase'],
            },
            {
                selector: ['variableLike', 'parameterProperty'],
                types: ['boolean'],
                format: ['camelCase'],
                prefix: ['is', 'should', 'has', 'can', 'did', 'contains'],
            },
            {
                selector: ['typeLike', 'enum'],
                format: ['PascalCase'],
            },
        ],
        '@typescript-eslint/no-extraneous-class': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extraneous-class.md
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: false,
                allowWithDecorator: false,
            },
        ],
        '@typescript-eslint/no-require-imports': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-require-imports.md
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        '@typescript-eslint/no-unnecessary-condition': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
            'error',
            {
                allowConstantLoopConditions: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
        ],
        '@typescript-eslint/no-unnecessary-qualifier': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        '@typescript-eslint/prefer-enum-initializers': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
        '@typescript-eslint/prefer-includes': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-includes.md
        '@typescript-eslint/prefer-optional-chain': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        '@typescript-eslint/prefer-ts-expect-error': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
        '@typescript-eslint/promise-function-async': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md
            'error',
            {
                allowedPromiseNames: ['Thenable'],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true,
            },
        ],
        '@typescript-eslint/sort-type-union-intersection-members': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
            'error',
            {
                checkIntersections: true,
                checkUnions: true,
                groupOrder: [
                    'named',
                    'keyword',
                    'operator',
                    'literal',
                    'function',
                    'import',
                    'conditional',
                    'object',
                    'tuple',
                    'intersection',
                    'union',
                    'nullish',
                ],
            },
        ],
        '@typescript-eslint/type-annotation-spacing': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        '@typescript-eslint/typedef': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/typedef.md
            'error',
            {
                arrayDestructuring: true,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: false,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: false,
                variableDeclarationIgnoreFunction: false,
            },
        ],
        // @typescript-eslint rules in addition to plugin:@typescript-eslint/recommended-requiring-type-checking
        'brace-style': 'off', // https://eslint.org/docs/rules/brace-style
        '@typescript-eslint/brace-style': ['error', '1tbs'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/brace-style.md
        'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-dangle.md
        'comma-spacing': 'off', // https://eslint.org/docs/rules/comma-spacing
        '@typescript-eslint/comma-spacing': [
            'error',
            { before: false, after: true },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-spacing.md
        'default-param-last': 'off', // https://eslint.org/docs/rules/default-param-last
        '@typescript-eslint/default-param-last': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/default-param-last.md
        'dot-notation': 'off', // https://eslint.org/docs/rules/dot-notation
        '@typescript-eslint/dot-notation': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/dot-notation.md
        'func-call-spacing': 'off', // https://eslint.org/docs/rules/func-call-spacing
        '@typescript-eslint/func-call-spacing': ['error', 'never'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/func-call-spacing.md
        'keyword-spacing': 'off', // https://eslint.org/docs/rules/keyword-spacing
        '@typescript-eslint/keyword-spacing': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/keyword-spacing.md
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'lines-between-class-members': 'off', // https://eslint.org/docs/rules/lines-between-class-members
        '@typescript-eslint/lines-between-class-members': ['error', 'always'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/lines-between-class-members.md
        'no-duplicate-imports': 'off', // https://eslint.org/docs/rules/no-duplicate-imports
        '@typescript-eslint/no-duplicate-imports': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
        'no-extra-parens': 'off', // https://eslint.org/docs/rules/no-extra-parens
        '@typescript-eslint/no-extra-parens': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-extra-parens.md
            'error',
            'all',
            {
                returnAssign: false,
                enforceForArrowConditionals: false,
            },
        ],
        'no-invalid-this': 'off', // https://eslint.org/docs/rules/no-invalid-this
        '@typescript-eslint/no-invalid-this': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-invalid-this.md
        'no-redeclare': 'off', // https://eslint.org/docs/rules/no-redeclare
        '@typescript-eslint/no-redeclare': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-redeclare.md
            'error',
            {
                builtinGlobals: true,
            },
        ],
        'no-unused-expressions': 'off', // https://eslint.org/docs/rules/no-unused-expressions
        '@typescript-eslint/no-unused-expressions': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-expressions.md
            'error',
            {
                allowShortCircuit: true,
                allowTaggedTemplates: false,
                allowTernary: true,
                enforceForJSX: false,
            },
        ],
        'no-useless-constructor': 'off', // https://eslint.org/docs/rules/no-useless-constructor
        '@typescript-eslint/no-useless-constructor': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        'object-curly-spacing': 'off', // https://eslint.org/docs/rules/object-curly-spacing
        '@typescript-eslint/object-curly-spacing': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/object-curly-spacing.md
            'error',
            'always',
            {
                objectsInObjects: false,
            },
        ],
        quotes: 'off', // https://eslint.org/docs/rules/quotes
        '@typescript-eslint/quotes': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/quotes.md
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        semi: 'off', // https://eslint.org/docs/rules/semi
        '@typescript-eslint/semi': ['error', 'always'], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/semi.md
        'space-before-function-paren': 'off', // https://eslint.org/docs/rules/space-before-function-paren
        '@typescript-eslint/space-before-function-paren': [
            // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-before-function-paren.md
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-infix-ops': 'off', // https://eslint.org/docs/rules/space-infix-ops
        '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }], // https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-infix-ops.md
    },
    overrides: [
        {
            // Enable this rule specifically for TypeScript files
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error'],
            },
        },
    ],
};
