import { changeOpacity, incOpacity } from '.';

describe(changeOpacity.name, () => {
    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'rgba(53, 2, 204, 0.7)'}
        ${'hsb(35,1, 0, 0.1)'}         | ${'rgba(0, 0, 0, 0.7)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'rgba(33, 160, 56, 0.7)'}
        ${'#21a038'}                   | ${'rgba(33, 160, 56, 0.7)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeOpacity(value, 0.7)).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80, 0.1)'}     | ${'rgba(53, 2, 204, 0.4)'}
        ${'hsb(35,1, 0, 0.9)'}         | ${'rgb(0, 0, 0)'}
        ${'rgba(33, 160, 56, 0.5)'}    | ${'rgba(33, 160, 56, 0.8)'}
        ${'#21a038'}                   | ${'rgb(33, 160, 56)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incOpacity(value, 0.3)).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80, 0.1)'}     | ${'rgba(53, 2, 204, 0)'}
        ${'hsb(35,1, 0, 0.9)'}         | ${'rgba(0, 0, 0, 0.6)'}
        ${'rgba(33, 160, 56, 0.5)'}    | ${'rgba(33, 160, 56, 0.2)'}
        ${'#21a038'}                   | ${'rgba(33, 160, 56, 0.7)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incOpacity(value, -0.3)).toStrictEqual(expected);
    });
});
