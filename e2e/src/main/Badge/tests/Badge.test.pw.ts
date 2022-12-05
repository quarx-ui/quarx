import { initTest } from '@e2e/test-utils/initTest';
import { TestBadgeProps } from '@e2e/src/main/Badge/types';

const { test } = initTest<TestBadgeProps>('Badge');

test('Badge', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
            size: ['small', 'large'],
            color: ['secondary', 'info', 'success', 'warning', 'danger', 'text'],
            counter: [0, 9999],
        },
        commonProps: {
            counter: 99,
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'],
        },
        commonProps: {
            type: 'ghosted',
            counter: 999,
        },
        postfix: 'ghosted',
        groupBy: ['postfix', 'value'],
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'],
        },
        commonProps: {
            type: 'outlined',
            counter: 999,
        },
        postfix: 'outlined',
        groupBy: ['postfix', 'value'],
    });

    await compareSnapshots({
        props: {
            leftItem: true,
            rightItem: true,
        },
        postfix: 'icon',
        groupBy: ['postfix'],
    });
});
