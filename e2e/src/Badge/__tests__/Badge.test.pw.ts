import { initTest } from '@e2e/test-utils/initTest';
import { TestBadgeProps } from '@e2e/src/Badge/types';

const { test } = initTest<TestBadgeProps>('Badge');

test('Badge', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            borderRadius: ['square', 'rounded'],
            size: ['small', 'large'],
            color: ['secondary', 'info', 'success', 'warning', 'danger'],
            type: ['outline'],
            counter: [99, 9999],
        },
    });

    await compareSnapshots({
        props: {
            leftItem: true,
            rightItem: true,
        },
        postfix: 'icon',
    });
});
