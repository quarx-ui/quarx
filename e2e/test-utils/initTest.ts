import { ComponentsListTypes } from '@e2e/constants';
import { CompareSnapshotsMapArg, PropsType, TestComponentPropsMapArg, TestProps } from '@e2e/test-utils/types';
import { compareSnapshots, compareSnapshotsMap } from '@e2e/test-utils/compareSnapshots';
import * as pw from '@playwright/test';
import { testComponentPropsMap } from '@e2e/test-utils/testComponent';
import { joinToName } from '@e2e/test-utils/helpers';
import { getURLFromProps } from '@e2e/utils';

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
    test: (testName: string, callback: (testProps: TestProps<Props>) => void) => void
}

export const initTest = <Props = PropsType>(component: ComponentsListTypes): InitTestReturned<Props> => ({
    ...pw.test,
    testProps: testComponentPropsMap<Props>(component),
    compareSnapshotsMap: compareSnapshotsMap<Props>(component),
    test: (testName: string, callback: (testProps: TestProps<Props>) => void) => {
        const selector = `.Sx${component}`;

        pw.test(testName, async ({ page }) => {
            const getComponent = (uSelector = selector) => page.locator(uSelector);

            const toMatchSnapshot = async (postfix: string, uSelector = selector) => {
                const screenshot = await getComponent(uSelector)
                    .screenshot({ type: 'jpeg' });
                await expect(screenshot)
                    .toMatchSnapshot(`${joinToName([testName, component, postfix])}.jpeg`);
            };

            const setProps = async (props: Props) => {
                await page.goto(getURLFromProps(component, props as unknown as PropsType));
            };

            await callback({
                page,
                compareSnapshotsMap: (options) => compareSnapshotsMap<Props>(component)({
                    ...options,
                    testName,
                    page,
                }),
                compareSnapshots: compareSnapshots<Props>(page, component),
                testName,
                getComponent,
                toMatchSnapshot,
                setProps,
            });
        });
    },
});
