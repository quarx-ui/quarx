const path = require("path");
const toPath = (p) => path.join(process.cwd(), p);

module.exports = {
    stories: [
        '../packages/core/storybook/*.story.tsx',
        '../packages/**/*.story.tsx',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            // Данный tool заменен на более обширный addon/theming
            options: { backgrounds: false },
        },
        'storybook-addon-designs',
        './addons/theming/register.js',
    ],
    babel: async (options) => ({
        ...options,
        plugins: [
            ...options.plugins,

            ['module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@quarx-ui': './packages',
                        '@core': './packages/core',
                        '@emotion/styled': toPath('node_modules/@emotion/styled'),
                        'emotion/theming': toPath('node_modules/@emotion/react'),
                    },
                },]
        ],
    }),
};
