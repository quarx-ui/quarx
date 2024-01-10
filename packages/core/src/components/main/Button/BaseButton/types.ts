import { ReactElement, ReactNode } from 'react';
import { BaseProps, ComponentPropsWithHTML } from '@core/types';
import { WithClassesAndStyles } from '@core/styles';
import { BaseButtonStyleParams, LoaderProps } from '@core/components';
import { BaseButtonStyleKeys, BaseButtonCSSVarKeys } from './styles';

export interface BaseButtonPropsWithoutHtml extends
    Partial<BaseButtonStyleParams>,
    WithClassesAndStyles<BaseButtonStyleKeys, BaseButtonStyleParams, BaseButtonCSSVarKeys>,
    BaseProps<HTMLButtonElement>
{
    /** HTML-тип элемента button
     *
     * @default button */
    buttonType?: 'submit' | 'reset' | 'button';

    /** Текст расположенный в компоненте */
    children?: ReactNode;

    /** Пропсы передаваемые компоненту `Loader` */
    LoaderProps?: LoaderProps;

    /** Пользовательский компонент `Loader` */
    Loader?: ReactElement;
}

export type BaseButtonProps = ComponentPropsWithHTML<BaseButtonPropsWithoutHtml, 'button'>;
