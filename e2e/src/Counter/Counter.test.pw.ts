import { initTest } from '@e2e/test-utils/initTest';
import { CounterProps } from '@kit';

const { test } = initTest<CounterProps>('Counter');

test('Counter', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger'],
            type: ['filled'],
            children: [9, 999, 9999],
            size: ['small', 'large'],
        },
        commonProps: {
            children: 99,
            maxDigits: 3,
            type: 'outline',
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['secondary', 'success', 'info', 'warning', 'danger'],
        },
        commonProps: {
            children: 99,
            type: 'filled',
        },
        postfix: 'filled',
    });
});
