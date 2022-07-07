import React, { FC, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '@core/test-utils';
import { Button, IconButton, BaseButtonProps, ButtonStyleParams } from '..';
import { PaperClipIcon } from '../assets';

const checkPropsInClasses = (props: ButtonStyleParams) => {
    const {
        size = 'medium',
        borderRadius = 'smooth',
        color = 'brand',
        type = 'contained',
        loading = false,
        disabled = false,
    } = props;
    const buttonElement = screen.getByRole('button');
    const propsWithDefault = { size, borderRadius, color, type, loading, disabled };

    expectPropsMapInClasses(buttonElement)(propsWithDefault);
};

const checkProps = (Component: FC, renderedProps?: BaseButtonProps) => (checkedProps?: ButtonStyleParams) => () => {
    const { asFragment } = render(<Component {...renderedProps} {...checkedProps} />);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

const checkSnapshotsOf = (Component: FC, children: ReactNode) => {
    const checkButtonProps = checkProps(Component, { children });

    it('default', checkButtonProps());

    it('secondary', checkButtonProps({ color: 'secondary' }));

    it('xSmall', checkButtonProps({ size: 'xSmall' }));
    it('small', checkButtonProps({ size: 'small' }));
    it('large', checkButtonProps({ size: 'large' }));

    it('square', checkButtonProps({ borderRadius: 'square' }));
    it('rounded', checkButtonProps({ borderRadius: 'rounded' }));

    it('outlined', checkButtonProps({ type: 'outlined' }));
    it('text', checkButtonProps({ type: 'text' }));

    it('loading', checkButtonProps({ loading: true }));
    it('disabled', checkButtonProps({ disabled: true }));
};

const checkComponent = (Component: FC<BaseButtonProps>, children: ReactNode) => {
    it('loading should be in the document', () => {
        render(<Component loading>{children}</Component>);
        const button = screen.getByRole('button');
        const loader = button.children[1];

        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass(`Sx${Component.displayName}-loader`);
        expect(button).toHaveAttribute('disabled');
    });

    it('button should have attribute disabled', () => {
        const mockedOnClick = jest.fn();
        render(<Component disabled onClick={mockedOnClick}>{children}</Component>);
        const button = screen.getByRole('button');

        expect(button).toHaveAttribute('disabled');
        userEvent.click(button);
        expect(mockedOnClick).not.toBeCalled();
    });

    it('button should be hidden', () => {
        render(<Component hidden>{children}</Component>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();

        cleanup();

        render(<Component permissions={{ hidden: true }}>{children}</Component>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('onClick should be called', () => {
        const mockedOnClick = jest.fn();
        render(<Component onClick={mockedOnClick}>{children}</Component>);
        const button = screen.getByRole('button');

        userEvent.click(button);
        expect(mockedOnClick).toBeCalledTimes(1);
    });
};

describe('Button snapshots', () => {
    checkSnapshotsOf(Button, 'Button');
});

describe('Button', () => {
    it('text should be in the document', () => {
        render(<Button>Button</Button>);

        expect(screen.queryByText('Button')).toBeInTheDocument();
        expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
    });
    Button.displayName = 'Button';
    checkComponent(Button, 'Button');
});

describe('IconButton snapshots', () => {
    IconButton.displayName = 'IconButton';
    checkSnapshotsOf(IconButton, <PaperClipIcon />);
});

describe('IconButton', () => {
    it('svg should be in the document', () => {
        render(<IconButton><PaperClipIcon /></IconButton>);
        const svgElement = document.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });
    checkComponent(IconButton, <PaperClipIcon />);
});
