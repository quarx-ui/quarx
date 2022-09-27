import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { SwitcherSelection } from '@core';

describe('SwitcherSelection', () => {
    it('default snapshot', () => {
        const { asFragment } = render(<SwitcherSelection title="SwitcherSelection" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('text should be in the document', () => {
        render(<SwitcherSelection title="SwitcherSelection" />);

        expect(screen.queryByText('SwitcherSelection')).toBeInTheDocument();
        const switcher = document.querySelector('input');
        expect(switcher).not.toHaveAttribute('disabled');
    });

    it('should be checked', () => {
        render(<SwitcherSelection checked title="SwitcherSelection" />);

        const switcher = document.querySelector('input');
        expect(switcher?.checked).toEqual(true);
    });

    it('should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<SwitcherSelection disabled onClick={mockedOnClick} title="SwitcherSelection" />);
        const input = document.querySelector('input');
        const switcher = document.querySelector('.QxSwitcherSelection');

        if (!switcher || !input) { return; }

        expect(input).toHaveAttribute('disabled');
        userEvent.click(switcher);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('should be hidden', () => {
        render(<SwitcherSelection hidden title="SwitcherSelection" />);
        expect(document.querySelector('.QxSwitcherSelection')).not.toBeInTheDocument();

        cleanup();

        render(<SwitcherSelection permissions={{ hidden: true }} title="SwitcherSelection" />);
        expect(document.querySelector('.QxSwitcherSelection')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnChange = jest.fn(() => {
            checked = !checked;
        });
        render(<SwitcherSelection onClick={mockedOnChange} title="SwitcherSelection" />);
        const switcher = document.querySelector('.QxSwitcherSelection');

        if (!switcher) { return; }

        userEvent.click(switcher);
        expect(mockedOnChange).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
