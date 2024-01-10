import { changeHsb, incHsb } from '.';

describe(changeHsb.name, () => {
    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(20, 99, 80)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(20, 1, 0)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(20, 79, 63)'}
        ${'#21a038'}                   | ${'hsb(20, 79, 63)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeHsb(value, { h: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(255, 20, 80)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(35, 20, 0)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(131, 20, 63)'}
        ${'#21a038'}                   | ${'hsb(131, 20, 63)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeHsb(value, { s: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(255, 99, 20)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(35, 1, 20)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(131, 79, 20)'}
        ${'#21a038'}                   | ${'hsb(131, 79, 20)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeHsb(value, { b: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'#0d0133'}
        ${'hsb(35,1, 0)'}              | ${'#333332'}
        ${'rgba(33, 160, 56, 1)'}      | ${'#0b3312'}
        ${'#21a038'}                   | ${'#0b3312'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeHsb(value, { b: 20, output: 'hex' })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'rgb(13, 1, 51)'}
        ${'hsb(35,1, 0)'}              | ${'rgb(51, 51, 50)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'rgb(11, 51, 18)'}
        ${'#21a038'}                   | ${'rgb(11, 51, 18)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(changeHsb(value, { b: 20, output: 'rgb' })).toStrictEqual(expected);
    });
});

describe(incHsb.name, () => {
    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(275, 99, 80)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(55, 1, 0)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(151, 79, 63)'}
        ${'#21a038'}                   | ${'hsb(151, 79, 63)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { h: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(255, 100, 80)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(35, 21, 0)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(131, 99, 63)'}
        ${'#21a038'}                   | ${'hsb(131, 99, 63)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { s: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'hsb(255, 99, 100)'}
        ${'hsb(35,1, 0)'}              | ${'hsb(35, 1, 20)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'hsb(131, 79, 83)'}
        ${'#21a038'}                   | ${'hsb(131, 79, 83)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { b: 20 })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'#4203ff'}
        ${'hsb(35,1, 0)'}              | ${'#333332'}
        ${'rgba(33, 160, 56, 1)'}      | ${'#2cd44b'}
        ${'#21a038'}                   | ${'#2cd44b'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { b: 20, output: 'hex' })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'rgb(66, 3, 255)'}
        ${'hsb(35,1, 0)'}              | ${'rgb(51, 51, 50)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'rgb(44, 212, 75)'}
        ${'#21a038'}                   | ${'rgb(44, 212, 75)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { b: 20, output: 'rgb' })).toStrictEqual(expected);
    });

    it.each`
        value                          | expected
        ${'hsb(255, 99, 80)'}          | ${'rgb(39, 2, 153)'}
        ${'hsb(35,1, 0)'}              | ${'rgb(0, 0, 0)'}
        ${'rgba(33, 160, 56, 1)'}      | ${'rgb(23, 110, 39)'}
        ${'#21a038'}                   | ${'rgb(23, 110, 39)'}
    `('$value -> $expected', ({ value, expected }) => {
        expect(incHsb(value, { b: -20, output: 'rgb' })).toStrictEqual(expected);
    });
});
