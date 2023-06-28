import { ComponentsListTypes, PropValueType } from '@e2e/constants';
import {
    Locator,
    Page,
    PlaywrightTestArgs,
    PlaywrightTestConfig,
    PlaywrightWorkerOptions,
    Response,
} from '@playwright/test';
import { PaletteType, valuesAsKeysFromArray } from '@kit';

export type PropsType = Record<string, PropValueType>
export type PropsStateType = 'hover' | 'press' | 'focus'
export type BeforeSnapFC = (page: Page) => Promise<void>

export const GROUP_BY_KEYS = valuesAsKeysFromArray([
    'testName',
    'component',
    'props',
    'themeType',
    'value',
    'postfix',
]);

export type GroupByKey = keyof typeof GROUP_BY_KEYS;

export type GroupByType = GroupByKey[];

export type SnapshotConfig = {
    disableIfHeaded?: boolean;
    quality?: number;
}

export interface InitTestConfig {
    groupBy?: GroupByType;
    selector?: string;
    snapshot?: SnapshotConfig;
    test?: PlaywrightTestConfig['use'];
    disableAnimations?: boolean;
    timeout?: number;
}

export interface BaseProps {
    uniqSelector?: string;
    testName?: string;
    quality?: number;
    state?: PropsStateType;
    beforeSnap?: BeforeSnapFC;
    postfix?: string;
    timeout?: number;
    groupBy?: GroupByType;
    disableSnapIfHeaded?: SnapshotConfig['disableIfHeaded'];
    disableAnimations?: boolean;
    themeType?: PaletteType;
}

export interface ExtendedPropsType<Props = PropsType> extends BaseProps {
    props: Props;
    screenName?: string | string[];
    themeType: PaletteType;
}

export type PropsArray<Props = PropsType> = {
    [Property in keyof Props]?: Array<Props[Property]>
}

export interface TestComponentPropsMapArg<Props = PropsType> extends Omit<BaseProps, 'testName' | 'postfix'> {
    targetProps: PropsArray<Props>;
    commonProps?: Props;
}

export type TestParams = Partial<PlaywrightTestArgs & PlaywrightWorkerOptions> & { page: Page };

export interface CompareSnapshotsMapArg<Props = PropsType> extends
    TestComponentPropsMapArg<Props>,
    Pick<BaseProps, 'testName' | 'postfix'>
{
    testParams: TestParams;
    themeType: PaletteType;
}

export interface ToMatchSnapshotOptions {
    selector?: string;
    timeout?: number;
    disabled?: boolean;
    path?: string[];
}

export interface TestProps<Props = PropsType> {
    compareSnapshotsMap: (
        options: Omit<CompareSnapshotsMapArg<Props>, 'testParams' | 'testName' | 'themeType'>
    ) => Promise<void>;
    compareSnapshots: (options: Omit<ExtendedPropsType<Props>, 'themeType'>) => Promise<void>;
    testName: string;
    getComponent: (uniqSelector?: string) => Locator;
    setComponent: (component?: ComponentsListTypes | string) => Promise<Response | null>;
    getInput: () => Locator;
    getFrame: () => Locator;
    toMatchSnapshot: (name: string, options?: ToMatchSnapshotOptions) => Promise<void>;
    setProps: (props?: Props) => Promise<void>;
    page: Page;
    waitTimeout: (timeout?: number) => Promise<void>;
}

export interface GetScreenPathOptions {
    groupBy: GroupByType;
    testName?: string;
    component: ComponentsListTypes;
    name?: string;
    path?: string[];
    postfix?: string;
    property?: string;
    value?: PropValueType;
    themeType: PaletteType;
}

export interface CreateScreenNameOptions<Props = PropsType> {
    testName: string;
    component: ComponentsListTypes;
    props: { props: Array<Props> };
    postfix?: string;
    groupBy: GroupByType;
    themeType: PaletteType;
}
