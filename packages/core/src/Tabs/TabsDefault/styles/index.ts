import { KeysFromUseStyles, makeStyles } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { hideScrollbar } from '@core/styles/mixins/scroll';
import { TabsDefaultStyleParams } from './types';
import { TABS_LINES } from '../constants';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions },
    { size, line, color }: TabsDefaultStyleParams,
) => ({
    root: {
        display: 'inline-flex',
        position: 'relative',
        overflow: 'scroll',
        maxWidth: '100%',
        ...hideScrollbar,
    },
    tab: {
        '&:not(:last-of-type)': paramsToCss(size)({
            small: {
                marginRight: 16,
            },
            medium: {
                marginRight: 24,
            },
            large: {
                marginRight: 32,
            },
        }),
    },
    pointer: {
        position: 'absolute',
        height: 2,
        backgroundColor: palette.colors[color].default,
        transition: transitions.create(['width', 'left']),
        ...paramsToCss(line)({
            [TABS_LINES.down]: {
                bottom: 0,
                borderRadius: borderRadii.create('top'),

            },
            [TABS_LINES.up]: {
                top: 0,
                borderRadius: borderRadii.create('bottom'),
            },
        }),
    },
}), { name: 'SxTabsDefault' });

export type TabsDefaultStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabsDefaultStyleParams };
