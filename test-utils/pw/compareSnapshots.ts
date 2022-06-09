import { expect, Route, test } from '@playwright/test';
import { storyUrl } from '../storybookUrl';

/* ********* Скриншоты существующих сторей *************** */

// eslint-disable-next-line jest/no-export
export const compareStorySnapshots = (component: string) => (...params: Array<string>) => {
    const variantTestPromises = params.map(async (parameter) => {
        // eslint-disable-next-line jest/valid-title, jest/no-done-callback
        test(`${component} ${parameter}`, async ({ page }) => {
            await page.goto(storyUrl({
                component,
                story: parameter,
            }));
            const frame = await page.$('#storybook-preview-iframe');
            const frameContent = await frame?.contentFrame();
            const body = await frameContent?.locator('body.sb-show-main');
            expect(await body?.screenshot())
                .toMatchSnapshot({ name: `${parameter}.png` });
        });
    });

    Promise.all(variantTestPromises);
};

type ValueOfPropsType = string | boolean | number;

interface CompareProps {
    uniqSelector?: string,
    sxClassname?: string,
    component: string,
}

const blockFonts = async (route: Route) => {
    if (route.request().resourceType() === 'script' || route.request().resourceType() === 'document') {
        await route.continue();
    } else {
        await route.abort();
    }
};

/* ********* Скриншоты отдельного варианта с неограниченным количеством свойств *************** */

interface CompareVariantSnapshots extends CompareProps {
    props?: Record<string, ValueOfPropsType>,
    testName?: string,
}

// eslint-disable-next-line jest/no-export
export const compareVariantSnapshots = (options: CompareVariantSnapshots) => {
    const {
        component,
        props,
        testName: extTestName,
        sxClassname,
        uniqSelector,
    } = options;

    const selector = uniqSelector ?? sxClassname
        ? `.${sxClassname}`
        : `.Sx${component[0].toUpperCase()}${component.substring(1)}`;
    const testName = extTestName ?? component;

    // eslint-disable-next-line jest/no-done-callback,jest/valid-title
    test(testName, async ({ page }) => {
        await page.route('**/*', blockFonts);

        await page.goto(storyUrl({
            component,
            props,
        }));

        const frame = await page.frameLocator('#storybook-preview-iframe');
        const body = await frame.locator('body.sb-show-main');
        const element = await body.locator(selector);

        await page.pause();
        const screenshot = await element.screenshot();
        expect(await screenshot).toMatchSnapshot({ name: `${testName}.png` });
    });
};

/* ********* Скриншоты отдельных вариантов с несколькими значениями одного свойства *************** */

interface CompareVariantsMapSnapshots extends CompareProps {
    property?: string,
    values?: Array<ValueOfPropsType>
}

// eslint-disable-next-line jest/no-export
export const comparePropertySnapshots = (options: CompareVariantsMapSnapshots) => {
    const { values, property, ...restOptions } = options;

    if (values && property) {
        values.forEach((value) => {
            compareVariantSnapshots({
                props: {
                    [property]: value,
                },
                testName: `${property} ${value}`,
                ...restOptions,
            });
        });
    } else {
        compareVariantSnapshots({ ...restOptions });
    }
};

/* ********* Скриншоты отдельных вариантов с несколькими свойствами *************** */

interface ComparePropertiesMapSnapshots extends CompareProps {
    props: Record<string, Array<ValueOfPropsType>>
}

// eslint-disable-next-line jest/no-export
export const comparePropertiesMapSnapshots = (options: ComparePropertiesMapSnapshots) => {
    const { props, ...restOptions } = options;
    const keysOfProps = Object.keys(props);

    keysOfProps.forEach((property) => {
        comparePropertySnapshots({
            property,
            values: props[property],
            ...restOptions,
        });
    });
};
