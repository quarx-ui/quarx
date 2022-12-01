import { initTest } from '@e2e/test-utils';
import { TestButtonProps } from '../types';

const { test } = initTest<TestButtonProps>('Button');

test('Button', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            borderRadius: ['xSmall', 'small', 'large', 'xLarge'],
            size: ['xSmall', 'small', 'medium', 'large'],
            color: ['secondary', 'success', 'info', 'warning', 'danger'],
        },
    });

    await compareSnapshots({
        props: {
            leftIcon: true,
            rightIcon: true,
        },
        postfix: 'icon',
        groupBy: ['postfix'],
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger'],
        },
        commonProps: {
            type: 'outlined',
        },
        postfix: 'outlined',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger'],
        },
        commonProps: {
            type: 'text',
        },
        postfix: 'text',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger'],
            disabled: [true],
        },
        state: 'hover',
        postfix: 'hover',
    });

    await compareSnapshotsMap({
        targetProps: {
            color: ['brand', 'secondary', 'success', 'info', 'warning', 'danger'],
            disabled: [true],
        },
        state: 'press',
        postfix: 'press',
    });

    await compareSnapshotsMap({
        targetProps: {
            type: ['contained', 'outlined', 'text'],
            disabled: [true],
        },
        state: 'focus',
        postfix: 'focus',
    });
});
