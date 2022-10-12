import { PropValueType, SEPARATORS, ComponentsListTypes } from '@e2e/constants';
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
        postfix: externalPostfix,
        name: externalName,
        path: externalPath,
        themeType,
    } = options;

    const testName = externalTestName?.replace(/ /, '-');
    const postfix = externalPostfix?.replace(/ /, '-');

    const groupByPaths: Record<GroupByKey, string | undefined> = {
        testName,
        component,
        themeType,
        props: property,
        value: joinToName([value]),
        postfix,
    };

    const groupBySet = new Set(groupBy);

    const nameParts = Object.entries(groupByPaths).map(([key, namePart]) => {
        if (groupBySet.has(key as GroupByKey) || (key === 'props' && groupBySet.has('value')) || namePart === '') {
            return undefined;
        }

        return namePart;
    });

    const namePartsSet = Array.from(new Set(nameParts));

    const path = externalPath ?? Array.from(groupBySet).map((key) => (
        groupByPaths[key]
    ))
        .filter((el) => el !== undefined)
        .map((el) => String(el));

    const name = externalName ? `${externalName}.jpeg` : `${joinToName(namePartsSet, component)}.jpeg`;

    return [...path, name];
};

export function createScreenNames<Props = PropsType>(options: CreateScreenNameOptions<Props>)
    : Array<ExtendedPropsType<Props>> {
    const { props: { props }, testName, postfix, component, groupBy, themeType } = options;

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
                    themeType,
                }),
                themeType,
            });
        });
}
