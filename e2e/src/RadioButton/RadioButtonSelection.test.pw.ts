import { initTest } from '@e2e/test-utils/initTest';
import { RadioButtonSelectionProps } from '@kit';

const { test } = initTest<RadioButtonSelectionProps>('RadioButtonSelection');

test('RadioButtonSelection', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small', 'medium', 'large'],
            checked: [false],
            disabled: [true],
        },
        commonProps: {
            title: 'RadioButtonSelection',
            subTitle: 'Subtitle',
            checked: true,
        },
        timeout: 300,
    });

    await compareSnapshots({
        props: {
            title: 'RadioButtonSelection',
        },
        state: 'hover',
        postfix: 'hover',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            title: 'RadioButtonSelection',
        },
        state: 'focus',
        postfix: 'focus',
        groupBy: ['postfix'],
    });
});
