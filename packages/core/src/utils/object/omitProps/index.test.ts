import { omitProps } from '@core';

it('omitProps', () => {
    const targetObject = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
    };

    const expectedObject = {
        one: 1,
        two: 2,
        three: 3,
    };

    expect(omitProps(targetObject, ['four'])).toStrictEqual(expectedObject);
    expect(omitProps(targetObject, ['one', 'two', 'three', 'four'])).toStrictEqual({});
    expect(omitProps(targetObject, [])).toStrictEqual(targetObject);
});
