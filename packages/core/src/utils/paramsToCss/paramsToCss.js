export function paramsToCss(...params) {
    return (cssMap) => params.reduce((acc, param) => acc?.[param] ?? {}, cssMap);
}
