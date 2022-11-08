import { mapObjectKeys } from '@core';

describe('mapObjectKeys', () => {
    it('correct object', () => {
        const targetObject = {
            one: 1,
            two: 2,
            three: 3,
        };

        const mapKeysToValues = {
            one: 'it',
            two: 'is',
            three: 'correct',
        };

        const expectedObject = {
            it: 1,
            is: 2,
            correct: 3,
        };

        expect(mapObjectKeys(targetObject, mapKeysToValues)).toStrictEqual(expectedObject);
    });

    it('empty object', () => {
        const targetObject = {
            one: '1',
            two: '2',
            three: '3',
        };

        const mapKeysToValues: Record<string, string> = {};

        const expectedObject = {
            one: '1',
            two: '2',
            three: '3',
        };

        expect(mapObjectKeys(targetObject, mapKeysToValues)).toStrictEqual(expectedObject);
        expect(mapObjectKeys(mapKeysToValues, targetObject)).toStrictEqual({});
    });
});
