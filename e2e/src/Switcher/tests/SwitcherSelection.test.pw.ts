import { initTest } from '@e2e/test-utils/initTest';
import { TestSelectionProps } from '@e2e/src/Selection/types';

const { test } = initTest<TestSelectionProps>('SwitcherSelection');

test('SwitcherSelection', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small', 'medium', 'large'],
            disabled: [true],
            color: ['secondary', 'success', 'info', 'warning', 'danger'],
        },
        commonProps: {
            title: 'Selection',
            subTitle: 'Subtitle',
            rightAdornment: true,
        },
    });

    await compareSnapshots({
        props: {
            title: 'Selection',
        },
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshots({
        props: {
            title: 'Selection',
        },
        state: 'focus',
        postfix: 'focus',
    });
});
