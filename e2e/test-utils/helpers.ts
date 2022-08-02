import { PropsArray, ExtendedPropsType, PropsType, InitTestGroupBy } from '@e2e/test-utils/types';
import { ComponentsListTypes } from '@e2e/constants';
import { compareSnapshots } from '@e2e/test-utils/compareSnapshots';
import { Page } from '@playwright/test';
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

export async function runSeriesComparisons<Props = PropsType>(
    page: Page,
    component: ComponentsListTypes,
    targetProps: PropsArray<Props>,
    commonProps: ExtendedPropsType<Props>,
    testName: string,
    postfix?: string,
    groupBy: InitTestGroupBy = {},
) {
    const compareSnaps = compareSnapshots<Props>(page, component);
    const convertedProps = convertProps(targetProps as PropsArray);
    const propsWithScreenNames = createScreenNames<Props>({
        testName,
        component,
        props: convertedProps,
        postfix,
        groupBy,
    });
    const propsWithCommon = injectCommonProps<Props>(propsWithScreenNames, commonProps);

    await runSeriesPromises<Props>(propsWithCommon, compareSnaps);
}
