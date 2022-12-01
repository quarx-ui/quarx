import * as pw from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { PropsType, ToMatchSnapshotOptions } from '@e2e/test-utils';
import { getURLFromProps } from '@e2e/utils';
import { getScreenPath } from '@e2e/test-utils/screenName';
import { ToMatchSnapshotCreatorProps } from './types';

export const getComponentCreator = (
    page: pw.Page,
    selector: string,
) => (
    uSelector = selector,
) => page.locator(uSelector);

export const waitTimeoutCreator = (
    page: pw.Page,
    configTimeout: number,
) => (
    timeout = configTimeout,
) => page.waitForTimeout(timeout);

export const setPropsCreator = <Props = PropsType>(
    page: pw.Page,
    component: ComponentsListTypes,
) => (
    props?: Props,
) => page.goto(getURLFromProps(component, props));

export const toMatchSnapshotCreator = (
    props: ToMatchSnapshotCreatorProps,
) => async (
    postfix: string,
    options: ToMatchSnapshotOptions = {},
) => {
    const {
        selector,
        disableSnapIfHeaded,
        headless,
        quality,
        testName,
        component,
        getComponent,
        waitTimeout,
        groupBy,
    } = props;

    const {
        selector: uSelector = selector,
        disabled,
        timeout,
        path,
    } = options;

    const snapIsDisabled = disabled || (disableSnapIfHeaded && headless === false);

    if (snapIsDisabled) { return; }
    if (timeout) { await waitTimeout(timeout); }

    // Чтобы не создавались папки по названию скриншотов, если включена сортировка 'postfix'
    const groupForMatchSnapshots = groupBy.filter((el) => el !== 'postfix');

    const screenshot = await getComponent(uSelector)
        .screenshot({
            type: 'jpeg',
            quality,
        });
    await pw.expect(screenshot)
        .toMatchSnapshot(getScreenPath({
            groupBy: groupForMatchSnapshots,
            testName,
            component,
            postfix,
            path,
        }));
};
