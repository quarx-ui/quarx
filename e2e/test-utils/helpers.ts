import { PropsArray, ExtendedPropsType, PropsType } from '@e2e/test-utils/types';
import { ComponentsListTypes, PropValueType, SEPARATORS } from '@e2e/constants';
import { compareSnapshots } from '@e2e/test-utils/compareSnapshots';
import { Page } from '@playwright/test';

export const joinToName = (parts: Array<PropValueType>) => parts
    .filter((part) => part !== undefined)
    .join(SEPARATORS.NAME);

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

export const createCommonScreenNames = (
    component: ComponentsListTypes,
    testName: string,
    props: Array<ExtendedPropsType>,
) => props
    .map((propsEl, index) => ({
        ...propsEl,
        screenName: joinToName([component, testName, (propsEl.postfix ?? index)]),
    }));

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

export function createScreenNames<Props = PropsType>(
    testName: string,
    component: string,
    props: { props: Array<Props> },
    postfix?: string,
): Array<ExtendedPropsType<Props>> {
    return props.props
        .map((prop) => {
            const property = Object.entries(prop)
                .reduce((acc, propEl) => propEl);

            return ({
                props: prop,
                screenName: joinToName([testName, (component !== testName ? component : undefined), ...property, postfix]),
            });
        });
}

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
) {
    const compareSnaps = compareSnapshots<Props>(page, component);
    const convertedProps = convertProps(targetProps as PropsArray);
    const propsWithScreenNames = createScreenNames<Props>(testName, component, convertedProps, postfix);
    const propsWithCommon = injectCommonProps<Props>(propsWithScreenNames, commonProps);

    await runSeriesPromises<Props>(propsWithCommon, compareSnaps);
}
