/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { expectPropsInClasses, expectRootCn, testStyleParams } from '@core/test-utils';
import { render, screen } from '@testing-library/react';
import { TextField, TextFieldProps, TextFieldStyleParams } from '@core';
import userEvent from '@testing-library/user-event';
import { CrossIcon, WarningIcon } from '../assets';

describe('TextField', () => {
    it('className', () => {
        expectRootCn(TextField, 'QxTextField');
    });

    testStyleParams<Partial<TextFieldStyleParams>, TextFieldProps>(
        TextField,
        {
            size: 'medium',
            borderRadius: 'medium',
            clearIconVisibleOn: 'interact',
            counterVisibleOn: 'focus',
            colorBase: 'main',
        },
        { label: 'Text Field', placeholder: 'Enter a value' },
    )({
        colorBase: ['main', 'secondary'],
        size: ['small', 'medium', 'large'],
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
        error: [true, false],
        clearIconVisibleOn: ['always', 'interact', 'none'],
        focused: [true, false],
        filled: [true, false],
        loading: [true, false],
        disableLabel: [true, false],
        disableHoverStyles: [true, false],
    });

    it('text should be in document', () => {
        const label = 'Text Field';
        render(<TextField label={label} />);

        expect(screen.queryByText(label)).toBeInTheDocument();
    });

    it('icons should be in document', () => {
        const warningTestId = 'warning-icon';
        const crossTestId = 'cross-icon';

        const { asFragment } = render(
            <TextField
                label="Text Field"
                leftItem={<WarningIcon data-testid={warningTestId} />}
                rightItem={<CrossIcon data-testid={crossTestId} />}
            />,
        );

        expect(screen.getByTestId(warningTestId)).toBeInTheDocument();
        expect(screen.getByTestId(crossTestId)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('click should trigger focus', () => {
        const testId = 'TextField';
        const mockedClick = jest.fn();
        render(<TextField onClick={mockedClick} data-testid={testId} label="Text Field" />);

        userEvent.click(screen.getByText('Text Field'));

        expect(mockedClick).toBeCalledTimes(1);
        expectPropsInClasses(screen.getByTestId(testId))('focused', true);
    });

    it('type should trigger filled', () => {
        const testId = 'TextField';
        const placeholder = 'Placeholder';
        render(<TextField data-testid={testId} label={testId} placeholder={placeholder} />);

        const input = screen.getByPlaceholderText(placeholder);

        userEvent.type(input, 'Some value');

        expectPropsInClasses(screen.getByTestId(testId))('filled', true);
        expect(input).toHaveValue('Some value');
    });

    it('defaultValue should be in value', () => {
        const testId = 'TextField';
        const placeholder = 'Placeholder';
        render(<TextField data-testid={testId} label={testId} placeholder={placeholder} defaultValue="defaultValue" />);

        const input = screen.getByPlaceholderText(placeholder);

        expectPropsInClasses(screen.getByTestId(testId))('filled', true);
        expect(input).toHaveValue('defaultValue');
    });
});
