import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_ORIGIN, OVER_SCREEN_PLACEMENT } from '@core';
import { OverScreenProps } from '..';
import { Origins, Placements, Appearances, Offset, Margin, BooleanVariants } from './common';

const defaultArgs: Partial<OverScreenProps> = {
    origin: OVER_SCREEN_ORIGIN.right,
    placement: OVER_SCREEN_PLACEMENT.center,
    appearance: OVER_SCREEN_APPEARANCE.fade,
    disableBackdrop: false,
    disableScrollLock: false,
    disablePortal: false,
    keepMounted: false,
    disableCloseByClickAway: true,
    disableCloseByEscape: true,
};

// export default {
// title: 'core/OverScreen',
// component: OverScreen,
// argTypes: {
//     ...defineCategory('Расположение', {
//         origin: {},
//         placement: {},
//         offset: {},
//         margin: {},
//     }),
//     ...defineCategory('Поведение', {
//         open: {},
//         appearance: {},
//         keepMounted: {},
//         disableCloseByClickAway: {},
//         disableCloseByEscape: {},
//         disableScrollLock: {},
//         disablePortal: {},
//         disableBackdrop: {},
//         onClose: {},
//     }),
//     ...defineCategory('Компоненты', {
//         children: { control: false },
//         TransitionProps: { control: false },
//         ContentTransitionProps: { control: false },
//         BackdropProps: { control: false },
//         PortalProps: { control: false },
//     }),
//     ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
// },
// parameters: {
//     actions: { disable: true },
// },
// args: defaultArgs,
// };

// export {
//     Sandbox,
//     Origins,
//     Placements,
//     Appearances,
//     Offset,
//     Margin,
//     BooleanVariants,
// };

const variantsArray = [
    Origins,
    Placements,
    Appearances,
    Offset,
    Margin,
    BooleanVariants,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
