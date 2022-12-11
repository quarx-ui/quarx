import {
    SelectionRegistryNodeValue,
    SelectionRegistryUpdates,
    SelectionRegistryNode,
    SelectionRegistryUtils,
    SelectionProps,
    SelectionControllerProps,
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

export interface SelectionTreeNodeStruct<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionRegistryNode {
    /** Показать/скрыть узел
     *
     * @default false */
    open?: boolean;

    /** Неопределенное состояние узла
     *
     * @default false */
    indeterminate?: boolean;

    /** Дочерние узлы
     *
     * @default undefined */
    children?: SelectionTreeNodeStruct[];

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

export type SelectionTreeStruct<T extends SelectionControllerProps = SelectionControllerProps> =
    SelectionTreeNodeStruct<T>[];

/** Функция обратного вызова для прохода по массиву
 *
 * @param value - узел дерева
 * @param index - индекс узла относительно уровня вложенности
 * @param array - массив узлов текущегоо уровня вложенности
 *
 * @return void | TreeBaseNode - обновленное значение узла */
type CallbackFn<ReturnedValue = (void | SelectionTreeNodeStruct)> = (
    value: SelectionTreeNodeStruct,
    index: number,
    array: SelectionTreeStruct,
) => ReturnedValue;

export interface SelectionTreeUtils<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionRegistryUtils<SelectionTreeStruct<T>> {
    /** Устанавливает все пропущенные boolean параметры для каждого узла списка,
     * нормализует узлы. Если имеется disabled состояние - все дочерние элементы будут приведены к disabled.
     * Если имеется indeterminate функция установит состояние checked для узла
     *
     * @param normalize - необходимость нормализации узлов в соответствии с описанием */
    setDefaultValues(group: SelectionTreeStruct<T>, normalize?: boolean): SelectionTreeStruct<T>;

    /** Формирует массив SelectionRegistryNode, в который входят только
     * узлы со значением
     * ```
     * checked: true
     * ``` */
    getCheckedNodes(group: SelectionTreeStruct<T>, omitIndeterminate?: boolean): SelectionTreeNodeStruct<T>[];

    /** Формирует массив SelectionRegistryNodeValue, в который входят
     * value узлов со значением
     * ```
     * checked: true
     * ``` */
    getCheckedValues(group: SelectionTreeStruct<T>, omitIndeterminate?: boolean): SelectionRegistryNodeValue[];

    /** Функция определяет является узел checked на основе первого уровня дочерних элементов
     * @ Indeterminate не считается checked узлом
     * @ Для корректной работы функции дерево должно быть нормализованным */
    isCheckedNodeByChildren(nodeChildElements: SelectionTreeNodeStruct['children']): boolean;

    /** Функция возвращает все узлы, которые обозначены как indeterminate.
     * @ узел является indeterminate, когда значения checked и indeterminate равняются true */
    getIndeterminateNodes(tree: SelectionTreeStruct<T>): SelectionTreeNodeStruct<T>[];

    /** Функция возвращает все ключи(value) узлов, которые обозначены как indeterminate.
     * @ узел является indeterminate, когда значения checked и indeterminate равняются true */
    getIndeterminateValues(tree: SelectionTreeStruct<T>): SelectionRegistryNodeValue[];

    /** Функция определяет является узел indeterminate на основе первого уровня дочерних элементов
     * @ Для корректной работы функции дерево должно быть нормализованным */
    isIndeterminateNodeByChildren(nodeChildElements: SelectionTreeNodeStruct['children']): boolean;

    /** Функция применит callback к каждому узлу дерева и вернет обновленное callback`ом дерево */
    deepMapNodes(
        nodes: SelectionTreeNodeStruct<T>[],
        callback: CallbackFn<SelectionTreeNodeStruct<T>>,
    ): SelectionTreeStruct<T>;

    /** Функция применит callback к каждому узлу дерева */
    deepForEachNodes(nodes: SelectionTreeNodeStruct<T>[], callback: CallbackFn<void>): void;

    /** Функция изменит состояние open каждого узла, имеющего дочерние узлы, на true и вернет обновленноое дерево */
    openAll(tree: SelectionTreeStruct<T>): SelectionTreeStruct<T>;

    /** Функция изменит состояние open каждого узла, имеющего дочерние узлы, на false и вернет обновленноое дерево */
    closeAll(tree: SelectionTreeStruct<T>): SelectionTreeStruct<T>;

    /** Активирует все узлы.
     * Можно исключить disabled значения для обработки и данные узлы будут
     * принужденно активированы. По умолчанию disabled не исключаются из обработки */
    selectAll(tree: SelectionTreeStruct<T>, omitDisabled: boolean): SelectionTreeStruct<T>;
}

export interface SelectionTreeUpdates<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionRegistryUpdates<SelectionTreeStruct<T>> {
    /** Функция установит противоположное состояние open для узла,
     * чье значение совпадает с переданным value и вернет обновленное дерево. При переданном параметре
     * synchronizeChildren все состояния open дочерних элементов будут синхронизированны с текущим узлом
     * (если при обновлении состояние меняется на false)
     *
     * @param updatedNode - обновляемый узел
     * @param tree - дерево узлов
     * @param synchronizeChildren - необходимость синхронизации дочерних элементов. По умолчанию false */
    updateVisibility(
        node: SelectionTreeNodeStruct<T>,
        tree: SelectionTreeStruct<T>,
        synchronizeChildren?: boolean,
    ): SelectionTreeStruct<T>;
}
