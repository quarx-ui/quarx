import { hexToRgb } from './index';

describe(hexToRgb.name, () => {
    it.each`
        value           | expected
        ${'#fff'}       | ${'rgb(255, 255, 255)'}
        ${'#faf'}       | ${'rgb(255, 170, 255)'}
        ${'#fa0'}       | ${'rgb(255, 170, 0)'}
        ${'#1f041a'}    | ${'rgb(31, 4, 26)'}
        ${'#290f5e'}    | ${'rgb(41, 15, 94)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(hexToRgb(value)).toBe(expected);
    });
});
