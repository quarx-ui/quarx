import { Ref } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { ComponentPropsWithHTML } from '@core/types';
import { LoaderStyleKeys, LoaderStyleParams } from './styles';

export interface LoaderPropsWithoutHtml extends
    Partial<LoaderStyleParams>,
    WithClassesAndStyles<LoaderStyleKeys, LoaderStyleParams>
{
    /** @description Пользовательский CSS-класс для корневого элемента */
    className?: string;

    /** @description Отключает одну точку
     *
     * @default false */
    twoDots?: boolean;

    /** @description Ссылка к корневому элементу */
    ref?: Ref<HTMLDivElement>;
}

export type LoaderProps = ComponentPropsWithHTML<LoaderPropsWithoutHtml>;

export * from './styles/types';
