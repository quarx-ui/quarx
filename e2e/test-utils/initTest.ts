import { ComponentsListTypes } from '@e2e/constants';
import {
    CompareSnapshotsMapArg,
    InitTestConfig,
    GroupByType,
    PropsType,
    TestComponentPropsMapArg,
    TestProps, ToMatchSnapshotOptions,
} from '@e2e/test-utils/types';
import { compareSnapshots, compareSnapshotsMap } from '@e2e/test-utils/compareSnapshots';
import * as pw from '@playwright/test';
import { testComponentProps } from '@e2e/test-utils/testComponent';
import { getURLFromProps } from '@e2e/utils';
import { TestInfo } from '@playwright/test';
import { getScreenPath } from '@e2e/test-utils/screenName';

interface InitTestReturned<Props = PropsType> extends
    Pick<pw.TestType<pw.PlaywrightTestArgs & pw.PlaywrightTestOptions,
    pw.PlaywrightWorkerArgs & pw.PlaywrightWorkerOptions>,
    'describe'
    | 'expect'
    | 'beforeAll'
    | 'beforeEach'
    | 'afterAll'
    | 'afterEach'>
{
    testProps: (testName: string, options: TestComponentPropsMapArg<Props>) => void,
    compareSnapshotsMap: (options: CompareSnapshotsMapArg<Props>) => Promise<void>,
    test: (testName: string, callback: (testProps: TestProps<Props>, testInfo: TestInfo) => void) => void
}

const DEFAULT_GROUP_BY: GroupByType = ['props', 'value'];

export const initTest = <Props = PropsType>(
    component: ComponentsListTypes,
    {
        groupBy = DEFAULT_GROUP_BY,
        selector = `.Qx${component}`,
        test: testConfig = {},
        snapshot: {
            disableIfHeaded = true,
            quality,
        } = {},
    }: InitTestConfig = {},
): InitTestReturned<Props> => ({
    ...pw.test,
    testProps: (testName, options) => {
        pw.test.use(testConfig);
        return testComponentProps<Props>(component)(testName, {
            groupBy,
            disableSnapIfHeaded: disableIfHeaded,
            quality,
            uniqSelector: selector,
            ...options,
        });
    },
    compareSnapshotsMap: (options) => {
        pw.test.use(testConfig);
        return compareSnapshotsMap<Props>(component)({
            groupBy,
            disableSnapIfHeaded: disableIfHeaded,
            quality,
            uniqSelector: selector,
            ...options,
        });
    },
    test: (testName, callback) => {
        pw.test.use(testConfig);
        pw.test(testName, async ({ page, headless }, testInfo) => {
            const getComponent = (uSelector = selector) => page.locator(uSelector);

            const toMatchSnapshot = async (postfix: string, options: ToMatchSnapshotOptions = {}) => {
                const {
                    selector: uSelector = selector,
                    disabled,
                    timeout,
                    path,
                } = options;

                if (disabled || (disableIfHeaded && headless === false)) { return; }

                if (timeout) {
                    await page.waitForTimeout(timeout);
                }

                // Чтобы не создавались папки по названию скриншотов, если включена сортировка 'postfix'
                const groupForMatchSnapshots = groupBy.filter((el) => el !== 'postfix');

                const screenshot = await getComponent(uSelector)
                    .screenshot({ type: 'jpeg', quality });
                await pw.expect(screenshot)
                    .toMatchSnapshot(getScreenPath({
                        groupBy: groupForMatchSnapshots,
                        testName,
                        component,
                        postfix,
                        path,
                    }));
            };

            const setProps = async (props?: Props) => {
                await page.goto(getURLFromProps(component, props as unknown as PropsType));
            };

            await callback({
                page,
                compareSnapshotsMap: (options) => compareSnapshotsMap<Props>(component)({
                    groupBy,
                    disableSnapIfHeaded: disableIfHeaded,
                    quality,
                    uniqSelector: selector,
                    ...options,
                    testParams: { page, headless },
                    testName,
                }),
                compareSnapshots: (options) => compareSnapshots<Props>({ page, headless }, component)({
                    groupBy,
                    disableSnapIfHeaded: disableIfHeaded,
                    quality,
                    uniqSelector: selector,
                    ...options,
                    testName,
                }),
                testName,
                getComponent,
                toMatchSnapshot,
                setProps,
            }, testInfo);
        });
    },
});
