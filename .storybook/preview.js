import React from 'react';
import { ArgsTable, Primary, PRIMARY_STORY, Stories, Subtitle, Title, Description } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../packages/core/src/styles/fonts/font-faces.css';
import { addDecorator } from '@storybook/react'
import { ThemingAddonAPI as ThemeAddonAPI } from './addons/theming/store';
import { ThemeDecorator } from './addons/theming/decorator';

const decorators = [ThemeDecorator];

decorators.forEach((decorator) => addDecorator(decorator));

export const parameters = {
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
            title: 'Документация'
        },
        canvas: {
            index: 1,
            title: 'Песочница'
        },
    },
    viewMode: 'docs',
    docs: {
        theme: ThemeAddonAPI.getLocallyStoredTheme(),
        page: () => (
            <>
                <Title/>
                <Description />
                <Primary/>
                <Subtitle>Описание пропсов</Subtitle>
                <ArgsTable story={PRIMARY_STORY} />
                <Stories title={'Примеры использования'}/>
            </>
        ),
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'default',
    },
};
