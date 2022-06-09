const ignoredFiles = [
    '**/build',
    '**/node_nodules',
    '**/*.svg',
    '**/*.log',
    '**/babel.config.js',
    '**/tsconfig.json',
    '**/package.json',
    '**/*.md',
    '**/custom.d.ts',
];
const buildIgnoredFiles = [
    '**/*.story.png',
    '**/storybook',
    '**/__tests__',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.test.pw.ts',
    '**/*.test.pw.tsx',
    '**/*.story.ts',
    '**/*.story.tsx',
    ...ignoredFiles,
];

const plugins = [
    [
        'inline-import-data-uri', {
            extensions: [
                '.story.png',
            ],
        },
    ],
    [
        'inline-react-svg',
        {
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false,
                    },
                ],
            },
        },

    ],
    [
        'css-modules-transform', {
            keepImport: true,
            extractCss: {
                dir: './build/styles/',
                relativeRoot: './src/',
                filename: '[path]/[name].css',
            },
        },
    ],
    [
        'module-resolver',
        {
            root: ['.'],
            alias: {
                '@quarx': '../',
                '@core': './',
            },
        },
    ],
    ['@babel/plugin-proposal-class-properties', {
        loose: true,
    }],
    ['@babel/plugin-proposal-private-property-in-object',
        { loose: true }],
    ['@babel/plugin-proposal-private-methods',
        { loose: true },
    ],
];

const presets = [
    [
        '@babel/preset-react',
        {
            development: !(['build', 'buildES'].includes(process.env.BABEL_ENV)),
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
        plugins: [
            ...plugins,
        ],
        env: {
            build: {
                ignore: [
                    ...buildIgnoredFiles,
                ],
            },
            buildES: {
                ignore: [
                    ...buildIgnoredFiles,
                ],
                presets: [
                    [
                        '@babel/env',
                        {
                            modules: false,
                        },
                    ],
                    ...presets,
                ],
            },
        },
        ignore: [
            ...ignoredFiles,
        ],
    };
};
