import { getKeys } from '.';

it('getKeys', () => {
    expect(getKeys({ foo: '', bar: '' }))
        .toStrictEqual(['foo', 'bar']);
});
