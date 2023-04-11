interface ValuesToRgbArg {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export function valuesToRgb({ r, g, b, a }: ValuesToRgbArg): string {
    if (a === undefined || a === 1) {
        return `rgb(${r}, ${g}, ${b})`;
    }
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
