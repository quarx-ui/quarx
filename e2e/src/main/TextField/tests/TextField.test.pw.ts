import { initTest } from '@e2e/test-utils';
import { TestTextFieldProps } from '@e2e/src/main/TextField/types';

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
        });
    });

    test('interactive', async ({ getComponent, setComponent, page, toMatchSnapshot, setProps }) => {
        await setComponent();
        await getComponent().click();
        await toMatchSnapshot('click');

        await getComponent().locator('input').fill('Some text');
        await toMatchSnapshot('fill');

        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('withoutClearIcon');

        await getComponent().hover();
        await getComponent('.QxTextField-closeIcon').click();
        await toMatchSnapshot('afterClear');

        await setProps({ clearIconVisibleOn: 'always', value: 'Some text' });
        await getComponent().click();
        await toMatchSnapshot('clearIconOnFocus');

        await setProps({ required: true });
        await getComponent().locator('input').fill('Some value');
        await getComponent().locator('input').fill('');
        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('requiredError');

        await setProps({ maxLength: 5, overflow: true });
        await getComponent().locator('input').fill('123456');
        await toMatchSnapshot('maxLengthError');

        await setProps({ disabled: true });
        await getComponent().click();
        await toMatchSnapshot('disabled');

        await setProps({ readOnly: true });
        await getComponent().click();
        await toMatchSnapshot('readOnly');
    });

    test('helpers', async ({ setProps, setComponent, toMatchSnapshot, getComponent, page }) => {
        await setComponent();
        await setProps({ counter: true, maxLength: 30 });
        await toMatchSnapshot('default');

        await getComponent().click();
        await toMatchSnapshot('focused');

        await getComponent().locator('input').fill('Some text');
        await page.locator('body').click({ position: { x: 0, y: 0 } });
        await toMatchSnapshot('filled');

        await setProps({ counter: true, maxLength: 5, overflow: true, value: '123456' });
        await toMatchSnapshot('maxLengthError');
    });

    test('multiline', async ({ setProps, setComponent, toMatchSnapshot }) => {
        await setComponent();
        const longText = 'It is a very loooooooong text and it will continue unless each row become filled '
            + 'Of course, I can use \'Lorem ipsum bla bla bla\', but I didn\'t';
        await setProps({ multiline: true, rows: 2, value: longText });
        await toMatchSnapshot('filledRows');

        await setProps({ multiline: true, minRows: 2, maxRows: 3, value: longText });
        await toMatchSnapshot('filledMaxRows');

        await setProps({ value: '' });
        await setProps({ multiline: true, minRows: 6, value: longText });
        await toMatchSnapshot('filledMinRows');
    });
});
