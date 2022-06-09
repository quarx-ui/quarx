import { limitDigitsCount } from './index';

describe('limitDigitsCount', () => {
    it.each`
            value                   | maxDigits                 | expected
            ${5}                    | ${1}                      | ${'5'}
            ${10}                   | ${1}                      | ${'9+'}
            ${99}                   | ${2}                      | ${'99'}
            ${100}                  | ${2}                      | ${'99+'}
            ${100}                  | ${3}                      | ${'100'}
            ${1234}                 | ${3}                      | ${'999+'}
            
            `('limitDigitsCount($value, $maxDigits) -> $expected', ({ value, maxDigits, expected }) => {
        expect(limitDigitsCount(value, maxDigits as never)).toBe(expected);
    });
});
