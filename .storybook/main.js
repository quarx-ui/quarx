module.exports = {
    stories: [
        '../packages/core/storybook/*.story.tsx',
        '../packages/**/*.story.tsx',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-designs'],
    babel: async (options) => {
        options.plugins.push([
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@quarx-ui': './packages',
                    '@core': './packages/core',
                },
            },
        ]);
        return options;
    },
};
