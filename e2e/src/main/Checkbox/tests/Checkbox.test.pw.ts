import { initTest } from '@e2e/test-utils/initTest';
import { CheckboxProps } from '@kit';

const { test } = initTest<CheckboxProps>('Checkbox');

test('Checkbox', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'info', 'warning', 'danger'],
            checked: [false],
            size: ['small', 'large'],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'info', 'warning', 'danger'],
            checked: [false],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'info', 'warning', 'danger'],
            checked: [false],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
        state: 'focus',
        postfix: 'focus',
    });

    await compareSnapshots({
        props: {
            children: 'Checkbox',
            checked: true,
            disabled: true,
        },
        state: 'focus',
        postfix: 'disabled-focus',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            children: 'Checkbox',
            checked: true,
            disabled: true,
        },
        state: 'hover',
        postfix: 'disabled-hover',
        groupBy: ['postfix'],
    });
});
