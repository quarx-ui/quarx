export const UNITS = [
    'px',
    '%',
    'em',
    'rem',
    'cm',
    'mm',
    'in',
    'pt',
    'pc',
    'ex',
    'ch',
    'vw',
    'vh',
    'vmin',
    'vmax',
] as const;

export const reducedUnits = UNITS.reduce((acc, unit) => {
    const prev = acc
        ? `${acc}|`
        : '';

    return `${prev}\\d+${unit}`;
}, '');

export const unitRegex = new RegExp(reducedUnits, 'gi');

export const withUnit = (value?: number | string) =>
    typeof value === 'string'
        ? value
        : `${value ?? 0}px`;

export const getSizeWithUnits = (value: string | number, only = false): string => {
    if (typeof value === 'number') {
        return withUnit(value);
    }

    const psxMatches: string[] = value.match(unitRegex) ?? [];

    if (only) {
        const max = Math.max(...psxMatches.map((el) => parseInt(el, 10)))

        if (max) {
            return psxMatches.find(
                (el) => el.includes(String(max))
            ) ?? withUnit(max);
        }

        return '0px';
    }

    return psxMatches.join(' ');
}
