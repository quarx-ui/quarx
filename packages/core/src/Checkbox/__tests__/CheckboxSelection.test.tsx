import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { CheckboxSelection } from '@core/src/Checkbox/CheckboxSelection';

describe('CheckboxSelection', () => {
    it('default snapshot', () => {
        const { asFragment } = render(<CheckboxSelection title="CheckboxSelection" />);

        expect(asFragment()).toMatchSnapshot();
    });
    it('text should be in the document', () => {
        render(<CheckboxSelection title="CheckboxSelection" />);

        expect(screen.queryByText('CheckboxSelection')).toBeInTheDocument();
        const checkbox = document.querySelector('input');
        expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('should be checked', () => {
        render(<CheckboxSelection checked title="CheckboxSelection" />);

        const checkbox = document.querySelector('input');
        expect(checkbox?.checked).toEqual(true);
    });

    it('should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<CheckboxSelection disabled onClick={mockedOnClick} title="CheckboxSelection" />);
        const input = document.querySelector('input');
        const checkbox = document.querySelector('.SxCheckboxSelection');

        if (!checkbox || !input) { return; }

        expect(input).toHaveAttribute('disabled');
        userEvent.click(checkbox);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('should be hidden', () => {
        render(<CheckboxSelection hidden title="CheckboxSelection" />);
        expect(document.querySelector('.SxCheckboxSelection')).not.toBeInTheDocument();

        cleanup();

        render(<CheckboxSelection permissions={{ hidden: true }} title="CheckboxSelection" />);
        expect(document.querySelector('.SxCheckboxSelection')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnChange = jest.fn(() => {
            checked = !checked;
        });
        render(<CheckboxSelection onClick={mockedOnChange} title="CheckboxSelection" />);
        const checkbox = document.querySelector('.SxCheckboxSelection');

        if (!checkbox) { return; }

        userEvent.click(checkbox);
        expect(mockedOnChange).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
