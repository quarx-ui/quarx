import { SELECTION_LIST_UTILS } from '../utils/utils';

it('setDefaultValues', () => {
    const received = SELECTION_LIST_UTILS.setDefaultValues([
        { value: 1 },
        { value: 2, checked: true },
        { value: 3, disabled: true },
        { value: 4, disabled: true, checked: true },
    ]);
    const expectedList = [
        { value: 1, checked: false, disabled: false },
        { value: 2, checked: true, disabled: false },
        { value: 3, checked: false, disabled: true },
        { value: 4, checked: true, disabled: true },
    ];
    expect(received).toEqual(expectedList);
});

it('getCheckedNode', () => {
    const received = SELECTION_LIST_UTILS.getCheckedNode([
        { value: 1 },
        { value: 2 },
        { value: 3, disabled: true },
        { value: 4, disabled: true, checked: true },
    ]);
    const expected = {
        value: 4,
        checked: true,
        disabled: true,
    };
    expect(received).toEqual(expected);
});

it('getCheckedValue', () => {
    const received = SELECTION_LIST_UTILS.getCheckedValue([
        { value: 1 },
        { value: 2 },
        { value: 3, disabled: true },
        { value: 4, disabled: true, checked: true },
    ]);
    const expected = 4;
    expect(received).toEqual(expected);
});

describe('resetAll', () => {
    it('resetAll. omitDisabled = false', () => {
        const received = SELECTION_LIST_UTILS.resetAll([
            { value: 1, checked: false },
            { value: 2, checked: true },
            { value: 3, disabled: true, checked: false },
            { value: 4, disabled: true, checked: true },
        ], false);
        const expected = [
            { value: 1, checked: false },
            { value: 2, checked: false },
            { value: 3, disabled: true, checked: false },
            { value: 4, disabled: true, checked: true },
        ];
        expect(received).toEqual(expected);
    });

    it('resetAll. omitDisabled = true', () => {
        const received = SELECTION_LIST_UTILS.resetAll([
            { value: 1, checked: false },
            { value: 2, checked: true },
            { value: 3, disabled: true, checked: false },
            { value: 4, disabled: true, checked: true },
        ], true);
        const expected = [
            { value: 1, checked: false },
            { value: 2, checked: false },
            { value: 3, disabled: true, checked: false },
            { value: 4, disabled: true, checked: false },
        ];
        expect(received).toEqual(expected);
    });
});

describe('is unique', () => {
    it('false', () => {
        const received = SELECTION_LIST_UTILS.checkValuesUniqueness([
            { value: 0 },
            { value: 0 },
        ]);
        expect(received).toBe(false);
    });

    it('true', () => {
        const received = SELECTION_LIST_UTILS.checkValuesUniqueness([
            { value: 0 },
            { value: 1 },
        ]);
        expect(received).toBe(true);
    });
});
