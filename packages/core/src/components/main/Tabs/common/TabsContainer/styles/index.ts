import { KeysFromUseStyles, makeStyles } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TabsContainerStyleParams } from './types';
import { TABS_FADE_WIDTH, TABS_SCROLL_POSITIONS } from '../../constants';

export const useStyles = makeStyles((
    { transitions },
    { scrollPosition }: TabsContainerStyleParams,
) => ({
    root: [
        {
            maskImage:
                `linear-gradient(
                    to right,
                    transparent,
                    transparent 4px,
                    black ${TABS_FADE_WIDTH}px,
                    black 50%, transparent 51%,
                    transparent
                ),
                linear-gradient(
                   to left,
                   transparent,
                   transparent 4px,
                   black ${TABS_FADE_WIDTH}px,
                   black 50%, 
                   transparent 51%,
                   transparent
                   )`,
            maskRepeat: 'no-repeat',
            transition: transitions.create([
                'mask-position',
                'mask-size',
                '-webkit-mask-position',
                '-webkit-mask-size',
            ], {
                duration: transitions.duration.complex,
                easing: 'ease-in-out',
            }),
        },
        paramsToCss(scrollPosition)({
            [TABS_SCROLL_POSITIONS.none]: {
                maskPosition: -TABS_FADE_WIDTH,
                maskSize: `calc(100% + ${2 * TABS_FADE_WIDTH}px)`,
            },
            [TABS_SCROLL_POSITIONS.start]: {
                maskPosition: -TABS_FADE_WIDTH,
                maskSize: `calc(100% + ${TABS_FADE_WIDTH}px)`,
            },
            [TABS_SCROLL_POSITIONS.end]: {
                maskPosition: 0,
                maskSize: `calc(100% + ${TABS_FADE_WIDTH}px)`,
            },
            [TABS_SCROLL_POSITIONS.between]: {
                maskPosition: 0,
                maskSize: '100%',
            },
        }),
    ],
}));

export type TabsContainerStyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { TabsContainerStyleParams };
