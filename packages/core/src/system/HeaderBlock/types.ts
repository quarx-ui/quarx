import { ComponentPropsWithHTML, IconButtonProps, WithClassesAndStyles } from '@core';
import { MouseEventHandler, ReactNode } from 'react';
import { HeaderBlockStyleParams, HeaderBlockStyleKeys } from './styles';

export interface HeaderBlockPropsWithoutHtml extends
    Partial<HeaderBlockStyleParams>,
    WithClassesAndStyles<HeaderBlockStyleKeys, HeaderBlockStyleParams>
{
    /** Дочерний элемент, при передаче которого будут заменены все остальные элементы */
    children?: ReactNode;

    /** Заголовок */
    title?: ReactNode;

    /** Подзаголовок */
    subTitle?: ReactNode;

    /** Отключить кнопку закрытия */
    disableCloseButton?: boolean;

    /** Пропсы передаваемые напрямую кнопке закрытия */
    CloseButtonProps?: Partial<IconButtonProps>;

    /** Обработчик события клика по кнопке закрытия */
    onClose?: MouseEventHandler<HTMLButtonElement>;

    /** Пользовательская кнопка закрытия */
    CloseButton?: ReactNode;
}

export type HeaderBlockProps = ComponentPropsWithHTML<HeaderBlockPropsWithoutHtml>;
export * from './styles/types';
