import { PropValueType } from '@e2e/constants';
import { Locator, Page } from '@playwright/test';

export type PropsType = Record<string, PropValueType>
export type PropsStateType = 'hover' | 'press' | 'focus'
export type BeforeSnapFC = (page: Page) => Promise<void>

export interface BaseProps {
    uniqSelector?: string,
    testName?: string,
    quality?: number,
    state?: PropsStateType,
    beforeSnap?: BeforeSnapFC,
    postfix?: string,
    timeout?: number,
}

export interface ExtendedPropsType<Props = PropsType> extends BaseProps {
    props: Props
    screenName?: string,
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
