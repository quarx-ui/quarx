import { AlertOmittedStyleParams, BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { LeftItemProps, BodyProps, ActionButtonsProps, CloseButtonProps } from './elements';
import { AlertStyleParams } from './styles/types';
import { AlertStyleKeys } from './styles';

type StyleParams = Partial<Omit<AlertStyleParams, keyof AlertOmittedStyleParams>>;

export interface AlertPropsWithoutHtml extends
    BaseProps,
    StyleParams,
    WithClassesAndStyles<AlertStyleKeys, AlertStyleParams>,
    Pick<BodyProps, 'title' | 'description'>,
    Pick<ActionButtonsProps, 'PrimaryButtonProps' | 'SecondaryButtonProps'>,
    Pick<CloseButtonProps, 'onClose'>
{
    /** Элемент расположенный слева.
     * Может быть пользовательским или одним из дефолтных элементов.
     *
     * - **default** - Дефолтная иконка соответствующая заданному свойству `color`
     * - **false** - Элемент отсутствует
     *
     * @default default */
    leftItem?: LeftItemProps['children'];

    /** Пропсы передаваемые напрямую компоненту `LeftItem` */
    LeftItemProps?: Partial<LeftItemProps>;

    /** Пропсы передаваемые напрямую компоненту `Body` */
    BodyProps?: Partial<BodyProps>;

    /** Пропсы передаваемые напрямую компоненту `ActionButtons` */
    ActionButtonsProps?: Partial<ActionButtonsProps>;

    /** Пропсы передаваемые напрямую компоненту `CloseButton` */
    CloseButtonProps?: Partial<CloseButtonProps>;
}

export type AlertProps = ComponentPropsWithHTML<AlertPropsWithoutHtml>;
