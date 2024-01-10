import { invertColor } from './index';

describe(invertColor.name, () => {
    it.each`
        value                           | expected
        ${'rgb(255, 255, 255)'}         | ${'rgb(0, 0, 0)'}
        ${'rgb(255, 171, 255)'}         | ${'rgb(0, 84, 0)'}
        ${'rgb(255, 170, 0)'}           | ${'rgb(0, 85, 255)'}
        ${'rgb(31, 4, 26)'}             | ${'rgb(224, 251, 229)'}
        ${'rgba(42, 15, 94, 0.5)'}      | ${'rgba(213, 240, 161, 0.5)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(invertColor(value)).toBe(expected);
    });
});
