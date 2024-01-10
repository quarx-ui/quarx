interface ValuesToHsb {
    h: number;
    s: number;
    b: number;
    a?: number;
}

export const valuesToHsb = ({ h, s, b, a = 1 }: ValuesToHsb) => {
    if (a < 1) {
        const hsba = [h, s, b, a].join(', ');
        return `hsba(${hsba})`;
    }

    const hsb = [h, s, b].join(', ');
    return `hsb(${hsb})`;
};
