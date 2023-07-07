/**
 * Поверка если `value` это `undefined`.
 *
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает `true` если `value` это `undefined`, иначе `false`.
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
function isUndefined<D>(value: D) {
    return typeof value === 'undefined';
}

export default isUndefined;
