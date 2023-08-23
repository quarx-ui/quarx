import { KeysFromUseStyles, makeStyles } from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { paramsToCss } from '@core/utils/paramsToCss';
import { QX_SIZE } from '@core';
import { CHIPS_VARIANT } from '@core/src/main/Chips/constants';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { ChipsCSSVarKeys } from './vars';
import { ChipsStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, elevations, transitions, typography },
    {
        elevation,
        active,
        size,
        leftIconColor,
        disabled,
        disableFocus,
        variant,
        rotateRightIcon,
        onlyStateIcon,
    }: ChipsStyleParams,
    {
        cssBorderWidth,
        cssFocusColor,
        cssFocusWidth,
        cssOutsideMargin,
        cssInsideMargin,
        cssPaddingX,
        cssPaddingY,
    }: Record<ChipsCSSVarKeys, string>,
) => {
    const canChangeLeftIconColor = !disabled && leftIconColor;

    const notAllowed = {
        cursor: 'not-allowed',
    };

    const press = {
        '&:active': !disabled && {
            backgroundColor: palette.colors.brand.alpha[16],
        },
    };

    const elevationOn = {
        [cssBorderWidth]: '0px',
        ...elevations.main.small,
        '&:hover': !disabled && {
            ...elevations.main.medium,
            backgroundColor: palette.colors.brand.alpha[8],
        },
        ...press,
        '&:focus-visible': !disabled && !disableFocus && {
            borderColor: 'transparent',
            ...elevations.main.medium,
            ...stylesWithFocus({
                borderColor: cssVar(cssFocusColor),
            }),
        },
    };

    const disabledAndElevation = {
        ...disabled && {
            ...notAllowed,
            borderColor: 'transparent',
            color: palette.disabled.secondary,
            boxShadow: 'none',
            backgroundColor: palette.background.main,
        },
    };

    const activeElevationState = {
        borderColor: palette.colors.brand.border,
        backgroundColor: palette.colors.brand.surface,
        '&:focus-visible': !disabled && !disableFocus && {
            ...elevations.main.medium,
            borderColor: 'transparent',
            backgroundColor: palette.colors.brand.bg,
            ...press,
            ...stylesWithFocus({
                borderColor: cssVar(cssFocusColor),
            }),
        },
    };

    const inactiveElevationState = {
        borderColor: 'transparent',
        backgroundColor: palette.background.main,
    };

    const isFilterTypeChips = variant === CHIPS_VARIANT.filter;
    const rotateActiveRightistFilterIcon = rotateRightIcon
        && active
        && isFilterTypeChips;

    const elevationOff = {
        borderColor: palette.colors.brand.border,
        backgroundColor: 'transparent',
        '&:hover': !disabled && {
            backgroundColor: palette.colors.brand.alpha[8],
        },
        ...press,
        '&:focus-visible': !disabled && !disableFocus && {
            ...elevations.main.medium,
            borderColor: 'transparent',
            ...stylesWithFocus({
                borderColor: cssVar(cssFocusColor),
            }),
        },
        ...disabled && {
            ...notAllowed,
            color: palette.disabled.secondary,
            borderColor: palette.disabled.secondary,
        },
    };

    const calcPaddingY = `calc(${cssVar(cssPaddingY)} - ${cssVar(cssBorderWidth)})`;
    const calcPaddingX = `calc(${cssVar(cssPaddingX)} - ${cssVar(cssBorderWidth)})`;

    return ({
        root: [
            {
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                outline: 'none',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: cssVar(cssBorderWidth),
                borderRadius: 20,
                color: palette.text.main,
                padding: `${calcPaddingY} ${calcPaddingX}`,
                transition: transitions.create([
                    'background-color',
                    'color',
                    'box-shadow',
                    'border-color',
                    'padding',
                ], { duration: transitions.duration.shorter }),

                [cssInsideMargin]: '8px',
                [cssBorderWidth]: '1px',
                [cssFocusWidth]: '3px',
                [cssFocusColor]: palette.border.focus.main,
                [cssOutsideMargin]: `calc(12px - ${cssVar(cssPaddingX)})`,
            },
            baseFocusStyles({
                transitions,
                borderWidth: cssVar(cssBorderWidth),
                focusWidth: cssVar(cssFocusWidth),
            }),
            elevation && elevationOn,
            elevation && paramsToCss(`active-${active}`)({
                'active-true': activeElevationState,
                'active-false': inactiveElevationState,
            }),
            elevation && disabledAndElevation,
            !elevation && elevationOff,
            paramsToCss(size)({
                [QX_SIZE.medium]: {
                    [cssPaddingX]: '20px',
                    [cssPaddingY]: '8px',
                    ...typography.base.text.large,
                    fontWeight: 500,
                },
                [QX_SIZE.small]: {
                    [cssPaddingX]: '16px',
                    [cssPaddingY]: '6px',
                    ...typography.base.text.medium,
                    fontWeight: 500,
                },
            }),
        ],

        content: {},

        leftIcon: [
            {
                display: 'flex',
                marginRight: cssVar(cssInsideMargin),
                marginLeft: cssVar(cssOutsideMargin),
            },
            canChangeLeftIconColor && {
                color: leftIconColor,
            },
            onlyStateIcon && {
                width: 24,
                transition: transitions.create(['width', 'padding', 'margin', 'opacity']),
            },
            onlyStateIcon && !active && {
                width: 0,
                padding: 0,
                margin: 0,
                opacity: 0,
            },
        ],

        rightIcon: [
            {
                display: 'flex',
                marginLeft: cssVar(cssInsideMargin),
                marginRight: cssVar(cssOutsideMargin),
                transition: transitions.create('transform', {
                    duration: transitions.duration.shorter,
                }),
            },
            rotateActiveRightistFilterIcon && {
                transform: 'rotate(180deg)',
            },
        ],
    });
});

export type ChipsStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
