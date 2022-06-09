import { colorToHsb } from './index';

describe(colorToHsb.name, () => {
    it.each`
        value                           | expected
        ${'#1717C1'}                    | ${'hsba(240, 88, 76, 1)'}
        ${'#21A038'}                    | ${'hsba(131, 79, 63, 1)'}
        ${'rgba(46, 222, 78, 1)'}       | ${'hsba(131, 79, 87, 1)'}
        ${'rgba(51, 63, 72, 1)'}        | ${'hsba(206, 29, 28, 1)'}
        ${'#5E7485'}                    | ${'hsba(206, 29, 52, 1)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(colorToHsb(value)).toBe(expected);
    });
});
