import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Badge, PALETTE_TYPES, useTheme, SystemBasedThemeProviderProps } from '@core';
import { useSystemTheme } from '@core/utils/hooks/useSystemTheme';
import { SystemBasedThemeProvider } from '..';

export default {
    title: 'core/components/system/SystemBaseThemeProvider',
    tags: ['autodocs'],
    component: SystemBasedThemeProvider,
    argTypes: {
        themeType: {
            description: 'Текущий выбранный элемент. Каждому Case передается свой уникальный',
            options: PALETTE_TYPES,
            control: { type: 'select' },
        },
        disableCheckSystemTheme: {
            description: 'Текущий выбранный элемент. Каждому Case передается свой уникальный',
            control: { type: 'boolean' },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Возможна работа в нескольких случаях:\n'
                    + '1. Загрузка страницы и следование системной теме `пропсы не требуются`\n'
                    + '2. Загрузка страницы с темой, которая проинициализирована и следование инициализированной теме '
                    + '`themeType + disableCheckSystemTheme`\n'
                    + '3. Загрузка страницы с системной темой и следование инициализированной теме'
                    + '`themeType или отсутствие пропсов при инициализации '
                    + '-> при переключении добавление disableCheckSystemTheme`\n'
                    + '4. Для экстраординарных случаев `theme` можно передать явно',
            },
        },
    },
    args: { disableCheckSystemTheme: false },
};

const BadgeCheckerCurrentTheme = () => {
    const { palette: { type } } = useTheme();
    return <Badge css={{ marginTop: 10 }} type="ghosted" color="brand">{`Current Theme: ${type}`}</Badge>;
};

const Template: StoryFn<SystemBasedThemeProviderProps> = (props) => {
    const systemThemeType = useSystemTheme();

    return (
        <SystemBasedThemeProvider {...props}>
            <SystemBasedThemeProvider>
                <Badge css={{ marginTop: 10 }} type="ghosted" color="brand">
                    {`System Theme: ${systemThemeType}`}
                </Badge>
            </SystemBasedThemeProvider>
            <BadgeCheckerCurrentTheme />
        </SystemBasedThemeProvider>
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';
