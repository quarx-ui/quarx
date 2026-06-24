import React from 'react';
import { addons, types } from 'storybook/manager-api';
import { ThemeAddonConstants } from './constants.ts';
import { ThemingAddonAPI } from './store.ts';

const ThemeTool = React.lazy(() => import('./tool.ts').then((module) => ({
    default: module.ThemeTool,
})));

const match = ({ viewMode }: { viewMode?: string }) => (
    !!(viewMode && viewMode.match(/^(story|docs)$/))
);

const theme = ThemingAddonAPI.getLocallyStoredTheme();
addons.setConfig({ theme });

addons.register(ThemeAddonConstants.AddonID, () => {
    addons.add(ThemeAddonConstants.AddonID, {
        title: 'QuarX themes',
        type: types.TOOL,
        match,
        render: ({ active }) => React.createElement(
            React.Suspense,
            { fallback: null },
            React.createElement(ThemeTool, { active }),
        ),
    });
});
