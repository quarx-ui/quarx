import { ComponentsListTypes, PropValueType } from '@e2e/constants';
import { Locator, Page, PlaywrightTestArgs, PlaywrightWorkerOptions } from '@playwright/test';

export type PropsType = Record<string, PropValueType>
export type PropsStateType = 'hover' | 'press' | 'focus'
export type BeforeSnapFC = (page: Page) => Promise<void>

type GroupByKeys = 'testName' | 'props' | 'value' | 'postfix'

export type GroupByType = {
    testName?: boolean,
    props?: boolean,
    value?: boolean,
    postfix?: boolean,
} | GroupByKeys[]

export type SnapshotConfig = {
    disableIfHeaded?: boolean
    quality?: number,
}

export interface InitTestConfig {
    groupBy?: GroupByType,
    selector?: string,
    snapshot?: SnapshotConfig
}

export interface BaseProps {
    uniqSelector?: string,
    testName?: string,
    quality?: number,
    state?: PropsStateType,
    beforeSnap?: BeforeSnapFC,
    postfix?: string,
    timeout?: number,
    groupBy?: GroupByType,
    disableSnapIfHeaded?: SnapshotConfig['disableIfHeaded'],
}

export interface ExtendedPropsType<Props = PropsType> extends BaseProps {
    props: Props
    screenName?: string | string[],
}

export type PropsArray<Props = PropsType> = {
    [Property in keyof Props]?: Array<Props[Property]>
}

export interface TestComponentPropsMapArg<Props = PropsType> extends Omit<BaseProps, 'testName' | 'postfix'> {
    targetProps: PropsArray<Props>,
    commonProps?: Props,
}

export type TestParams = Partial<PlaywrightTestArgs & PlaywrightWorkerOptions> & { page: Page };

export interface CompareSnapshotsMapArg<Props = PropsType> extends
    TestComponentPropsMapArg<Props>,
    Pick<BaseProps, 'testName' | 'postfix'>
{
    testParams: TestParams,
}

export interface ToMatchSnapshotOptions {
    selector?: string,
    timeout?: number,
    disabled?: boolean,
    path?: string[]
}

export interface TestProps<Props = PropsType> {
    compareSnapshotsMap: (options: Omit<CompareSnapshotsMapArg<Props>, 'testParams' | 'testName'>) => Promise<void>,
    compareSnapshots: (options: ExtendedPropsType<Props>) => Promise<void>,
    testName: string,
    getComponent: (uniqSelector?: string) => Locator,
    toMatchSnapshot: (name: string, options?: ToMatchSnapshotOptions) => Promise<void>,
    setProps: (props?: Props) => Promise<void>,
    page: Page,
}

export interface GetScreenPathOptions {
    groupBy: GroupByType,
    testName?: string,
    component: ComponentsListTypes,
    name?: string,
    path?: string[],
    postfix?: string,
    property?: string,
    value?: PropValueType,
}

export interface CreateScreenNameOptions<Props = PropsType> {
    testName: string,
    component: ComponentsListTypes,
    props: { props: Array<Props> },
    postfix?: string,
    groupBy: GroupByType,
}
