import { initTest } from '@e2e/test-utils/initTest';
import { TestTextFieldProps } from '@e2e/src/TextField/types';

const { test, describe } = initTest<TestTextFieldProps>('TextField', {
    groupBy: ['testName', 'props', 'value', 'postfix'],
});

describe('TextField', () => {
    test('props', async ({ compareSnapshotsMap, compareSnapshots }) => {
        await compareSnapshotsMap({
            targetProps: {
                leftItem: [true],
                rightItem: [true],
                value: ['Some value for test'],
                colorBase: ['secondary'],
                error: [true],
                errorText: ['Some error'],
                helperText: ['Helper text'],
                required: [true],
                size: ['small', 'large'],
                borderRadius: ['xSmall', 'small', 'large', 'xLarge'],
                multiline: [true],
            },
        });

        await compareSnapshotsMap({
            targetProps: {
                filled: [true],
                focused: [true],
                disabled: [true],
            },
            commonProps: {
                leftItem: true,
                rightItem: true,
            },
        });

        await compareSnapshots({
            props: {
                label: 'Text Field',
            },
            state: 'hover',
            postfix: 'hover',
            timeout: 200,
        });
    });

    test('interactive', async ({ getComponent, page, toMatchSnapshot, setProps }) => {
        await setProps();
        await getComponent().click();
        await toMatchSnapshot('click', { timeout: 300 });

        await getComponent().locator('input').fill('Some text');
        await toMatchSnapshot('fill', { timeout: 200 });

        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('withoutClearIcon', { timeout: 200 });

        await getComponent().hover();
        await getComponent('.SxTextField-closeIcon').click();
        await toMatchSnapshot('afterClear', { timeout: 200 });

        await setProps({ clearIconVisibleOn: 'always', value: 'Some text' });
        await getComponent().click();
        await toMatchSnapshot('clearIconOnFocus', { timeout: 300 });

        await setProps({ required: true });
        await getComponent().locator('input').fill('Some value');
        await getComponent().locator('input').fill('');
        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('requiredError', { timeout: 200 });

        await setProps({ maxLength: 5, overflow: true });
        await getComponent().locator('input').fill('123456');
        await toMatchSnapshot('maxLengthError', { timeout: 300 });

        await setProps({ disabled: true });
        await getComponent().click();
        await toMatchSnapshot('disabled', { timeout: 200 });

        await setProps({ readOnly: true });
        await getComponent().click();
        await toMatchSnapshot('readOnly', { timeout: 200 });
    });

    test('helpers', async ({ setProps, toMatchSnapshot, getComponent, page }) => {
        await setProps({ counter: true, maxLength: 30 });
        await toMatchSnapshot('default');

        await getComponent().click();
        await toMatchSnapshot('focused', { timeout: 300 });

        await getComponent().locator('input').fill('Some text');
        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('filled', { timeout: 200 });

        await setProps({ counter: true, maxLength: 5, overflow: true, value: '123456' });
        await toMatchSnapshot('maxLengthError', { timeout: 200 });
    });

    test('multiline', async ({ setProps, toMatchSnapshot }) => {
        const longText = 'It is a very loooooooong text and it will continue unless each row become filled '
            + 'Of course, I can use \'Lorem ipsum bla bla bla\', but I didn\'t';
        await setProps({ multiline: true, rows: 2, value: longText });
        await toMatchSnapshot('filledRows');

        await setProps({ multiline: true, minRows: 2, maxRows: 3, value: longText });
        await toMatchSnapshot('filledMaxRows');

        await setProps({ multiline: true, minRows: 6, value: longText });
        await toMatchSnapshot('filledMinRows');
    });
});
