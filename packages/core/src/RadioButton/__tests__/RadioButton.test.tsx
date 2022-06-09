import { cleanup, render, screen } from '@testing-library/react';
import { RadioButtonStyleParams } from '@core/src/RadioButton/types';
import React, { FC } from 'react';
import { RadioButton } from '@core';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '../../../../../test-utils/jest';

const checkPropsInClasses = (props: RadioButtonStyleParams) => {
    const {
        size = 'medium',
        hasError = false,
        disableFocus = false,
        disabled = false,
    } = props;
    const radioButton = document.querySelector('label');
    if (!radioButton) { return; }
    const propsWithDefault = { size, disabled, hasError, disableFocus };

    expectPropsMapInClasses(radioButton)(propsWithDefault);
};

const checkProps = (Component: FC) => (checkedProps?: RadioButtonStyleParams) => () => {
    const { asFragment } = render(<Component {...checkedProps}>{Component.displayName}</Component>);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

describe('RadioButton snapshots', () => {
    RadioButton.displayName = 'RadioButton';
    const checkRadioProps = checkProps(RadioButton);

    it('default', checkRadioProps());

    it('small', checkRadioProps({ size: 'small' }));
    it('medium', checkRadioProps({ size: 'medium' }));
    it('large', checkRadioProps({ size: 'large' }));

    it('checked', checkRadioProps({ checked: true }));
    it('disabled', checkRadioProps({ disabled: true }));
    it('disableFocus', checkRadioProps({ disableFocus: true }));
    it('hasError', checkRadioProps({ hasError: true }));
});

describe('RadioButton', () => {
    it('text should be in the document', () => {
        render(<RadioButton>RadioButton</RadioButton>);

        expect(screen.queryByText('RadioButton')).toBeInTheDocument();
        const radioButton = document.querySelector('input');
        expect(radioButton).not.toHaveAttribute('disabled');
    });

    it('radioButton should be checked', () => {
        render(<RadioButton checked>RadioButton</RadioButton>);

        const radioButton = document.querySelector('input');
        expect(radioButton?.checked).toEqual(true);
    });

    it('radioButton should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<RadioButton disabled onClick={mockedOnClick}>RadioButton</RadioButton>);
        const radioButton = document.querySelector('input');

        if (!radioButton) { return; }

        expect(radioButton).toHaveAttribute('disabled');
        userEvent.click(radioButton);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('radioButton should be hidden', () => {
        render(<RadioButton hidden>RadioButton</RadioButton>);
        expect(document.querySelector('input')).not.toBeInTheDocument();

        cleanup();

        render(<RadioButton permissions={{ hidden: true }}>RadioButton</RadioButton>);
        expect(document.querySelector('input')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnClick = jest.fn(() => {
            checked = !checked;
        });
        render(<RadioButton onClick={mockedOnClick}>RadioButton</RadioButton>);
        const radioButton = document.querySelector('input');

        if (!radioButton) { return; }

        userEvent.click(radioButton);
        expect(mockedOnClick).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
