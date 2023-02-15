/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { PALETTE_COLORS, QX_BORDER_SIZE, QX_SIZE } from '@kit';
import { initTest } from '@e2e/test-utils';
import { TestTabsProps } from '../types';

const { testProps, describe } = initTest<TestTabsProps>('Tabs', {
    groupBy: ['testName', 'props', 'value'],
});

describe('Tabs', () => {
    const tabsTestColors = Object.values(PALETTE_COLORS);
    const tabsTestSizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];
    const tabsTestRadii = Object.values(QX_BORDER_SIZE);

    testProps('default', {
        targetProps: {
            line: ['up', 'down'],
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        commonProps: {
            type: 'default',
        },
    });

    testProps('contained', {
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        commonProps: {
            type: 'contained',
        },
    });

    testProps('segmented', {
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        commonProps: {
            type: 'segmented',
        },
    });

    testProps('icons', {
        targetProps: {
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        },
        commonProps: {
            withIcons: true,
        },
    });
});
