import { cleanup, render, screen } from '@testing-library/react';
import { CheckboxStyleParams } from '@core/src/StyledComponents/Checkbox/types';
import React, { FC } from 'react';
import { PALETTE_COLORS, Checkbox } from '@core';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '@core/test-utils';

const checkPropsInClasses = (props: Partial<CheckboxStyleParams>) => {
    const {
        size = 'medium',
        color = 'brand',
        disabled = false,
        borderRadius = 'smooth',
        indeterminate = false,
    } = props;
    const checkbox = document.querySelector('.SxCheckbox');
    if (!checkbox) { return; }
    const propsWithDefault = { size, disabled, color, borderRadius, indeterminate };

    expectPropsMapInClasses(checkbox as HTMLElement)(propsWithDefault);
};

const checkProps = (Component: FC) => (checkedProps?: Partial<CheckboxStyleParams>) => () => {
    const { asFragment } = render(<Component {...checkedProps}>{Component.displayName}</Component>);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

describe('Checkbox snapshots', () => {
    Checkbox.displayName = 'Checkbox';
    const checkRadioProps = checkProps(Checkbox);

    it('default', checkRadioProps());

    it('small', checkRadioProps({ size: 'small' }));
    it('medium', checkRadioProps({ size: 'medium' }));
    it('large', checkRadioProps({ size: 'large' }));

    it('square', checkRadioProps({ borderRadius: 'square' }));
    it('smooth', checkRadioProps({ borderRadius: 'smooth' }));

    it('indeterminate', checkRadioProps({ indeterminate: true }));
    it('checked', checkRadioProps({ checked: true }));
    it('disabled', checkRadioProps({ disabled: true }));

    // colors
    Object.values(PALETTE_COLORS).forEach((color) => (
        it(`color_${color}`, checkRadioProps({ color }))
    ));
});

describe('Checkbox', () => {
    it('text should be in the document', () => {
        render(<Checkbox>Checkbox</Checkbox>);

        expect(screen.queryByText('Checkbox')).toBeInTheDocument();
        const checkbox = document.querySelector('input');
        expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('Checkbox should be checked', () => {
        render(<Checkbox checked>Checkbox</Checkbox>);

        const checkbox = document.querySelector('input');
        expect(checkbox?.checked).toEqual(true);
    });

    it('Checkbox should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<Checkbox disabled onClick={mockedOnClick}>Checkbox</Checkbox>);
        const input = document.querySelector('input');
        const checkbox = document.querySelector('label');

        if (!checkbox || !input) { return; }

        expect(input).toHaveAttribute('disabled');
        userEvent.click(checkbox);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('Checkbox should be hidden', () => {
        render(<Checkbox hidden>Checkbox</Checkbox>);
        expect(document.querySelector('input')).not.toBeInTheDocument();

        cleanup();

        render(<Checkbox permissions={{ hidden: true }}>Checkbox</Checkbox>);
        expect(document.querySelector('input')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        let checked = false;
        const mockedOnChange = jest.fn(() => {
            checked = !checked;
        });
        render(<Checkbox onChange={mockedOnChange}>Checkbox</Checkbox>);
        const checkbox = document.querySelector('label');

        if (!checkbox) { return; }

        userEvent.click(checkbox);
        expect(mockedOnChange).toBeCalledTimes(1);
        expect(checked).toEqual(true);
    });
});
