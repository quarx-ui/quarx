import { getContrastColor } from './index';

describe(getContrastColor.name, () => {
    it.each`
        value                               | expected
        ${'rgb(26, 128, 45)'}               | ${'#FFFFFF'}
        ${'rgba(242,164,5)'}                | ${'#FFFFFF'}
        ${'#2FDE4F'}                        | ${'#FFFFFF'}
        ${'rgb(185, 219, 241)'}             | ${'#000000'}
        ${'#19FF19'}                        | ${'#FFFFFF'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(getContrastColor(value)).toBe(expected);
    });
});
