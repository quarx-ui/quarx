import { ReactElement } from 'react';
import { BaseProps, ComponentPropsWithHTML, IconButtonProps, WithClassesAndStyles } from '@core';
import { ElementTypes } from '@core/src/main/Alert/elements';
import { CloseButtonStyleKeys } from './styles';
import { CloseButtonStyleParams } from './styles/types';

export interface CloseButtonPropsWithoutHtml extends
    BaseProps,
    Partial<Pick<ElementTypes, 'size'>>,
    Partial<CloseButtonStyleParams>,
    WithClassesAndStyles<CloseButtonStyleKeys, CloseButtonStyleParams>
{
    /** Пропсы передаваемые напрямую компоненту `IconButton` */
    IconButtonProps?: IconButtonProps;

    /** Пользовательский компонент кнопки */
    Button?: ReactElement;

    /** Обработчик закрытия компонента.
        Вызывается при клике по иноке закрытия либо при истечении таймера */
    onClose?: VoidFunction;
}

export type CloseButtonProps = ComponentPropsWithHTML<CloseButtonPropsWithoutHtml>
