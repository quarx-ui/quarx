/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { PALETTE_COLORS, QX_BORDER_SIZE, QX_SIZE } from '@kit';
import { initTest } from '../../../../test-utils/index';
import { TestTabsProps } from '../types';

const { test } = initTest<TestTabsProps>('Tabs', {
    groupBy: ['postfix', 'props', 'value'],
});

test('Tabs', async ({ compareSnapshotsMap }) => {
    const tabsTestColors = Object.values(PALETTE_COLORS);
    const tabsTestSizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];
    const tabsTestRadii = Object.values(QX_BORDER_SIZE);

    await compareSnapshotsMap({
        targetProps: {
            line: ['up', 'down'],
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        postfix: 'default',
        commonProps: {
            type: 'default',
        },
        timeout: 300,
    });

    await compareSnapshotsMap({
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        postfix: 'contained',
        commonProps: {
            type: 'contained',
        },
        timeout: 300,
    });

    await compareSnapshotsMap({
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        postfix: 'segmented',
        commonProps: {
            type: 'segmented',
        },
        timeout: 300,
    });

    await compareSnapshotsMap({
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        postfix: 'icons',
        commonProps: {
            withIcons: true,
        },
        timeout: 300,
    });
});
