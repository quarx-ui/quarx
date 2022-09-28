import React from 'react';
import {
    IconButton,
    Icons,
    TooltipLinkList,
    WithTooltip,
} from '@storybook/components';
import { ThemeAddonConstants } from './constants';
import { ThemingAddonAPI } from './store';

export const ThemeTool = ({ active }) => {
    const getThemes = () => (
        Object.values(ThemeAddonConstants.ThemeTypes).map((theme) => {
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
                    ? '✅'
                    : undefined,
                active,
            })
        })
    );

    return (
        <React.Fragment>
            <WithTooltip
                placement="top"
                trigger="click"
                closeOnClick
                tooltip={() => (
                    <TooltipLinkList
                        links={getThemes()}
                    />
                )}
            >
                <IconButton
                    active={active}
                    title="QuarX темы"
                >
                    <Icons icon="photo" />
                </IconButton>
            </WithTooltip>
        </React.Fragment>
    );
};
