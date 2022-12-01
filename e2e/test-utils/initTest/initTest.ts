import { ComponentsListTypes } from '@e2e/constants';
import { InitTestConfig, PropsType } from '@e2e/test-utils/types';
import { compareSnapshots, compareSnapshotsMap } from '@e2e/test-utils/compareSnapshots';
import * as pw from '@playwright/test';
import { testComponentProps } from '@e2e/test-utils/testComponent';
import { disableAnimations } from '@e2e/test-utils/disableAnimations';
import { DEFAULT_GROUP_BY } from '@e2e/test-utils/initTest/constants';
import { InitTestReturned } from './types';
import { getComponentCreator, setPropsCreator, toMatchSnapshotCreator, waitTimeoutCreator } from './helpers';

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
            return compareSnapshotsMap<Props>(component)({
                ...commonOptions,
                ...options,
            });
        },

        test: (testName, callback) => {
            pw.test.use(testConfig);
            pw.test(testName, async ({
                page,
                headless,
            }, testInfo) => {
                if (isDisabledAnimations) { disableAnimations(page); }

                const getComponent = getComponentCreator(page, selector);
                const waitTimeout = waitTimeoutCreator(page, configTimeout ?? 0);
                const setProps = setPropsCreator<Props>(page, component);
                const toMatchSnapshot = toMatchSnapshotCreator({
                    ...commonOptions,
                    selector,
                    headless,
                    testName,
                    component,
                    getComponent,
                    waitTimeout,
                });

                await callback({
                    page,
                    testName,
                    getComponent,
                    toMatchSnapshot,
                    setProps,
                    waitTimeout,

                    compareSnapshotsMap: (options) => compareSnapshotsMap<Props>(component)({
                        ...commonOptions,
                        ...options,
                        testParams: {
                            page,
                            headless,
                        },
                        testName,
                    }),

                    compareSnapshots: (options) => compareSnapshots<Props>({
                        page,
                        headless,
                    }, component)({
                        ...commonOptions,
                        ...options,
                        testName,
                    }),
                }, testInfo);
            });
        },
    });
};
