import { ComponentsListTypes, PropValueType, SEPARATORS } from '@e2e/constants';
import {
    CreateScreenNameOptions,
    ExtendedPropsType,
    GetScreenPathOptions,
    GroupByKey,
    PropsType,
} from '@e2e/test-utils/types';

export const joinToName = (parts: Array<PropValueType>, component?: ComponentsListTypes) => {
    const mappedParts = parts
        .filter((part) => part !== undefined)
        .map((el) => {
            const valueArr = String(el)
                .split(' ');

            if (valueArr.length > 2) {
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

    const testName = externalTestName?.replace(/ /, '-');

    const groupByPaths: Record<GroupByKey, string | undefined> = {
        testName,
        component,
        props: property,
        value: joinToName([value]),
        postfix,
    };

    const groupByNameParts = {
        ...groupByPaths,
        value,
    };

    const groupBySet = new Set(groupBy);

    const nameParts = Array.from(groupBySet).map((key) => groupByNameParts[key]);

    const path = externalPath ?? Array.from(groupBySet).map((key) => (
        groupByPaths[key]
    ))
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
