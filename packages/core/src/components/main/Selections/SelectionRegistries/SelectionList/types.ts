import {
    BaseProps,
    ComponentPropsWithHTML,
    SelectionControllerProps,
    Values,
    WithClassesAndStyles,
} from '@core';
import { FC } from 'react';
import { SelectionListStyleKeys } from './styles';
import { SelectionListStyleParams } from './styles/types';
import { DEFAULT_SELECTION_LIST_CONTROLLERS } from './constants';
import { SelectionListNodeStruct, SelectionListStruct } from './utils';

export type DefaultSelectionListControllers = Values<typeof DEFAULT_SELECTION_LIST_CONTROLLERS>;

export interface SelectionListPropsWithoutHtml<T extends SelectionControllerProps> extends
    BaseProps,
    Partial<SelectionListStyleParams>,
    WithClassesAndStyles<SelectionListStyleKeys, SelectionListStyleParams>
{
    /** Контроллер, ответственный за переключение состояния каждого узла
     *
     * @default radiobutton */
    controller?: DefaultSelectionListControllers | FC<SelectionControllerProps & SelectionListNodeStruct<T>>;

    /** Список узлов */
    nodes: SelectionListStruct<T>;

    /** Функция, вызываемая при изменении состояния узлов */
    onUpdate(update: SelectionListStruct<T>): void;
}

export const isDefaultSelectionListController = <T>(
    value: T | DefaultSelectionListControllers,
): value is DefaultSelectionListControllers => {
    const defaultControllers = <unknown[]>Object.values(DEFAULT_SELECTION_LIST_CONTROLLERS);
    return defaultControllers.includes(value);
};

export type SelectionListProps<T extends SelectionControllerProps = SelectionControllerProps> =
    ComponentPropsWithHTML<SelectionListPropsWithoutHtml<T>>;
