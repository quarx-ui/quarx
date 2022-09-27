export const firstLetterToLowerCase = (value: string): string => (
    value.charAt(0).toLowerCase() + value.slice(1)
);

export const capitalize = (value: string): string => {
    const caps = value.split('').reduce<string[]>((acc, char, index) => {
        const isCaps = char.toUpperCase() === char;
        const isFirstSymbol = index === 0;
        if (isCaps) {
            const withSpace = isFirstSymbol ? [char] : ['_', char];
            return [...acc, ...withSpace];
        }
        return [...acc, char.toUpperCase()];
    }, []);
    return caps.join('');
};
