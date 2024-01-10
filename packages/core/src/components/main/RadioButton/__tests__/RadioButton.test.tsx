import { cleanup, render, screen } from '@testing-library/react';
import { RadioButtonProps, RadioButtonStyleParams } from '@core/components/main/RadioButton/types';
import { RadioButton } from '@core';
import userEvent from '@testing-library/user-event';
import { testStyleParams } from '@core/test-utils';

describe('RadioButton', () => {
    testStyleParams<Partial<RadioButtonStyleParams>, RadioButtonProps>(
        RadioButton,
        {
            size: 'medium',
            color: 'brand',
        },
        { children: 'Статус' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger'],
        size: ['small', 'medium', 'large'],
        position: ['left', 'right'],
        disabled: [true, false],
    });

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
