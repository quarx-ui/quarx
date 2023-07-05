import { initTest } from '@e2e/test-utils';
import { TestAlertProps } from '@e2e/src/main/Alert/types';
import { ALERT_COLORS, ALERT_SIZE, ALERT_TYPE } from '@kit';

const { test } = initTest<TestAlertProps>('Alert');

test('Alert', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: Object.values(ALERT_SIZE),
            color: Object.values(ALERT_COLORS),
            type: Object.values(ALERT_TYPE),
            primaryButton: [true, false],
            secondaryButton: [true, false],
        },
    });

    await compareSnapshots({
        props: {
            leftItem: false,
            closeButton: false,
            primaryButton: false,
            secondaryButton: false,
        },
        groupBy: ['postfix'],
        postfix: 'without elements',
    });

    await compareSnapshotsMap({
        targetProps: {
            type: ['horizontal', 'vertical'],
        },
        commonProps: {
            primaryButton: false,
            secondaryButton: false,
            type: 'horizontal',
            description: '',
        },
        postfix: 'without description',
        groupBy: ['postfix'],
    });
});
