export function limitDigitsCount(value: number, digits: number): string {
    if (digits < 1) {
        return '';
    }
    const maxValue = 10 ** digits - 1;

    return value > maxValue
        ? `${maxValue}+`
        : `${value}`;
}
