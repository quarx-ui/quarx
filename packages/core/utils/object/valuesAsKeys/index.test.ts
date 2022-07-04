import { valuesAsKeys, valuesAsKeysFromArray } from '.';

describe('valuesAsKeys', () => {
    const expected = {
        foo: 'foo',
        bar: 'bar',
    };

    it('from object', () => {
        const result = valuesAsKeys({ foo: '', bar: '' });
        expect(result).toStrictEqual(expected);
    });

    it('from array', () => {
        const result = valuesAsKeysFromArray(['foo', 'bar']);
        expect(result).toStrictEqual(expected);
    });
});
