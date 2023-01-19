import { FC } from 'react';
import {
    BaseProps,
    ComponentPropsWithHTML,
    SelectionControllerProps,
    Values,
    WithClassesAndStyles,
} from '@core';
import { SelectionTreeStyleKeys, SelectionTreeStyleParams } from './styles';
import { DEFAULT_SELECTION_TREE_CONTROLLERS } from './constants';
import { SelectionTreeNodeStruct } from './utils';

export type DefaultSelectionTreeControllers = Values<typeof DEFAULT_SELECTION_TREE_CONTROLLERS>;

export interface SelectionTreePropsWithoutHtml<T extends SelectionControllerProps> extends
    BaseProps<HTMLDivElement>,
    Partial<SelectionTreeStyleParams>,
    WithClassesAndStyles<SelectionTreeStyleKeys, SelectionTreeStyleParams>
{
    /** Контроллер, ответственный за переключение состояния каждого узла
     *
     * @default checkbox */
    controller?: DefaultSelectionTreeControllers | FC<SelectionControllerProps & SelectionTreeNodeStruct<T>>;

    /** Список узлов */
    nodes: SelectionTreeNodeStruct<T>[];

    /** Функция, вызываемая при изменении состояния узлов */
    onUpdate(update: SelectionTreeNodeStruct<T>[]): void;

    /** При свертывании узла дочерние элементы будут свертаны
     *
     * @default true */
    synchronizeChildrenVisibility?: boolean;
}

export const isDefaultSelectionTreeController = (
    value: unknown,
): value is DefaultSelectionTreeControllers => {
    const defaultControllers = <unknown[]>Object.values(DEFAULT_SELECTION_TREE_CONTROLLERS);
    return defaultControllers.includes(value);
};

export type SelectionTreeProps<T extends SelectionControllerProps = SelectionControllerProps> =
    ComponentPropsWithHTML<SelectionTreePropsWithoutHtml<T>>;
