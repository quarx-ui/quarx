import { initTest } from '@e2e/test-utils/initTest';
import { CheckboxProps } from '@kit';

const { test } = initTest<CheckboxProps>('Checkbox');

test('Checkbox', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'warning', 'danger'],
            checked: [false],
            size: ['small', 'large'],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
        timeout: 300,
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'warning', 'danger'],
            checked: [false],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
        timeout: 100,
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'success', 'warning', 'danger'],
            checked: [false],
        },
        commonProps: {
            children: 'Checkbox',
            checked: true,
        },
        timeout: 100,
        state: 'focus',
        postfix: 'focus',
    });

    await compareSnapshots({
        props: {
            children: 'Checkbox',
            checked: true,
            disabled: true,
        },
        timeout: 100,
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
        timeout: 100,
        state: 'hover',
        postfix: 'disabled-hover',
        groupBy: ['postfix'],
    });
});
