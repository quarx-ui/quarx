import * as pw from '@playwright/test';
import { THEME_TYPES_ARR, ComponentsListTypes } from '@e2e/constants';
import { PropsType, TestComponentPropsMapArg } from '@e2e/test-utils/types';
import { runSeriesComparisons } from '@e2e/test-utils/helpers';
import { disableAnimations } from '@e2e/test-utils/disableAnimations';

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
            disableSnapIfHeaded,
            disableAnimations: isDisabledAnimations,
        } = options;
        THEME_TYPES_ARR.forEach(async (themeType) => {
            const commonProps = {
                props: extCommonProps as Props,
                quality,
                uniqSelector,
                state,
                beforeSnap,
                timeout,
                themeType,
                disableSnapIfHeaded,
                disableAnimations: isDisabledAnimations,
            };
            pw.test(`${testName}_${themeType}`, async ({ page, headless }) => {
                if (isDisabledAnimations) { disableAnimations(page); }

                await runSeriesComparisons<Props>({
                    component,
                    targetProps,
                    commonProps,
                    testName,
                    postfix: state,
                    groupBy,
                    disableSnapIfHeaded,
                    testParams: { page, headless },
                    themeType,
                });
            });
        });
    };
}
