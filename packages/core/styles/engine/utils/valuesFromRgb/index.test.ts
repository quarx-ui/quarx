import { valuesFromRgb } from '.';

describe(valuesFromRgb.name, () => {
    it.each`
        value                       | expected
        ${'rgb(255, 170, 255)'}     | ${{ r: 255, g: 170, b: 255, a: 1 }}
        ${'rgb(255,170, 0)'}        | ${{ r: 255, g: 170, b: 0, a: 1 }}
        ${'rgb(31, 4,26)'}          | ${{ r: 31, g: 4, b: 26, a: 1 }}
        ${'rgb(41,15,94)'}          | ${{ r: 41, g: 15, b: 94, a: 1 }}
        ${'rgb(41,15,94,0.2)'}          | ${{ r: 41, g: 15, b: 94, a: 0.2 }}
    `('$value -> $expected', ({ value, expected }) => {
        expect(valuesFromRgb(value)).toStrictEqual(expected);
    });
});
