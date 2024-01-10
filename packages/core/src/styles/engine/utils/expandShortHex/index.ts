export function expandShortHex(shortHex: string): string {
    if (shortHex.length !== 4 || !shortHex.startsWith('#')) {
        throw new Error('value doesn\'t match short-hex format, example of correct value: #faa');
    }
    const [hash, r, g, b] = shortHex;

    return [hash, r, r, g, g, b, b].join('');
}
