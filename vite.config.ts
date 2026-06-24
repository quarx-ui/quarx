import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const toPath = (value: string) => path.resolve(process.cwd(), value);
const svgReactComponentImportRE = /import\s+\{\s*ReactComponent\s+as\s+([A-Za-z0-9_$]+)\s*\}\s+from\s+(['"])([^'"]+\.svg)\2;/g;

export default defineConfig({
    plugins: [
        {
            name: 'quarx-svg-react-component-compat',
            enforce: 'pre',
            transform(code: string, id: string) {
                if (!/\.[jt]sx?$/.test(id) || !code.includes('ReactComponent')) {
                    return null;
                }

                const transformedCode = code.replace(
                    svgReactComponentImportRE,
                    'import $1 from $2$3?react$2;'
                );

                return transformedCode === code
                    ? null
                    : {
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
                    plugins: [
                        {
                            name: 'removeViewBox',
                            active: false,
                        },
                    ],
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
});
