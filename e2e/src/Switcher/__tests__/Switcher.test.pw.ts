import { SwitcherProps } from '@kit';
import { initTest } from '@e2e/test-utils/initTest';

const { test } = initTest<SwitcherProps>('Switcher');

test('Switcher', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small', 'medium', 'large'],
            hasError: [true],
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
            hasError: [true],
            checked: [false],
        },
        commonProps: {
            checked: true,
            disabled: true,
            children: 'Switcher',
        },
        postfix: 'disabled',
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'hover',
        postfix: 'disabled-hover',
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'focus',
        postfix: 'disabled-focus',
    });

    await compareSnapshots({
        props: {
            disabled: true,
            checked: true,
            children: 'Switcher',
        },
        state: 'press',
        postfix: 'disabled-press',
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'press',
        postfix: 'press',
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshots({
        props: {
            checked: true,
            children: 'Switcher',
        },
        state: 'focus',
        postfix: 'focus',
    });
});
