import { ComponentsListTypes, PropValueType } from '@e2e/constants';
import { Locator, Page } from '@playwright/test';

export type PropsType = Record<string, PropValueType>
export type PropsStateType = 'hover' | 'press' | 'focus'
export type BeforeSnapFC = (page: Page) => Promise<void>

type GroupByTypes = 'testName' | 'props' | 'value' | 'postfix'

export type InitTestGroupBy = {
    testName?: boolean,
    props?: boolean,
    value?: boolean,
    postfix?: boolean,
} | GroupByTypes[]

export interface InitTestConfig {
    groupBy?: InitTestGroupBy,
}

export interface BaseProps {
    uniqSelector?: string,
    testName?: string,
    quality?: number,
    state?: PropsStateType,
    beforeSnap?: BeforeSnapFC,
    postfix?: string,
    timeout?: number,
    groupBy?: InitTestGroupBy,
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

export interface CompareSnapshotsMapArg<Props = PropsType> extends
    TestComponentPropsMapArg<Props>,
    Pick<BaseProps, 'testName' | 'postfix'>
{
    page: Page,
}

export interface TestProps<Props = PropsType> {
    compareSnapshotsMap: (options: Omit<CompareSnapshotsMapArg<Props>, 'page' | 'testName'>) => Promise<void>,
    compareSnapshots: (options: ExtendedPropsType<Props>) => Promise<void>,
    testName: string,
    getComponent: (uniqSelector?: string) => Locator,
    toMatchSnapshot: (name: string, selector?: string) => Promise<void>,
    setProps: (props: Props) => Promise<void>,
    page: Page
}

export interface GetScreenPathOptions {
    groupBy: InitTestGroupBy,
    testName?: string,
    component: ComponentsListTypes,
    name?: string,
    postfix?: string,
    property?: string,
    value?: PropValueType,
}

export interface CreateScreenNameOptions<Props = PropsType> {
    testName: string,
    component: ComponentsListTypes,
    props: { props: Array<Props> },
    postfix?: string,
    groupBy: InitTestGroupBy,
}
