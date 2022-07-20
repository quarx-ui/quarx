import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';
import { KeysFromUseStyles, makeStyles, PaletteColor, PickSxBorderSize, PickSxSize, typography } from '@core';

export interface BadgeStyleParams {
    /** Тип заливки компонента.
     * Определяет фон компонента, а также цвет его внутренних элементов
     *
     * @param filled залитый компонент, цвет используемых иконок и фон Counter будет белым (по умолчанию)
     * @param outline фон компонента прозрачный,
     * цвет используемых иконок и фон Counter определяется в соответствии со свойством `color */
    type: 'filled' | 'outline',

    /** Размер компонента */
    size: PickSxSize<'small' | 'large'>,

    /** Цветовое решение компонента.
     * Определяет цвет фона или обводки (в зависимости от выбранного `type`) компонента,
     * а также цвет его внутренних элементов
     *
     * @param color1 основной светлый цвет
     * @param color2 основной темный цвет
     * @param warning цвет предупреждения
     * @param critical цвет ошибки */
    color: PaletteColor,

    /** Скругление компонента
     * @param square минимальный радиус скругления и почти острые углы
     * @param smooth среднее скругление
     * @param rounded максимальный радиус скругления, который можно использовать в любом стиле бренда (по умолчанию) */
    borderRadius: PickSxBorderSize<'square' | 'smooth' | 'rounded'>,
}

export const useStyles = makeStyles((
    { palette },
    { type, size, color, borderRadius }: Required<BadgeStyleParams>,
) => {
    const flexCenter: CSSObject = {
        display: 'flex',
        alignItems: 'center',
    };

    return ({
        root: {
            ...flexCenter,
            maxWidth: 'max-content',
            minWidth: 'fit-content',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            borderWidth: 1,
            borderStyle: 'solid',

            ...paramsToCss(size)({
                small: {
                    height: 24,
                    ...typography.Text.S.Medium,
                    padding: '3px 7px',
                },
                large: {
                    height: 32,
                    ...typography.Text.L.Medium,
                    padding: '3px 9px',
                },
            }),

            ...paramsToCss(size, borderRadius)({
                small: {
                    square: {
                        borderRadius: 4,
                    },
                    smooth: {
                        borderRadius: 8,
                    },
                    rounded: {
                        borderRadius: 24,
                    },
                },
                large: {
                    square: {
                        borderRadius: 4,
                    },
                    smooth: {
                        borderRadius: 12,
                    },
                    rounded: {
                        borderRadius: 24,
                    },
                },
            }),

            ...paramsToCss(type)({
                filled: {
                    color: palette.colors[color].contrastText,
                    backgroundColor: palette.colors[color].default,
                },
                outline: {
                    backgroundColor: 'transparent',
                    borderColor: palette.colors[color].default,
                    color: palette.colors[color].default,
                },
            }),
        },

        /* Side elements */
        leftItem: {
            marginRight: 4,

            ...flexCenter,
            ...paramsToCss(size)({
                small: {
                    marginLeft: '-2px',
                },
                large: {
                    marginLeft: '-4px',
                },
            }),
        },
        rightItem: {
            marginLeft: 4,

            ...flexCenter,
            ...paramsToCss(size)({
                small: {
                    marginRight: '-2px',
                },
                large: {
                    marginRight: '-4px',
                },
            }),
        },
        counter: {
            marginLeft: 6,
            ...paramsToCss(size)({
                small: {
                    marginRight: '-4px',
                },
                large: {
                    marginRight: '-6px',
                },
            }),
        },
    });
}, { name: 'SxBadge' });

export type BadgeStyleKeys = KeysFromUseStyles<typeof useStyles>;
