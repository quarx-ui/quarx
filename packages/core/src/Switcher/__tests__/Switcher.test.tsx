import { cleanup, render, screen } from '@testing-library/react';
import { SwitcherStyleParams } from '@core/src/Switcher/types';
import React, { FC } from 'react';
import { Switcher, SWITCHER_POSITION } from '@core';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '@core/test-utils';

const checkPropsInClasses = (props: Partial<SwitcherStyleParams>) => {
    const {
        size = 'medium',
        hasError = false,
        disabled = false,
        position = SWITCHER_POSITION.left,
    } = props;
    const checkbox = document.querySelector('label');
    if (!checkbox) { return; }
    const propsWithDefault = { size, disabled, hasError, position };

    expectPropsMapInClasses(checkbox as HTMLElement)(propsWithDefault);
};

const checkProps = (Component: FC) => (checkedProps?: Partial<SwitcherStyleParams>) => () => {
    const { asFragment } = render(<Component {...checkedProps}>{Component.displayName}</Component>);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

describe('Switcher snapshots', () => {
    Switcher.displayName = 'Switcher';
    const checkSwitcherProps = checkProps(Switcher);

    it('default', checkSwitcherProps());

    it('small', checkSwitcherProps({ size: 'small' }));
    it('medium', checkSwitcherProps({ size: 'medium' }));
    it('large', checkSwitcherProps({ size: 'large' }));

    it('right', checkSwitcherProps({ position: SWITCHER_POSITION.right }));
    it('checked', checkSwitcherProps({ checked: true }));
    it('disabled', checkSwitcherProps({ disabled: true }));
    it('hasError', checkSwitcherProps({ hasError: true }));
});

describe('Switcher', () => {
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
