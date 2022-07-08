import { initTest } from '@e2e/test-utils/initTest';
import { RadioButtonProps } from '@kit';

const { test } = initTest<RadioButtonProps>('RadioButton');

test('RadioButton', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        targetProps: {
            checked: [false],
            size: ['small', 'medium', 'large'],
            hasError: [true],
        },
        commonProps: {
            checked: true,
            children: 'RadioButton',
        },
    });

    await compareSnapshotsMap({
        targetProps: {
            disabled: [false],
            hasError: [true],
            hover: [true],
            checked: [false],
        },
        commonProps: {
            disabled: true,
            checked: true,
            children: 'RadioButton',
        },
        timeout: 200,
        postfix: 'disabled',
    });

    await compareSnapshotsMap({
        targetProps: {
            checked: [false],
            hasError: [true],
        },
        commonProps: {
            checked: true,
            children: 'RadioButton',
        },
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshotsMap({
        targetProps: {
            checked: [false],
            hasError: [true],
        },
        commonProps: {
            checked: true,
            children: 'RadioButton',
        },
        state: 'focus',
        postfix: 'focus',
    });
});
