import { initTest } from '@e2e/test-utils/initTest';
import { TestLinkProps } from '../types';

const { test } = initTest<TestLinkProps>('Link');

test('Link', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            underline: ['always', 'hover', 'none'],
            size: ['S', 'M', 'L', 'XL'],
            color: ['brand', 'secondary', 'info', 'warning', 'danger'],
        },
    });

    await compareSnapshots({
        props: {
            leftItem: true,
            rightItem: true,
            children: 'Настройки',
        },
        postfix: 'icon',
        groupBy: ['postfix'],
    });
});
