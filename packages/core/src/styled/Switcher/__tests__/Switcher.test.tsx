import { cleanup, render, screen } from '@testing-library/react';
import { SwitcherProps, SwitcherStyleParams } from '@quarx-ui/core/src/styled/Switcher/types';
import React from 'react';
import { Switcher } from '@core';
import userEvent from '@testing-library/user-event';
import { testStyleParams } from '@core/test-utils';

describe('Switcher', () => {
    testStyleParams<Partial<SwitcherStyleParams>, SwitcherProps>(
        Switcher,
        {
            size: 'medium',
            color: 'brand',
            position: 'left',
        },
        { children: 'Статус' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger'],
        size: ['small', 'medium', 'large'],
        position: ['left', 'right'],
        disabled: [true, false],
    });

    it('text should be in the document', () => {
        render(<Switcher>Switcher</Switcher>);

        expect(screen.queryByText('Switcher')).toBeInTheDocument();
        const checkbox = document.querySelector('input');
        expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('Switcher should be checked', () => {
        render(<Switcher checked>Switcher</Switcher>);

        const checkbox = document.querySelector('input');
        expect(checkbox?.checked).toEqual(true);
    });

    it('Switcher should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<Switcher disabled onClick={mockedOnClick}>Switcher</Switcher>);
        const input = document.querySelector('input');
        const checkbox = document.querySelector('label');

        if (!input || !checkbox) { return; }

        expect(input).toHaveAttribute('disabled');
        userEvent.click(checkbox);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('Switcher should be hidden', () => {
        render(<Switcher hidden>Switcher</Switcher>);
        expect(document.querySelector('input')).not.toBeInTheDocument();

        cleanup();

        render(<Switcher permissions={{ hidden: true }}>Switcher</Switcher>);
        expect(document.querySelector('input')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnClick = jest.fn(() => {
            checked = !checked;
        });
        render(<Switcher onChange={mockedOnClick}>Switcher</Switcher>);
        const checkbox = document.querySelector('label');

        if (!checkbox) { return; }

        userEvent.click(checkbox);
        expect(mockedOnClick).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
