import { ComponentPropsWithHTML, IconButtonProps, WithClassesAndStyles } from '@core';
import { MouseEventHandler, ReactNode } from 'react';
import { HeaderBlockStyleParams, HeaderBlockStyleKeys } from './styles';

export interface HeaderBlockPropsWithoutHtml extends
    Partial<HeaderBlockStyleParams>,
    WithClassesAndStyles<HeaderBlockStyleKeys, HeaderBlockStyleParams>
{
    /** @description Дочерний элемент, при передаче которого будут заменены все остальные элементы */
    children?: ReactNode;

    /** @description Заголовок */
    title?: ReactNode;

    /** @description Подзаголовок */
    subTitle?: ReactNode;

    /** @description Отключить кнопку закрытия */
    disableCloseButton?: boolean;

    /** @description Пропсы передаваемые напрямую кнопке закрытия */
    CloseButtonProps?: Partial<IconButtonProps>;

    /** @description Обработчик события клика по кнопке закрытия */
    onClose?: MouseEventHandler<HTMLButtonElement>;

    /** @description Пользовательская кнопка закрытия */
    CloseButton?: ReactNode;
}

export type HeaderBlockProps = ComponentPropsWithHTML<HeaderBlockPropsWithoutHtml>;
export * from './styles/types';
