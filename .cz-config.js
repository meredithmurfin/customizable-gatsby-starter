module.exports = {
    types: [
        {
            value: 'chore',
            name: 'chore:      ⚙️ Build process or supporting tool changes',
        },
        {
            value: 'ci',
            name: 'ci:         🚀 CI-related changes',
        },
        {
            value: 'docs',
            name: 'docs:       📚 Documentation updates',
        },
        {
            value: 'feat',
            name: 'feat:       ⭐ Adds functionality',
        },
        {
            value: 'fix',
            name: 'fix:        🐞 Fixes a bug',
        },
        {
            value: 'perf',
            name: 'perf:       ⚡️ Changes that improve performance',
        },
        {
            value: 'refactor',
            name: 'refactor:   ♻️ Neither fixes a bug nor adds functionality',
        },
        {
            value: 'release',
            name: 'release:    🔖 Releases a new version',
        },
        {
            value: 'setup',
            name: 'setup:      🎉 Initial setup',
        },
        {
            value: 'style',
            name: 'style:      🎨 Adds or updates styles',
        },
        {
            value: 'test',
            name: 'test:       🧪 Adds or updates tests',
        },
        {
            value: 'ux',
            name: 'ux:         🚸 Changes that improve user experience',
        },
    ],
    scopes: [
        {
            value: 'wip',
            name: 'wip:    🚧 WIP',
        },
        {
            value: 'review',
            name: 'review: 💯 Code review changes',
        },
    ],
    allowTicketNumber: false,
    scopeOverrides: {
        chore: [
            {
                value: 'add-dep',
                name: 'add-dep:    ➕ Adds dependencies',
            },
            {
                value: 'analytics',
                name: 'analytics:  📈 Adds or updates analytics',
            },
            {
                value: 'config',
                name: 'config:     🛠️ Adds or updates configuration files',
            },
            {
                value: 'downgrade',
                name: 'downgrade:  ⬇️ Downgrades dependencies',
            },
            {
                value: 'errors',
                name: 'errors:     🥅 Changes that improve error handling',
            },
            {
                value: 'ignore',
                name: 'ignore:     🙈 Adds or updates .*ignore files',
            },
            {
                value: 'merge',
                name: 'merge:      🔀 Merge branches',
            },
            {
                value: 'pin-dep',
                name: 'pin-dep:    📌 Pins dependencies to specific versions',
            },
            {
                value: 'rem-dep',
                name: 'rem-dep:    ➖ Removes dependencies',
            },
            {
                value: 'scripts',
                name: 'scripts:    📜 Adds or updates development scripts',
            },
            {
                value: 'security',
                name: 'security:   🔒 Security-related changes',
            },
            {
                value: 'upgrade',
                name: 'upgrade:    ⬆️ Upgrades dependencies',
            },
        ],
        docs: [
            {
                value: 'config',
                name: 'config: 🛠️ Adds or updates configuration documentation',
            },
            {
                value: 'logs',
                name: 'logs:   🔊 Adds or updates logs',
            },
            {
                value: 'meta',
                name: 'meta:   📖 Adds or updates metadata',
            },
        ],
        fix: [
            {
                value: 'downgrade',
                name: 'downgrade:  ⬇️ Downgrades dependencies',
            },
            {
                value: 'merge',
                name: 'merge:      🔀 Merge branches',
            },
            {
                value: 'quick',
                name: 'quick:      🚑 Temporarily resolves a critical bug',
            },
            {
                value: 'revert',
                name: 'revert:     🦔 Rolls back to a previous version',
            },
            {
                value: 'style',
                name: 'style:      🎨 Fixes styles',
            },
            {
                value: 'test',
                name: 'test:       ✔️ Fixes tests',
            },
            {
                value: 'typo',
                name: 'typo:       ✏️ Fixes typos',
            },
            {
                value: 'upgrade',
                name: 'upgrade:    ⬆️ Upgrades dependencies',
            },
            {
                value: 'warn',
                name: 'warn:       🚨 Fixes compiler and/or 👕 linter warnings',
            },
        ],
        refactor: [
            {
                value: 'abstract',
                name:
                    'abstract:   〰️ Changes that simplify code through abstraction',
            },
            {
                value: 'move',
                name: 'move:       🚚 Moves files',
            },
            {
                value: 'prune',
                name: 'prune:      🔥 Removes code and/or files',
            },
            {
                value: 'read',
                name: 'read:       💡 Changes that improve code readability',
            },
            {
                value: 'rename',
                name: 'rename:     🏷️ Renames files',
            },
            {
                value: 'reuse',
                name:
                    'reuse:      ➰ Changes that implement or improve code reuse',
            },
        ],
        setup: [
            {
                value: 'config',
                name: 'config: 🛠️ Adds or updates configuration files',
            },
            {
                value: 'init',
                name: 'init:   💃 Initial commit',
            },
            {
                value: 'move',
                name: 'move:   🚚 Moves files',
            },
            {
                value: 'prune',
                name: 'prune:  🔥 Removes code and/or files',
            },
            {
                value: 'rename',
                name: 'rename: 🏷️ Renames files',
            },
        ],
        test: [
            {
                value: 'e2e',
                name: 'e2e:    🎢 Adds or updates end-to-end tests',
            },
            {
                value: 'perf',
                name: 'perf:   ⚡️ Adds or updates performance tests',
            },
            {
                value: 'unit',
                name: 'unit:   🚦 Adds or updates unit tests',
            },
        ],
        ux: [
            {
                value: 'access',
                name: 'access:     ♿️ Changes that improve user accessibility',
            },
            {
                value: 'alt-text',
                name: 'alt-text:   💬 Adds or updates alternative text',
            },
            {
                value: 'android',
                name: 'android:    🤖 Android-specific changes',
            },
            {
                value: 'animation',
                name:
                    'animation:  ✨ Adds or updates animations and transitions',
            },
            {
                value: 'ios',
                name: 'ios:        📱 iOS-specific changes',
            },
            {
                value: 'linux',
                name: 'linux:      🐧 Linux-specific changes',
            },
            {
                value: 'osx',
                name: 'osx:        🍎 OSX-specific changes',
            },
            {
                value: 'responsive',
                name:
                    'responsive: 📲 Changes that affect overall responsive design',
            },
            {
                value: 'style',
                name: 'style:      🎨 Adds or updates styles',
            },
            {
                value: 'ui',
                name: 'ui:         🖥️ General UI-related changes',
            },
            {
                value: 'windows',
                name: 'windows:    🏁 Windows-specific changes',
            },
        ],
    },
    messages: {
        type: "Select the type of change that you're committing:",
        scope: 'Select the scope of this change (optional):',
        customScope: 'Denote the scope of this change:',
        subject: 'Write a short description describing this change:\n',
        confirmCommit:
            'Are you sure you want to proceed with the commit above?',
    },
    allowCustomScopes: true,
    skipQuestions: ['body', 'breaking', 'footer'],
    subjectLimit: 100,
};
