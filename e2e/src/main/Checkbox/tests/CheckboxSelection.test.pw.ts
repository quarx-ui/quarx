import { initTest } from '@e2e/test-utils/initTest';
import { CheckboxSelectionProps } from '@kit';

const { test } = initTest<CheckboxSelectionProps>('CheckboxSelection');

test('CheckboxSelection', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small', 'medium', 'large'],
            checked: [false],
            disabled: [true],
        },
        commonProps: {
            title: 'CheckboxSelection',
            subTitle: 'Subtitle',
            checked: true,
        },
    });

    await compareSnapshots({
        props: {
            title: 'CheckboxSelection',
        },
        state: 'hover',
        postfix: 'hover',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            title: 'CheckboxSelection',
        },
        state: 'focus',
        postfix: 'focus',
        groupBy: ['postfix'],
    });
});
