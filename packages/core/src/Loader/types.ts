import { Ref } from 'react';
import { WithClassesAndStyles } from '@core/styles';
import { ComponentPropsWithHTML } from '@core/types';
import { LoaderStyleKeys, LoaderStyleParams } from './styles';

export interface LoaderPropsWithoutHtml extends
    LoaderStyleParams,
    WithClassesAndStyles<LoaderStyleKeys, LoaderStyleParams>
{
    /** Пользовательский CSS-класс для корневого элемента */
    className?: string,

    /** Отключает одну точку */
    twoDots?: boolean,

    /** Ссылка к корневому элементу */
    ref?: Ref<HTMLDivElement>
}

export type LoaderProps = ComponentPropsWithHTML<LoaderPropsWithoutHtml>;

export * from './styles/types';
