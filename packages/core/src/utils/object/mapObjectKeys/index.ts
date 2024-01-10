type ValueOf<T> = T[keyof T];

type MapObjectKeysReturnType<
    O extends object = object,
    M extends Record<keyof O, string | number | symbol> = Record<keyof O, string>
> = Record<ValueOf<M>, ValueOf<O>>;

/** Функция подменяет ключи в объекте в соответствии с переданным map-объектом
 *
 * @param targetObject Целевой объект, ключи которого необходимо подменить
 * @param mapObject map-объект, ключи которого совпадают с ключами целевого объекта,
 * и значения которого будут использованы в качестве ключей в целевом объекте
 * */
export const mapObjectKeys = <
    O extends object = object,
    M extends Record<keyof O, string> = Record<keyof O, string>
>(
    targetObject?: O,
    mapObject?: M,
): MapObjectKeysReturnType<O, M> => {
    if (!targetObject && !mapObject) {
        return {} as MapObjectKeysReturnType<O, M>;
    }

    const mappedProps = mapObject
        ? Object.entries(targetObject ?? {})
            .reduce((acc, [key, property]) => {
                const targetProperty = mapObject[key as keyof O];
                const targetPropertyIsCorrect = !!targetProperty && typeof targetProperty === 'string';
                const targetKey = targetPropertyIsCorrect ? targetProperty : key;

                return ({
                    ...acc,
                    [targetKey]: property,
                });
            }, {})
        : {};

    return mappedProps as MapObjectKeysReturnType<O, M>;
};
