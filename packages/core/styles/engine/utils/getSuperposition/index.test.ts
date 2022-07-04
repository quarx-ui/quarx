import { mixAlphaColors, mixColors, getLightSuperposition, getDarkSuperposition } from './index';

describe('mix colors', () => {
    it.each`
        back                        | fore                     | expected
        ${'#1a802d'}                | ${'#b9dbf7'}             | ${'rgb(106, 174, 146)'}
        ${'#18c5ce'}                | ${'#1e1e20'}             | ${'rgb(27, 114, 119)'}
        ${'#2FDE4F'}                | ${'#FF0000'}             | ${'rgb(151, 111, 40)'}
        ${'#2b299e'}                | ${'#ff5c5c'}             | ${'rgb(149, 67, 125)'} 
    `('$back + $fore -> $expected', ({ back, fore, expected }) => {
        expect(mixColors(back, fore)).toBe(expected);
    });

    it.each`
        back                        | fore                     | expected
        ${'#1368F6'}                | ${'#FF0000'}             | ${'rgb(113, 62, 148)'}
        ${'rgb(196,196,196)'}       | ${'rgb(255,0,0)'}        | ${'rgb(220, 118, 118)'}
    `('$back + $fore -> $expected', ({ back, fore, expected }) => {
        expect(mixAlphaColors(back, fore, 0.4)).toBe(expected);
    });

    it.each`
        value                     | expected
        ${'#FFA3A3'}              | ${'rgb(255, 200, 200)'}
        ${'rgb(255,0,0)'}         | ${'rgb(255, 102, 102)'}
    `('$value -> $expected', ({ value, expected }) => {
    expect(getLightSuperposition(value, 0.4)).toBe(expected);
    });

    it.each`
        value                     | expected
        ${'#FFA3A5'}              | ${'rgb(153, 98, 99)'}
        ${'rgb(255,10,0)'}        | ${'rgb(153, 6, 0)'}
    `('$value -> $expected', ({ value, expected }) => {
    expect(getDarkSuperposition(value, 0.4)).toBe(expected);
    });
});
