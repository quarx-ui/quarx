
import { jsx } from '@emotion/react';
import React from 'react';
import { addons, types } from '@storybook/addons';
import { ThemeAddonConstants } from './constants';
import { ThemeTool } from './tool';
import { ThemingAddonAPI } from './store';

const match = ({ viewMode }) => (
    !!(viewMode && viewMode.match(/^(story|docs)$/))
);

const theme = ThemingAddonAPI.getLocallyStoredTheme();
addons.setConfig({ theme });

addons.register(ThemeAddonConstants.AddonID, (api) => {
    addons.add(ThemeAddonConstants.AddonID, {
        title: 'QuarX themes',
        type: types.TOOL,
        match,
        render: ({ active }) => (
            <React.Fragment>
                <ThemeTool
                    api={api}
                    active={active}
                />
            </React.Fragment>
        ),
    });
});
