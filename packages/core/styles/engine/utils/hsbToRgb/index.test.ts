import { hsbToRgb } from './index';

describe(hsbToRgb.name, () => {
    it.each`
        value                       | expected
        ${'hsb(0, 0, 100)'}         | ${'rgb(255, 255, 255)'}
        ${'hsb(300, 33, 100)'}      | ${'rgb(255, 171, 255)'}
        ${'hsb(40, 100, 100)'}      | ${'rgb(255, 170, 0)'}
        ${'hsb(311, 87, 12)'}       | ${'rgb(31, 4, 26)'}
        ${'hsb(260, 84, 37, 0.5)'}  | ${'rgba(42, 15, 94, 0.5)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(hsbToRgb(value)).toBe(expected);
    });
});
