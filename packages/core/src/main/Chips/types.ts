import { ReactElement } from 'react';
import {
    BaseProps,
    ComponentPropsWithHTML,
    OmittedChipsStyleParams,
    SVGIcon,
    Values,
    WithClassesAndStyles,
} from '@core';
import { CHIPS_VARIANT } from './constants';
import { ChipsCSSVarKeys, ChipsStyleKeys, ChipsStyleParams } from './styles';

export type ChipsVariant = Values<typeof CHIPS_VARIANT>;
type StyleParams = Partial<Omit<ChipsStyleParams, keyof OmittedChipsStyleParams>>

export interface ChipsPropsWithoutHtml extends
    StyleParams,
    WithClassesAndStyles<ChipsStyleKeys, ChipsStyleParams, ChipsCSSVarKeys>,
    BaseProps<HTMLButtonElement>
{
    /** Текст */
    children?: string;

    /** Иконка, отображаемая слева в активированном состоянии (если передан "false" иконка скрыта)
     *
     * @default CheckMarkIcon */
    activeStateIcon?: false | ReactElement | SVGIcon;

    /** Левая иконка */
    leftIcon?: ReactElement | SVGIcon;

    /** Правая иконка (кастомная либо стандартная, если передан "true") */
    rightIcon?: boolean | ReactElement | SVGIcon;

    /** Скрыть элемент
     *
     * @default false */
    hidden?: boolean;
}

export type ChipsProps = ComponentPropsWithHTML<ChipsPropsWithoutHtml, 'button'>;

export * from './styles/types';
export * from './styles/vars';
