import { shade, darken, attenuateColor } from './index';

describe(shade.name, () => {
    it.each`
        value                       | expected
        ${'rgb(255, 255, 255)'}     | ${'rgb(255, 255, 255)'}
        ${'rgb(255, 170, 255)'}     | ${'rgb(255, 194, 255)'}
        ${'rgb(255,170, 0)'}        | ${'rgb(255, 194, 125)'}
        ${'rgb(31, 4,26)'}          | ${'rgb(128, 125, 127)'}
        ${'rgb(41,15,94)'}          | ${'rgb(130, 126, 149)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(shade(value, 24)).toBe(expected);
    });

    it.each`
        value                       | expected
        ${'rgb(255, 255, 255)'}     | ${'rgb(222, 222, 222)'}
        ${'rgb(255, 170, 255)'}     | ${'rgb(222, 148, 222)'}
        ${'rgb(255,170, 0)'}        | ${'rgb(222, 148, 0)'}
        ${'rgb(31, 4,26)'}          | ${'rgb(27, 3, 23)'}
        ${'rgb(41,15,94)'}          | ${'rgb(36, 13, 82)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(darken(value, 24)).toBe(expected);
    });

    it.each`
        value                       | expected
        ${'rgb(255, 0, 255)'}     | ${'rgb(255, 125, 255)'}
        ${'rgb(255, 170, 0)'}     | ${'rgb(255, 194, 125)'}
        ${'rgb(255,170, 0)'}        | ${'rgb(255, 194, 125)'}
        ${'rgb(31, 4,26)'}          | ${'rgb(128, 125, 127)'}
        ${'rgb(41,15,94)'}          | ${'rgb(130, 126, 149)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(attenuateColor(value, 24)).toBe(expected);
    });
});
