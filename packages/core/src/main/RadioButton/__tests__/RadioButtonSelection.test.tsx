import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { RadioButtonSelection } from '@core';

describe('RadioButtonSelection', () => {
    it('default snapshot', () => {
        const { asFragment } = render(<RadioButtonSelection title="RadioButtonSelection" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('text should be in the document', () => {
        render(<RadioButtonSelection title="RadioButtonSelection" />);

        expect(screen.queryByText('RadioButtonSelection')).toBeInTheDocument();
        const radioButton = document.querySelector('input');
        expect(radioButton).not.toHaveAttribute('disabled');
    });

    it('should be checked', () => {
        render(<RadioButtonSelection checked title="RadioButtonSelection" />);

        const radioButton = document.querySelector('input');
        expect(radioButton?.checked).toEqual(true);
    });

    it('should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<RadioButtonSelection disabled onClick={mockedOnClick} title="RadioButtonSelection" />);
        const input = document.querySelector('input');
        const radioButton = document.querySelector('.QxRadioButtonSelection');

        if (!radioButton || !input) { return; }

        expect(input).toHaveAttribute('disabled');
        userEvent.click(radioButton);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('should be hidden', () => {
        render(<RadioButtonSelection hidden title="RadioButtonSelection" />);
        expect(document.querySelector('.QxRadioButtonSelection')).not.toBeInTheDocument();

        cleanup();

        render(<RadioButtonSelection permissions={{ hidden: true }} title="RadioButtonSelection" />);
        expect(document.querySelector('.QxRadioButtonSelection')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnChange = jest.fn(() => {
            checked = !checked;
        });
        render(<RadioButtonSelection onClick={mockedOnChange} title="RadioButtonSelection" />);
        const radioButton = document.querySelector('.QxRadioButtonSelection');

        if (!radioButton) { return; }

        userEvent.click(radioButton);
        expect(mockedOnChange).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
