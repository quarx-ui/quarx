import { KeysFromUseStyles, makeStyles } from '@core';
import { hideScrollbar } from '@core/styles/mixins/scroll';
import { TabsContainedStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, borderRadii, transitions },
    { borderRadius, color }: TabsContainedStyleParams,
) => ({
    root: {
        display: 'inline-flex',
        position: 'relative',
        overflow: 'scroll',
        maxWidth: '100%',
        ...hideScrollbar,
    },
    tab: {
        borderRadius: borderRadii[borderRadius],

        '&:not(:last-of-type)': {
            marginRight: 8,
        },
    },
    pointer: {
        position: 'absolute',
        height: '100%',
        backgroundColor: palette.colors[color].default,
        transition: transitions.create(['width', 'left']),
        borderRadius: borderRadii[borderRadius],
        overflow: 'hidden',
    },
    pointerInner: {
        display: 'flex',
        position: 'absolute',
        transition: transitions.create('left'),
    },
}), { name: 'QxTabsContained' });

export type TabsContainedStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabsContainedStyleParams };
