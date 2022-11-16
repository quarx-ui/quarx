export type CssVarType = `css${string}`

/** Функция генерации CSS-переменной по ее названию
 * @param cssVar название переменной в формате cssNameOfVariable
 *
 * @return возвращает строку в формате --qx-name-of-variable */
export const createCssVarName = (cssVar: CssVarType) => {
    const splitVar = cssVar
        .match(/[A-Z][a-z]*/g)
        ?.map((el) => el.toLowerCase());

    return `--qx-${splitVar?.join('-')}`;
};

/** Функция генерации объекта с CSS-переменными по массиву с названиями
 * @param cssVars массив с названиями переменных в формате ['cssNameOfVariable', 'cssSecondNameOfVariable']
 *
 * @return возвращает объект в формате
 * {
 *     cssNameOfVariable: '--qx-name-of-variable',
 *     cssSecondNameOfVariable: '--qx-second-name-of-variable',
 * }
 * */
export const createCssVarNames = <T extends CssVarType>(cssVars: readonly T[]) => cssVars
    .reduce((acc, el) => ({
        ...acc,
        [el]: createCssVarName(el),
    }), {} as Record<T, string>);

export type CssVarKeys<T extends readonly CssVarType[]> = T[number]

export const cssVar = (value: string) => `var(${value})`;
