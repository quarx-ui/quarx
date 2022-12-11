import { SELECTION_LIST_UPDATES } from '../utils/updates';

const initialList = [
    { value: 1, checked: false, disabled: false },
    { value: 2, checked: true, disabled: false },
    { value: 3, checked: false, disabled: true },
];

it('update !checked & !disabled', () => {
    const expected = [
        { value: 1, checked: true, disabled: false },
        { value: 2, checked: false, disabled: false },
        { value: 3, checked: false, disabled: true },
    ];
    const received = SELECTION_LIST_UPDATES.updateState(initialList[0], initialList);
    expect(received).toEqual(expected);
});

it('update checked', () => {
    const received = SELECTION_LIST_UPDATES.updateState(initialList[1], initialList);
    expect(received).toEqual(initialList);
});

it('update disabled', () => {
    const received = SELECTION_LIST_UPDATES.updateState(initialList[2], initialList);
    expect(received).toEqual(initialList);
});
