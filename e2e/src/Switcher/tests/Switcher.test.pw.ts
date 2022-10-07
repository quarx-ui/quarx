import { SwitcherProps } from '@kit';
import { initTest } from '@e2e/test-utils/initTest';

const { test } = initTest<SwitcherProps>('Switcher');

test('Switcher', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small', 'medium', 'large'],
            color: ['secondary', 'success', 'info', 'warning', 'danger'],
            position: ['right'],
            checked: [false],
        },
        commonProps: {
            checked: true,
            children: 'Switcher',
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['secondary', 'success', 'info', 'warning', 'danger'],
            checked: [false],
        },
        commonProps: {
            checked: true,
            disabled: true,
            children: 'Switcher',
        },
        postfix: 'disabled',
        groupBy: ['postfix', 'props'],
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'hover',
        postfix: 'disabled-hover',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'focus',
        postfix: 'disabled-focus',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'press',
        postfix: 'disabled-press',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'press',
        postfix: 'press',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'hover',
        postfix: 'hover',
        groupBy: ['postfix'],
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'focus',
        postfix: 'focus',
        groupBy: ['postfix'],
    });
});
