const addQuotes = (item: string) => `'${item}'`;

export function serifFF(...fonts: string[]): string {
    return `${fonts.map(addQuotes).join(', ')}, serif`;
}

export function sansSerifFF(...fonts: string[]): string {
    return `${fonts.map(addQuotes).join(', ')}, sans-serif`;
}
