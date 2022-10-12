import { PropsArray, ExtendedPropsType, PropsType, TestParams, BaseProps } from '@e2e/test-utils/types';
import { ThemeTypes, ComponentsListTypes } from '@e2e/constants';
import { compareSnapshots } from '@e2e/test-utils/compareSnapshots';
import { createScreenNames } from '@e2e/test-utils/screenName';

export async function runSeriesPromises<Props = PropsType>(
    iterable: Array<ExtendedPropsType<Props>>,
    action: (options: ExtendedPropsType<Props>) => Promise<void>,
) {
    for (let i = 0; i < iterable.length; i += 1) {
        const x = iterable[i];
        // eslint-disable-next-line no-await-in-loop
        await action(x);
    }
}

export const flatArray = (array: Array<any>) => array.reduce((acc, value) => {
    if (Array.isArray(value)) {
        return [
            ...acc,
            ...value,
        ];
    }

    return [...acc, value];
}, []);

export const convertProps = (props: PropsArray) => {
    const convertedProps = Object.entries(props)
        .map(([property, values]) => (values ?? [])
            .map((value) => ({
                [property]: value,
            })));

    return { props: flatArray(convertedProps) };
};

export function injectCommonProps<Props = PropsType>(
    srcProps: Array<ExtendedPropsType<Props>>,
    commonProps: ExtendedPropsType<Props>,
): Array<ExtendedPropsType<Props>> {
    return srcProps
        .map((props) => ({
            ...commonProps,
            ...props,
            props: {
                ...commonProps.props,
                ...props.props,
            },
        }));
}

export interface RunSeriesComparisonsOptions<Props = PropsType>
    extends Pick<BaseProps, 'groupBy' | 'disableSnapIfHeaded'> {
    testParams: TestParams,
    component: ComponentsListTypes,
    targetProps: PropsArray<Props>,
    commonProps: ExtendedPropsType<Props>,
    testName: string,
    postfix?: string,
    themeType: ThemeTypes
}

export async function runSeriesComparisons<Props = PropsType>(options: RunSeriesComparisonsOptions<Props>) {
    const {
        testParams,
        component,
        targetProps,
        commonProps,
        testName,
        postfix,
        groupBy = [],
        themeType,
    } = options;

    const { page, headless } = testParams;

    const compareSnaps = compareSnapshots<Props>({ page, headless }, component);
    const convertedProps = convertProps(targetProps as PropsArray);
    const propsWithScreenNames = createScreenNames<Props>({
        testName,
        component,
        props: convertedProps,
        postfix,
        groupBy,
        themeType,
    });
    const propsWithCommon = injectCommonProps<Props>(propsWithScreenNames, commonProps);

    await runSeriesPromises<Props>(propsWithCommon, compareSnaps);
}
