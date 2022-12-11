export type SelectionRegistryNodeValue = string | number;

export interface SelectionRegistryNode {
    /** Уникальный ключ узла */
    value: SelectionRegistryNodeValue;

    /** Активация узла
     *
     * @default false */
    checked?: boolean;

    /** Возможность отключения компонента
     *
     * @default false */
    disabled?: boolean;
}

export interface SelectionRegistryUtils<T extends SelectionRegistryNode[]> {
    /** Устанавливает все пропущенные boolean параметры для каждого узла реестра */
    setDefaultValues(group: T): T;

    /** Сбрасывает активированные узлы.
     * Можно исключить disabled значения для обработки и данные узлы будут
     * принужденно сброшены. По умолчанию disabled не исключаются из обработки,
     * так как это является наиболее правильным подходом при демонстрации дерева */
    resetAll(group: T, omitDisabled?: boolean): T;

    /** Проверяет на уникальность value каждого узла */
    checkValuesUniqueness(group: T): boolean;

    /** Получить узел реестра по уникальному значению */
    getNodeByValue(group: T, value: SelectionRegistryNodeValue): T[number] | undefined;
}

export interface SelectionRegistryUpdates<T extends SelectionRegistryNode[]> {
    /** Функция, которая преобразовывает состояние checked
     * противоположному предшествующему значению выбранного узла.
     *
     * @param node - узел, который будет обновлен
     * @param group - узлы реестра */
    updateState(node: T[number], group: T): T;
}
