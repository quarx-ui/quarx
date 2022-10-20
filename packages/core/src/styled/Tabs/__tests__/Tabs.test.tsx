import React from 'react';
import { testStyleParams } from '@core/test-utils';
import { BaseProps, PALETTE_COLORS, QX_BORDER_SIZE, QX_SIZE } from '@core';
import { render } from '@testing-library/react';
import { ArrowGraphIcon } from '@quarx-ui/icons/src/arrow-graph/36px/stroke/rounded';
import { BuildingsIcon } from '@quarx-ui/icons/src/buildings/36px/stroke/rounded';
import { CirclesOnCircleIcon } from '@quarx-ui/icons/src/circles-on-circle/36px/stroke/rounded';
import { testRootCn } from '@core/test-utils/expectRootCn';
import { Tabs, TabsContainedStyleParams, TabsDefaultStyleParams, TabsProps, TabsSegmentedStyleParams } from '..';
import { TabsSize, TabsType } from '../common';
import { TABS_LINES } from '../TabsDefault/constants';

const items = [
    { label: 'Главная', value: 'home' },
    { label: 'Новости', value: 'news' },
    { label: 'Контакты', value: 'contacts' },
];

class ResizeObserver {
    /* eslint-disable class-methods-use-this, @typescript-eslint/no-empty-function, lines-between-class-members */
    observe() {}
    unobserve() {}
    disconnect() {}
    /* eslint-enable class-methods-use-this, @typescript-eslint/no-empty-function, lines-between-class-members */
}

describe('Tabs', () => {
    window.ResizeObserver = ResizeObserver;

    const initTabs = (type: TabsType) => ({ className }: BaseProps) => (
        <Tabs className={className} type={type} items={items} />
    );

    testRootCn(initTabs('default'), 'QxTabsDefault');
    testRootCn(initTabs('contained'), 'QxTabsContained');
    testRootCn(initTabs('segmented'), 'QxTabsSegmented');

    const tabsTestColors = Object.values(PALETTE_COLORS);
    const tabsTestSizes: TabsSize[] = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];
    const tabsTestRadii = Object.values(QX_BORDER_SIZE);

    const defaultStyleParams = {
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
    };

    describe('type:default', () => {
        testStyleParams<TabsDefaultStyleParams, TabsProps>(
            Tabs,
            {
                ...defaultStyleParams,
                line: TABS_LINES.down,
            },
            { type: 'default', items },
            {
                qxClassname: 'QxTabsDefault',
            },
        )({
            line: Object.values(TABS_LINES),
            color: tabsTestColors,
            size: tabsTestSizes,
        });

        it('with counter', () => {
            const { asFragment } = render(
                <Tabs
                    type="segmented"
                    items={[
                        { label: 'Главная', value: 'home' },
                        { label: 'Новости', value: 'news', counter: 5 },
                        { label: 'Контакты', value: 'contacts', counter: 1 },
                    ]}
                />,
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('type:contained', () => {
        testStyleParams<TabsContainedStyleParams, TabsProps>(
            Tabs,
            {
                ...defaultStyleParams,
                borderRadius: QX_BORDER_SIZE.medium,
            },
            { type: 'contained', items },
            {
                qxClassname: 'QxTabsContained',
            },
        )({
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        });

        it('with counter', () => {
            const { asFragment } = render(
                <Tabs
                    type="segmented"
                    items={[
                        { label: 'Главная', value: 'home' },
                        { label: 'Новости', value: 'news', counter: 5 },
                        { label: 'Контакты', value: 'contacts', counter: 1 },
                    ]}
                />,
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('type:segmented', () => {
        testStyleParams<TabsSegmentedStyleParams, TabsProps>(
            Tabs,
            {
                ...defaultStyleParams,
                borderRadius: QX_BORDER_SIZE.medium,
            },
            { type: 'segmented', items },
            {
                qxClassname: 'QxTabsSegmented',
            },
        )({
            borderRadius: tabsTestRadii,
            color: tabsTestColors,
            size: tabsTestSizes,
        });

        it('with counter', () => {
            const { asFragment } = render(
                <Tabs
                    type="segmented"
                    items={[
                        { label: 'Главная', value: 'home' },
                        { label: 'Новости', value: 'news', counter: 5 },
                        { label: 'Контакты', value: 'contacts', counter: 1 },
                    ]}
                />,
            );

            expect(asFragment()).toMatchSnapshot();
        });

        it('with icons', () => {
            const { asFragment } = render(
                <Tabs
                    type="segmented"
                    items={[
                        { label: <ArrowGraphIcon />, value: 'graph' },
                        { label: <BuildingsIcon />, value: 'buildings' },
                        { label: <CirclesOnCircleIcon />, value: 'circles' },
                    ]}
                />,
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
