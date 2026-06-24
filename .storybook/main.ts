import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const toPath = (value: string) => path.resolve(process.cwd(), value);

const svgReactComponentImportRE = /import\s+\{\s*ReactComponent\s+as\s+([A-Za-z0-9_$]+)\s*\}\s+from\s+(['"])([^'"]+\.svg)\2;/g;

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.story.tsx',
        '../packages/*/storybook/**/*.story.tsx',
        '../packages/*/stories/**/*.story.tsx',
        '../packages/*/src/**/*.story.tsx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-docs',
        './addons/design/register.ts',
        './addons/theming/register.ts',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            legacyRootApi: true,
        },
    },
    docs: {
        defaultName: 'Документация',
    },
    viteFinal: async (config) => mergeConfig(config, {
        plugins: [
            {
                name: 'quarx-svg-react-component-compat',
                enforce: 'pre',
                transform(code, id) {
                    if (!/\.[jt]sx?$/.test(id) || !code.includes('ReactComponent')) {
                        return null;
                    }

                    const transformedCode = code.replace(
                        svgReactComponentImportRE,
                        'import $1 from $2$3?react$2;',
                    );

                    return transformedCode === code ? null : {
                        code: transformedCode,
                        map: null,
                    };
                },
            },
            svgr({
                include: '**/*.svg?react',
                svgrOptions: {
                    svgo: true,
                    svgoConfig: {
                        plugins: [{
                            name: 'removeViewBox',
                            active: false,
                        }],
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                '@quarx-ui': toPath('packages'),
                '@core': toPath('packages/core/src'),
                '@emotion/styled': toPath('node_modules/@emotion/styled'),
                'emotion/theming': toPath('node_modules/@emotion/react'),
            },
        },
    }),
};

export default config;
