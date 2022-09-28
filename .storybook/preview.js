import React from 'react';
import { ArgsTable, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from '@storybook/addon-docs';
import '../packages/core/styles/fonts/font-faces.css';
import { addDecorator } from '@storybook/react'
import { ThemingAddonAPI as ThemeAddonAPI } from './addons/theming/store';
import { ThemeDecorator } from './addons/theming/decorator';

const decorators = [ThemeDecorator];

decorators.forEach((decorator) => addDecorator(decorator));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
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
                <Primary/>
                <Subtitle>Описание пропсов</Subtitle>
                <ArgsTable story={PRIMARY_STORY} />
                <Stories title={'Примеры использования'}/>
            </>
        ),
    },
};
