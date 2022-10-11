export type CssVarType = `css${string}`

/** Функция генерации CSS-переменной по ее названию
 * @param cssVar название переменной в формате cssNameOfVariable
 *
 * @return возвращает строку в формате --name-of-variable */
export const getCssVarName = (cssVar: CssVarType) => {
    const splitVar = cssVar
        .match(/[A-Z][a-z]*/g)
        ?.map((el) => el.toLowerCase());

    return `--${splitVar?.join('-')}`;
};

/** Функция генерации объекта с CSS-переменными по массиву с названиями
 * @param cssVars массив с названиями переменных в формате ['cssNameOfVariable', 'cssSecondNameOfVariable']
 *
 * @return возвращает объект в формате
 * {
 *     cssNameOfVariable: '--name-of-variable',
 *     cssSecondNameOfVariable: '--second-name-of-variable',
 * }
 * */
export const getCssVarNames = <T extends CssVarType>(cssVars: readonly T[]) => cssVars
    .reduce((acc, el) => ({
        ...acc,
        [el]: getCssVarName(el),
    }), {} as Record<T, string>);

export type CssVarKeys<T extends readonly CssVarType[]> = T[number]

export const cssVar = (value: string) => `var(${value})`;
