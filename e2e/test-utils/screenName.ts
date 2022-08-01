import { ComponentsListTypes, PropValueType, SEPARATORS } from '@e2e/constants';
import {
    CreateScreenNameOptions,
    ExtendedPropsType,
    GetScreenPathOptions,
    GroupByType,
    PropsType,
} from '@e2e/test-utils/types';

export const joinToName = (parts: Array<PropValueType>, component?: ComponentsListTypes) => {
    const mappedParts = parts
        .filter((part) => part !== undefined)
        .map((el) => {
            const valueArr = String(el)
                .split(' ');

            if (valueArr.length > 3) {
                return 'text';
            }

            return valueArr.join('_');
        })
        .join(SEPARATORS.NAME);

    return mappedParts || component || '';
};

export const getScreenPath = (options: GetScreenPathOptions): string[] => {
    const {
        groupBy,
        testName: externalTestName,
        property,
        value,
        component,
        postfix,
        name: externalName,
        path: externalPath,
    } = options;

    const internalGroupBy: GroupByType = {};

    if (Array.isArray(groupBy)) {
        new Set(groupBy).forEach((el) => {
            internalGroupBy[el] = true;
        });
    }

    const {
        testName: groupByTestName = false,
        props: groupByProps = false,
        value: groupByValue = false,
        postfix: groupByPostfix = false,
    } = internalGroupBy;

    const testName = externalTestName?.replace(/ /, '-');
    const nameParts = [
        !groupByTestName ? testName : undefined,
        component !== testName ? component : undefined,
        !groupByProps ? property : undefined,
        !groupByValue ? value : undefined,
        !groupByPostfix ? postfix : undefined,
    ];

    const path = externalPath ?? [
        groupByTestName ? testName : undefined,
        groupByProps ? property : undefined,
        groupByValue ? value : undefined,
        groupByPostfix ? postfix : undefined,
    ]
        .filter((el) => el !== undefined)
        .map((el) => String(el));

    const name = externalName ? `${externalName}.jpeg` : `${joinToName(nameParts, component)}.jpeg`;

    return [...path, name];
};

export function createScreenNames<Props = PropsType>(options: CreateScreenNameOptions<Props>): Array<ExtendedPropsType<Props>> {
    const { props: { props }, testName, postfix, component, groupBy } = options;

    return props
        .map((prop) => {
            const [property, value] = Object.entries(prop)
                .reduce((acc, propEl) => propEl);

            return ({
                props: prop,
                screenName: getScreenPath({
                    testName,
                    component,
                    property,
                    value,
                    postfix,
                    groupBy,
                }),
            });
        });
}
