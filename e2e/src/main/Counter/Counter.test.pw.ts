import { initTest } from '@e2e/test-utils/initTest';
import { CounterProps } from '@kit';

const { test } = initTest<CounterProps>('Counter');

test('Counter', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger', 'text'],
            type: ['white', 'ghosted'],
            children: [9, 999, 9999],
            size: ['small', 'large'],
        },
        commonProps: {
            children: 99,
            maxDigits: 3,
            type: 'filled',
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['secondary', 'success', 'info', 'warning', 'danger', 'text'],
        },
        commonProps: {
            children: 99,
            type: 'white',
        },
        postfix: 'white',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['secondary', 'success', 'info', 'warning', 'danger', 'text'],
        },
        commonProps: {
            children: 99,
            type: 'ghosted',
        },
        postfix: 'ghosted',
    });
});
