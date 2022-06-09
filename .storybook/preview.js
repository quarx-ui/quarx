import React from 'react';
import { ArgsTable, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { dark, light } from '@core/styles/engine/theme/palette/default';
import '../packages/core/styles/fonts/font-faces.css';

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
    backgrounds: {
        defaultValue: 'light',
        values: [
            {
                name: 'light',
                value: light.Background.main,
            },
            {
                name: 'dark',
                value: dark.Background.main,
            },
        ],
    },
};
