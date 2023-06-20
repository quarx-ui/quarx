const defaultOptions = {
    clone: true,
    skipUndefined: false,
};

function isPlainObject(item) {
    return item && typeof item === 'object' && item.constructor === Object;
}

/** Функция для глубокой перезаписи свойств в объекте
 *
 * @param target
 * целевой объект, в котором необходимо перезаписать свойства
 *
 * @param source
 * объект, содержащий значения, которыми будут перезаписаны свойства в целевом объекте
 *
 * @param options
 * дополнительный опции
 *
 * @param options.clone
 * создать новый объект перед перезаписью свойств. Клонировование не является глубоким,
 * скопированные свойства могут ссылаться на старые вложенные объекты. Но при перезаписи таких свойств происходит
 * рекурсивный вызов функции и для вложенного объекта тоже создается копия. Это дает гарантию, что функция deepmerge
 * не произведет мутацию свойств целевого объекта, однако конечный результат всё ещё не является глубокой копией
 *
 * @param options.skipUndefined
 * не переносить значения свойств из объекта `source`, если они равны `undefined`
 * */
export function deepmerge(
    target,
    source,
    options = {},
) {
    const { clone, skipUndefined } = { ...defaultOptions, ...options };

    const output = clone && isPlainObject(target)
        /* Так как функция вызывается рекурсивно, глубокое копирование на этом шаге не нужно */
        ? { ...target }
        : target;

    if (isPlainObject(output) && isPlainObject(source)) {
        Object.keys(source).forEach((key) => {
            // Avoid prototype pollution
            if (key === '__proto__') {
                return;
            }

            if (isPlainObject(source[key]) && key in output) {
                output[key] = deepmerge(output[key], source[key], options);
            } else if (source[key] !== undefined || !skipUndefined) {
                output[key] = source[key];
            }
        });
    }

    return output;
}
