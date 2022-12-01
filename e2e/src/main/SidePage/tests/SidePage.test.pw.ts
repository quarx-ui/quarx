import { initTest } from '@e2e/test-utils';
import { TestSidePageProps } from '../types';

const { test } = initTest<TestSidePageProps>('SidePage', {
    selector: '.QxSidePage-box',
    groupBy: ['postfix', 'props', 'value'],
});

const longBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
    + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua '
    + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '
    + 'aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit '
    + 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur '
    + 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui '
    + 'officia deserunt mollit anim id est laborum';

test('SidePage', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: ['small'],
            disableCloseButton: [true],
            footerDirection: ['horizontal'],
            footer: ['Footer'],
        },
        groupBy: ['props'],
    });

    await compareSnapshots({
        props: {
            title: undefined,
            subTitle: undefined,
            footerButtons: undefined,
            disableCloseButton: true,
            body: longBody,
        },
        postfix: 'only body',
    });

    await compareSnapshots({
        props: {
            footerButtons: undefined,
            body: undefined,
        },
        postfix: 'only header',
    });

    await compareSnapshots({
        props: {
            body: longBody + longBody,
        },
        postfix: 'scrollBehavior',
    });
});
