import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_ORIGIN, OVER_SCREEN_PLACEMENT, OverScreen as OverScreenKit } from '@core';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { OverScreenProps } from '..';

const defaultArgs: Partial<OverScreenProps> = {
    origin: OVER_SCREEN_ORIGIN.right,
    placement: OVER_SCREEN_PLACEMENT.center,
    appearance: OVER_SCREEN_APPEARANCE.fade,
    disableBackdrop: false,
    disableScrollLock: false,
    disablePortal: false,
    keepMounted: false,
    disableCloseByClickAway: false,
    disableCloseByEscape: false,
};

export default {
    title: STORY_PATHS.core.components.system('OverScreen'),
    component: OverScreenKit,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Расположение', {
            origin: {},
            placement: {},
            offset: {},
            margin: {},
        }),
        ...defineCategory('Поведение', {
            open: {},
            appearance: {},
            keepMounted: {},
            disableCloseByClickAway: {},
            disableCloseByEscape: {},
            disableScrollLock: {},
            disablePortal: {},
            disableBackdrop: {},
            onClose: {},
        }),
        ...defineCategory('Компоненты', {
            children: { control: false },
            TransitionProps: {},
            DelayedMounterProps: {},
            BackdropProps: {},
            PortalProps: {},
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
} as Meta<OverScreenProps>;

export { OverScreen } from './sandbox';
export { AppearancesStory } from './appearance';
export { BooleanVariantsStory } from './booleanVariants';
export { MarginStory } from './margin';
export { OffsetStory } from './offset';
export { OriginsStory } from './origins';
export { PlacementsStory } from './placement';
