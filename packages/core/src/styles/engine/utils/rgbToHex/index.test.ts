import { rgbToHex } from './index';

describe(rgbToHex.name, () => {
    it.each`
        value                       | expected
        ${'rgb(255, 255, 255)'}     | ${'#ffffff'}
        ${'rgb(255, 170, 255)'}     | ${'#ffaaff'}
        ${'rgb(255,170, 0)'}        | ${'#ffaa00'}
        ${'rgb(31, 4,26)'}          | ${'#1f041a'}
        ${'rgb(41,15,94)'}          | ${'#290f5e'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(rgbToHex(value)).toBe(expected);
    });
});
