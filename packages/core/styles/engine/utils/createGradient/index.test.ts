import { createDarkGradient, createLightGradient, createLinearGradient } from '@core';

describe(createLinearGradient.name, () => {
    it('default', () => {
        const gradient = createLinearGradient({
            colors: [
                { color: '#176e27' },
                { color: '#17fff7' },
                { color: '#000000' },
            ],
        });
        const expected = 'linear-gradient(90deg, #176e27, #17fff7, #000000)';
        expect(gradient).toEqual(expected);
    });

    it('with angle', () => {
        const gradient = createLinearGradient({
            angle: 108,
            colors: [
                { color: '#176e27', point: 1 },
                { color: '#17fff7', point: 38 },
                { color: '#000000', point: 88 },
            ],
        });
        const expected = 'linear-gradient(108deg, #176e27 1%, #17fff7 38%, #000000 88%)';
        expect(gradient).toEqual(expected);
    });
});

describe('create special gradients', () => {
    it('dark', () => {
        const gradient = createDarkGradient('#176e27');
        const expected = 'linear-gradient(100.9deg, rgba(23, 110, 39, 0.32) 0.2%, rgba(23, 110, 39, 0) 50%), linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #02050A';
        expect(gradient).toEqual(expected);
    });
    it('light', () => {
        const gradient = createLightGradient('#176e27');
        const expected = 'linear-gradient(100.9deg, rgba(23, 110, 39, 0.08) 0.2%, rgba(23, 110, 39, 0) 50%), #ffffff';
        expect(gradient).toEqual(expected);
    });
});
