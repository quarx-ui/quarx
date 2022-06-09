import { Ref } from 'react';
import { PickSxSize } from '@core/enums';
import { WithClassesAndStyles } from '@core/emotion-styles/types';
import { LoaderStyleKeys } from './style';

export type LoaderSizes = PickSxSize<'xSmall' | 'small' | 'base' | 'large' | 'xLarge'>

export interface LoaderStyleParams {
    /** Размер точек: xSmall, small, base, large, xLarge */
    size?: LoaderSizes,
}

export interface LoaderPropsWithoutHtml extends LoaderStyleParams, WithClassesAndStyles<LoaderStyleKeys> {
    /** Пользовательский CSS-класс для корневого элемента */
    className?: string,

    /** Отключает одну точку */
    twoDots?: boolean,

    /** Ссылка к корневому элементу */
    ref?: Ref<HTMLDivElement>
}

export type LoaderHtmlAttributes = Omit<JSX.IntrinsicElements['div'], keyof LoaderPropsWithoutHtml>

export type LoaderProps = LoaderPropsWithoutHtml & LoaderHtmlAttributes;
