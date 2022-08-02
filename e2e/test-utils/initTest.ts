import { ComponentsListTypes } from '@e2e/constants';
import {
    CompareSnapshotsMapArg,
    InitTestConfig,
    InitTestGroupBy,
    PropsType,
    TestComponentPropsMapArg,
    TestProps,
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

const DEFAULT_GROUP_BY: InitTestGroupBy = ['props', 'value'];

const DEFAULT_CONFIG: InitTestConfig = {
    groupBy: DEFAULT_GROUP_BY,
};

export const initTest = <Props = PropsType>(
    component: ComponentsListTypes,
    {
        groupBy = DEFAULT_GROUP_BY,
    }: InitTestConfig = DEFAULT_CONFIG,
): InitTestReturned<Props> => ({
    ...pw.test,
    testProps: (testName, options) => testComponentProps<Props>(component)(testName, {
        groupBy,
        ...options,
    }),
    compareSnapshotsMap: (options) => compareSnapshotsMap<Props>(component)({
        groupBy,
        ...options,
    }),
    test: (testName, callback) => {
        const selector = `.Sx${component}`;

        pw.test(testName, async ({ page }, testInfo) => {
            const getComponent = (uSelector = selector) => page.locator(uSelector);

            const toMatchSnapshot = async (postfix: string, uSelector = selector) => {
                // Чтобы не создавались скриншоты по названию, если включена сортировка 'postfix'
                const groupByMathSnapshots = Array.isArray(groupBy)
                    ? groupBy.filter((el) => el !== 'postfix')
                    : ({
                        ...groupBy,
                        postfix: false,
                    });

                const screenshot = await getComponent(uSelector)
                    .screenshot({ type: 'jpeg' });
                await pw.expect(screenshot)
                    .toMatchSnapshot(getScreenPath({
                        groupBy: groupByMathSnapshots,
                        testName,
                        component,
                        postfix,
                    }));
            };

            const setProps = async (props: Props) => {
                await page.goto(getURLFromProps(component, props as unknown as PropsType));
            };

            await callback({
                page,
                compareSnapshotsMap: (options) => compareSnapshotsMap<Props>(component)({
                    groupBy,
                    ...options,
                    testName,
                    page,
                }),
                compareSnapshots: (options) => compareSnapshots<Props>(page, component)({
                    groupBy,
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
