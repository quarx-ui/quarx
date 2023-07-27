import { initTest } from '@e2e/test-utils';
import { TestAccordionProps } from '../types';

const { test } = initTest<TestAccordionProps>('Accordion');

test('Accordion', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            open: [true, false],
            initialOpen: [true, false],
            showDivider: [true, false],
            size: ['xSmall', 'small', 'medium', 'large'],
        },
        commonProps: {
            title: 'Название',
            description: 'Описание',
        },
    });

    await compareSnapshots({
        props: {
            collapseIcon: true,
            statusIcon: true,
            leftIcon: true,
            title: 'Название',
            description: 'Описание',
        },
        postfix: 'custom-icons',
        groupBy: ['postfix'],
    });
});
