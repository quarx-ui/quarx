import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../packages/core/src/styles/fonts/font-faces.css';
import { ThemingAddonAPI as ThemeAddonAPI } from './addons/theming/store';
import { ThemeDecorator } from './addons/theming/decorator';

const preview: Preview = {
    decorators: [
        ThemeDecorator,
    ],
    parameters: {
        actions: { disable: true },
        design: { disable: true },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ['core', ['Introduction', 'manuals']],
            },
        },
        previewTabs: {
            'storybook/docs/panel': {
                index: 0,
                title: 'Документация',
            },
            canvas: {
                index: 1,
                title: 'Песочница',
            },
        },
        viewMode: 'docs',
        docs: {
            theme: ThemeAddonAPI.getLocallyStoredTheme(),
            page: () => (
                <React.Fragment>
                    <Title />
                    <Description />
                    <Primary />
                    <Subtitle>Описание пропсов</Subtitle>
                    <Controls />
                    <Stories title="Примеры использования" />
                </React.Fragment>
            ),
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'responsive',
        },
    },
};

export default preview;
