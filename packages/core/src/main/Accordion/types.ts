import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles, CollapseProps } from '@core';
import { ReactChild, ReactElement, ReactNode } from 'react';
import { AccordionStyleParams } from './styles/types';
import { AccordionStyleKeys } from './styles';

export interface AccordionPropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<AccordionStyleParams>,
    WithClassesAndStyles<AccordionStyleKeys, AccordionStyleParams>
{
    /** Управление отображением внутреннего контента */
    open?: boolean;

    /** Изначальное отображение внутреннего контента
     * @default false */
    initialOpen?: boolean;

    /** Заголовок компонента, отображаемый в summary */
    title?: ReactChild;

    /** Дополнительное описание в summary */
    description?: ReactChild;

    /** Внутренний контент, отображаемый в details */
    children?: ReactNode;

    /** Иконка, отображающая открытое и закрытое состояние */
    collapseIcon?: ReactElement;

    /** Иконка, отображающая дополнительный статус */
    statusIcon?: ReactElement;

    /** Обработчик открытия и закрытия аккордеона */
    onChange?: (open: boolean) => void;

    /** Тумблер анимации разворачивания аккордеона
     * @default false */
    disableTransition?: boolean;

    /** Свойства используемого компонента Collapse */
    CollapseProps?: Omit<CollapseProps, 'open'>;
}

export type AccordionProps = ComponentPropsWithHTML<AccordionPropsWithoutHtml>;
