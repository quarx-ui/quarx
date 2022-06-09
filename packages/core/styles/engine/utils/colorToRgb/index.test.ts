import { colorToRgb } from './index';

describe(colorToRgb.name, () => {
    it.each`
        value                           | expected
        ${'#fff'}                       | ${'rgb(255, 255, 255)'}
        ${'#faf'}                       | ${'rgb(255, 170, 255)'}
        ${'#fa0'}                       | ${'rgb(255, 170, 0)'}
        ${'#1f041a'}                    | ${'rgb(31, 4, 26)'}
        ${'#290f5e'}                    | ${'rgb(41, 15, 94)'}
        ${'rgb(17, 0, 243)'}            | ${'rgb(17, 0, 243)'}
        ${'rgba(67, 144, 98, 0.5)'}     | ${'rgba(67, 144, 98, 0.5)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(colorToRgb(value)).toBe(expected);
    });
});
