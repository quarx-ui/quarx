import { Page, expect } from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { CompareSnapshotsMapArg, ExtendedPropsType, PropsType } from '@e2e/test-utils/types';
import { getURLFromProps } from '@e2e/utils';
import { runSeriesComparisons } from '@e2e/test-utils/helpers';
import { getScreenPath } from '@e2e/test-utils/screenName';

export function compareSnapshots<Props = PropsType>(page: Page, component: ComponentsListTypes) {
    return async (options: ExtendedPropsType<Props>) => {
        const {
            postfix,
            screenName: extScreenName,
            uniqSelector = `.Sx${component}`,
            quality,
            state,
            props,
            beforeSnap,
            testName,
            timeout,
            groupBy = {},
        } = options;

        const screenName = typeof extScreenName === 'string'
            ? `${extScreenName}.jpeg`
            : extScreenName ?? getScreenPath({
                component,
                postfix,
                testName,
                groupBy,
            });

        await page.goto(getURLFromProps(component, props));
        const element = await page.locator(uniqSelector);

        if (state === 'hover') {
            await element.hover();
            await page.waitForTimeout(200);
        } else if (state === 'press') {
            const box = await element.boundingBox();
            const x = (box?.x ?? 0) + (box?.width ?? 0) / 2;
            const y = (box?.y ?? 0) + (box?.height ?? 0) / 2;

            await page.mouse.move(x, y);
            await page.mouse.down();
            await page.waitForTimeout(200);
        } else if (state === 'focus') {
            await element.focus();
            await page.waitForTimeout(200);
        }

        if (timeout) {
            await page.waitForTimeout(timeout);
        }

        await beforeSnap?.(page);

        const screenshot = await element.screenshot({
            type: 'jpeg',
            quality,
        });
        await expect(await screenshot).toMatchSnapshot(screenName);
    };
}

export function compareSnapshotsMap<Props = PropsType>(component: ComponentsListTypes) {
    return async (options: CompareSnapshotsMapArg<Props>) => {
        const {
            targetProps,
            quality,
            uniqSelector,
            commonProps: extCommonProps,
            testName = component,
            page,
            state,
            postfix,
            beforeSnap,
            timeout,
            groupBy,
        } = options;

        const commonProps = {
            props: extCommonProps as Props,
            quality,
            uniqSelector,
            beforeSnap,
            state,
            timeout,
        };

        await runSeriesComparisons<Props>(
            page,
            component,
            targetProps,
            commonProps,
            testName,
            postfix,
            groupBy,
        );
    };
}
