import { createBreakpoints } from '../createBreakpoints';
import { BREAKPOINT_KEYS_ARR } from '../constants';

it('BREAKPOINT_KEYS_ARR should be sorted asc by values', () => {
    const { values } = createBreakpoints();

    const sortedKeys = [...BREAKPOINT_KEYS_ARR].sort((a, b) => (
        values[a] - values[b]
    ));

    expect(BREAKPOINT_KEYS_ARR).toStrictEqual(sortedKeys);
});
