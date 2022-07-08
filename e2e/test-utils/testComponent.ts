import * as pw from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { ExtendedPropsType, PropsType, TestComponentPropsMapArg } from '@e2e/test-utils/types';
import { compareSnapshots } from '@e2e/test-utils/compareSnapshots';
import { joinToName, createCommonScreenNames, runSeriesPromises, runSeriesComparisons } from '@e2e/test-utils/helpers';

export const testComponent = (component: ComponentsListTypes) => (
    testName: string,
    props: Array<ExtendedPropsType> | ExtendedPropsType,
) => {
    pw.test(testName, async ({ page }) => {
        const compareSnaps = compareSnapshots(page, component);

        if (Array.isArray(props)) {
            const propsWithTestName = createCommonScreenNames(component, testName, props);

            await runSeriesPromises(propsWithTestName, compareSnaps);
        } else {
            await compareSnaps({
                ...props,
                screenName: joinToName([component, testName, props.postfix]),
            });
        }
    });
};

export function testComponentPropsMap<Props = PropsType>(component: ComponentsListTypes) {
    return (testName: string, options: TestComponentPropsMapArg<Props>) => {
        const {
            targetProps,
            quality,
            uniqSelector,
            commonProps: extCommonProps,
            beforeSnap,
            state,
            timeout,
        } = options;

        const commonProps = {
            props: extCommonProps as Props,
            quality,
            uniqSelector,
            state,
            beforeSnap,
            timeout,
        };

        pw.test(testName, async ({ page }) => {
            await runSeriesComparisons<Props>(
                page,
                component,
                targetProps,
                commonProps,
                testName,
                state,
            );
        });
    };
}
