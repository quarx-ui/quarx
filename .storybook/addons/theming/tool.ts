import React from 'react';
import {
    IconButton,
    TooltipLinkList,
    WithTooltip,
} from 'storybook/internal/components';
import { PhotoIcon } from '@storybook/icons';
import { ThemeAddonConstants, type ThemeType } from './constants.ts';
import { ThemingAddonAPI } from './store.ts';

interface ThemeToolProps {
    active?: boolean;
}

export const ThemeTool = ({ active }: ThemeToolProps) => {
    const getThemes = () => (
        Object.values(ThemeAddonConstants.ThemeTypes).map((theme: ThemeType) => {
            const onClick = () => {
                if (ThemingAddonAPI.isCurrentTheme(theme)) { return; }
                ThemingAddonAPI.setTheme(theme);
                window.location.reload();
            };
            return ({
                id: theme,
                title: theme.charAt(0).toUpperCase() + theme.substring(1),
                onClick,
                value: theme,
                right: ThemingAddonAPI.isCurrentTheme(theme)
                    ? '✓'
                    : undefined,
                active,
            });
        })
    );

    return React.createElement(
        WithTooltip,
        {
            placement: 'top',
            trigger: 'click',
            closeOnClick: true,
            tooltip: () => React.createElement(TooltipLinkList, {
                links: getThemes(),
            }),
        },
        React.createElement(
            IconButton,
            {
                active,
                title: 'QuarX темы',
            },
            React.createElement(PhotoIcon),
        ),
    );
};
