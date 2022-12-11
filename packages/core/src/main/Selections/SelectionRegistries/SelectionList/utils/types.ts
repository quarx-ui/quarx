import {
    SelectionProps,
    SelectionControllerProps,
    SelectionRegistryUpdates,
    SelectionRegistryNode,
    SelectionRegistryUtils,
    SelectionRegistryNodeValue,
} from '@core';

type ReservedControllerProps =
    | 'children'
    | 'onChange'
    | 'color'
    | 'size';

type ReservedSelectionProps =
    | 'children'
    | 'onChange'
    | 'title'
    | 'subTitle'
    | 'helperText'
    | 'color'
    | 'size';

export interface SelectionListNodeStruct<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionRegistryNode
{
    /** Заголовок компонента */
    title?: string;

    /** Текст описания */
    description?: string;

    /** Вспомогательный текст */
    helperText?: string;

    /** Параметры, которые будут переданы Selection компоненту данного узла */
    selectionProps?: Omit<SelectionProps, keyof T | ReservedSelectionProps>;

    /** Параметры, которые будут переданы Selection.Children компоненту данного узла */
    controllerProps?: Omit<SelectionControllerProps, ReservedControllerProps>;
}

export type SelectionListStruct<T extends SelectionControllerProps = SelectionControllerProps> =
    SelectionListNodeStruct<T>[];

export interface SelectionListUtils<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionRegistryUtils<SelectionListStruct<T>> {
    /** Возвращает SelectionRegistryNode, который содержит
     * узел со значением
     * ```
     * checked: true
     * ```
     * В SelectionListStruct может существовать только один активированный элемент */
    getCheckedNode(list: SelectionListStruct<T>): SelectionListNodeStruct<T> | undefined;

    /** Возвращает SelectionRegistryNodeValue, который содержит
     * value узла со значением
     * ```
     * checked: true
     * ```
     * В SelectionListStruct может существовать только один активированный элемент */
    getCheckedValue(list: SelectionListStruct<T>): SelectionRegistryNodeValue | undefined;
}

export type SelectionListUpdates = SelectionRegistryUpdates<SelectionListStruct>;
