import { expandShortHex } from './index';

describe(expandShortHex.name, () => {
    it.each`
        value           | expected
        ${'#fff'}       | ${'#ffffff'}
        ${'#faf'}       | ${'#ffaaff'}
        ${'#101'}       | ${'#110011'}
        ${'#00f'}       | ${'#0000ff'}
        ${'#fa0'}       | ${'#ffaa00'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(expandShortHex(value)).toBe(expected);
    });
});
