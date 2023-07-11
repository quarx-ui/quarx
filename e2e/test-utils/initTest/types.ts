import { CompareSnapshotsMapArg, GroupByType, PropsType, TestComponentPropsMapArg, TestProps } from '@e2e/test-utils';
import * as pw from '@playwright/test';
import { TestInfo } from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { PaletteType } from '@kit';

export interface InitTestReturned<Props = PropsType> extends
    Pick<pw.TestType<pw.PlaywrightTestArgs & pw.PlaywrightTestOptions,
    pw.PlaywrightWorkerArgs & pw.PlaywrightWorkerOptions>,
    'describe'
    | 'expect'
    | 'beforeAll'
    | 'beforeEach'
    | 'afterAll'
    | 'afterEach'>
{
    testProps: (testName: string, options: TestComponentPropsMapArg<Props>) => void;
    compareSnapshotsMap: (options: CompareSnapshotsMapArg<Props>) => Promise<void>;
    test: (testName: string, callback: (testProps: TestProps<Props>, testInfo: TestInfo) => void) => void;
}

export interface ToMatchSnapshotCreatorProps {
    selector: string;
    disableSnapIfHeaded: boolean;
    headless?: boolean;
    quality?: number;
    testName: string;
    component: ComponentsListTypes;
    getComponent: (uSelector?: string) => pw.Locator;
    waitTimeout: (timeout?: number) => Promise<void>;
    groupBy: GroupByType;
    themeType: PaletteType;
}
