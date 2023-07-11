import * as pw from '@playwright/test';
import { PropsType, ToMatchSnapshotOptions } from '@e2e/test-utils';
import { getStringFromProps } from '@e2e/utils';
import { getScreenPath } from '@e2e/test-utils/screenName';
import { ComponentsListTypes, FRAME_ID, INPUT_PROPS_ID } from '@e2e/constants';
import { PaletteType } from '@kit';
import { ToMatchSnapshotCreatorProps } from './types';

export const setComponentCreator = (
    page: pw.Page,
    component: ComponentsListTypes,
    themeType: PaletteType,
) => (
    uComponent: ComponentsListTypes | string = component,
) => page.goto(`/${themeType}/${uComponent}`);

export const getInputCreator = (page: pw.Page) => () => page.locator(`#${INPUT_PROPS_ID}`);

export const getFrameCreator = (page: pw.Page) => () => page.locator(`#${FRAME_ID}`);

export const getComponentCreator = (
    page: pw.Page,
    selector: string,
) => (
    uSelector = selector,
) => page
    .locator(`#${FRAME_ID}`)
    .locator(uSelector);

export const waitTimeoutCreator = (
    page: pw.Page,
    configTimeout: number,
) => (
    timeout = configTimeout,
) => page.waitForTimeout(timeout);

export const setPropsCreator = <Props = PropsType>(
    page: pw.Page,
) => async (
    props?: Props,
) => {
    const input = await page.locator(`#${INPUT_PROPS_ID}`);
    await input.fill(getStringFromProps(props));
    await input.press('Enter');
};

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
        themeType,
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
            themeType,
        }));
};
