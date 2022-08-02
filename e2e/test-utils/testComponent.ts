import * as pw from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { PropsType, TestComponentPropsMapArg } from '@e2e/test-utils/types';
import { runSeriesComparisons } from '@e2e/test-utils/helpers';

export function testComponentProps<Props = PropsType>(component: ComponentsListTypes) {
    return (testName: string, options: TestComponentPropsMapArg<Props>) => {
        const {
            targetProps,
            quality,
            uniqSelector,
            commonProps: extCommonProps,
            beforeSnap,
            state,
            timeout,
            groupBy,
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
                groupBy,
            );
        });
    };
}
