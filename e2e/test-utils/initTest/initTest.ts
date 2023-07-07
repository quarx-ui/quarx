import { ComponentsListTypes } from '@e2e/constants';
import { InitTestConfig, PropsType, TestProps } from '@e2e/test-utils/types';
import { compareSnapshots as initCompareSnapshots, compareSnapshotsMap as initCompareSnapshotsMap }
    from '@e2e/test-utils/compareSnapshots';
import * as pw from '@playwright/test';
import { testComponentProps } from '@e2e/test-utils/testComponent';
import { disableAnimations } from '@e2e/test-utils/disableAnimations';
import { DEFAULT_GROUP_BY } from '@e2e/test-utils/initTest/constants';
import { PALETTE_TYPE_ARR } from '@kit';
import { InitTestReturned } from './types';
import {
    getComponentCreator, getFrameCreator,
    getInputCreator, setComponentCreator,
    setPropsCreator,
    toMatchSnapshotCreator,
    waitTimeoutCreator,
} from './helpers';

export const initTest = <Props = PropsType>(
    component: ComponentsListTypes,
    config: InitTestConfig = {},
): InitTestReturned<Props> => {
    const {
        groupBy = DEFAULT_GROUP_BY,
        selector = `.Qx${component}`,
        test: testConfig = {},
        disableAnimations: isDisabledAnimations = true,
        timeout: configTimeout,
        snapshot: {
            disableIfHeaded = true,
            quality,
        } = {},
    } = config;

    const commonOptions = {
        groupBy,
        disableSnapIfHeaded: disableIfHeaded,
        disableAnimations: isDisabledAnimations,
        quality,
        uniqSelector: selector,
    };

    return ({
        ...pw.test,

        testProps: (testName, options) => {
            pw.test.use(testConfig);
            return testComponentProps<Props>(component)(testName, {
                ...commonOptions,
                ...options,
            });
        },

        compareSnapshotsMap: (options) => {
            pw.test.use(testConfig);
            return initCompareSnapshotsMap<Props>(component)({
                ...commonOptions,
                ...options,
            });
        },

        test: (testName, callback) => {
            PALETTE_TYPE_ARR.forEach(async (themeType) => {
                pw.test.use(testConfig);
                pw.test(`${testName}_${themeType}`, async ({
                    page,
                    headless,
                }, testInfo) => {
                    if (isDisabledAnimations) {
                        disableAnimations(page);
                    }

                    const setComponent = setComponentCreator(page, component, themeType);
                    const getFrame = getFrameCreator(page);
                    const getInput = getInputCreator(page);
                    const getComponent = getComponentCreator(page, selector);
                    const waitTimeout = waitTimeoutCreator(page, configTimeout ?? 0);
                    const setProps = setPropsCreator<Props>(page);
                    const toMatchSnapshot = toMatchSnapshotCreator({
                        ...commonOptions,
                        selector,
                        headless,
                        testName,
                        component,
                        getComponent,
                        waitTimeout,
                        themeType,
                    });

                    const compareSnapshotsMap: TestProps<Props>['compareSnapshotsMap'] = (
                        options,
                    ) => initCompareSnapshotsMap<Props>(component)({
                        ...commonOptions,
                        ...options,
                        testParams: { page, headless },
                        testName,
                        themeType,
                    });

                    const compareSnapshots: TestProps<Props>['compareSnapshots'] = (
                        options,
                    ) => initCompareSnapshots<Props>({
                        page,
                        headless,
                    }, component)({
                        ...commonOptions,
                        ...options,
                        testName,
                        themeType,
                    });

                    await callback({
                        page,
                        testName,

                        setComponent,
                        setProps,

                        getComponent,
                        getInput,
                        getFrame,

                        toMatchSnapshot,
                        waitTimeout,

                        compareSnapshotsMap,
                        compareSnapshots,
                    }, testInfo);
                });
            });
        },
    });
};
