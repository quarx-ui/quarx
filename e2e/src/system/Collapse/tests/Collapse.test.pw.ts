import { CompareSnapshotsMapArg, initTest } from '@e2e/test-utils';
import { CollapseProps } from '@kit';

const { test } = initTest<CollapseProps>(
    'Collapse',
    { disableAnimations: false },
);

const beforeSnap: CompareSnapshotsMapArg['beforeSnap'] = async (page) => {
    await page.setViewportSize({ width: 250, height: 40 });
};

test('Collapse', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        beforeSnap,
        targetProps: {
            collapsedSize: [5, 15],
        },
        commonProps: {
            open: false,
        },
    });

    await compareSnapshotsMap({
        beforeSnap,
        targetProps: {
            orientation: ['vertical', 'horizontal'],
        },
        commonProps: {
            collapsedSize: 20,
            open: false,
        },
    });

    await compareSnapshotsMap({
        beforeSnap,
        targetProps: {
            open: [true],
        },
        commonProps: {
            orientation: 'horizontal',
        },
    });
});
