const ignoredFiles = [
    '**/build',
    '**/node_nodules',
    '**/*.svg',
    '**/*.log',
    '*.log',
    'CHANGELOG.md',
    '*.js',
    '*.json',
];
const buildIgnoredFiles = [
    '**/storybook',
    '**/*.test.tsx',
    '**/*.test.ts',
    '**/*.story.ts',
    '**/*.story.tsx',
    ...ignoredFiles,
];

const presets = [
    [
        '@babel/preset-react',
        {
            development: process.env.BABEL_ENV !== 'build',
        },
    ],
    '@babel/preset-typescript',
];

module.exports = (api) => {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/env',
                {
                    targets: {
                        browsers: 'Last 2 Chrome versions, Firefox ESR',
                        node: '8.9',
                    },
                },
            ],
            ...presets,
        ],
        env: {
            build: {
                ignore: [
                    ...buildIgnoredFiles,
                ],
            },
        },
        ignore: [
            ...ignoredFiles,
        ],
    };
};
