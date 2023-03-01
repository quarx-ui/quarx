import { KeysFromUseStyles, makeStyles } from '@core';
import { hideScrollbar } from '@core/styles/mixins/scroll';
import { TabsSegmentedStyleParams } from './types';
import { TABS_SEGMENTED_PADDING } from '../constants';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions, elevations },
    { borderRadius }: TabsSegmentedStyleParams,
) => ({
    root: {
        display: 'inline-flex',
        maxWidth: '100%',
        backgroundColor: palette.background.secondary,
        borderRadius: `calc(${borderRadii[borderRadius]} + ${TABS_SEGMENTED_PADDING}px)`,
    },
    container: {
        display: 'inline-flex',
        position: 'relative',
        overflow: 'scroll',
        padding: TABS_SEGMENTED_PADDING,
        ...hideScrollbar,
    },
    tab: {
        whiteSpace: 'nowrap',
        '&:not(:last-of-type)': {
            marginRight: 8,
        },

        '&&:not(:focus-visible)': {
            boxShadow: 'none',
        },
    },
    pointer: {
        position: 'absolute',
        boxSizing: 'border-box',
        height: `calc(100% - ${2 * TABS_SEGMENTED_PADDING}px)`,
        backgroundColor: palette.background.main,
        transition: transitions.create(['width', 'left']),
        borderRadius: borderRadii[borderRadius],
        overflow: 'hidden',
        boxShadow: elevations.small,
    },
    pointerInner: {
        display: 'flex',
        position: 'absolute',
        maxHeight: '100%',
        transition: transitions.create('left'),
    },
}), { name: 'QxTabsSegmented' });

export type TabsSegmentedStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabsSegmentedStyleParams };
