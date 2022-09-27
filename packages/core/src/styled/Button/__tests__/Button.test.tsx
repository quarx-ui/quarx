import React, { FC, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '@core/test-utils';
import { Button, IconButton, BaseButtonProps, ButtonStyleParams } from '..';
import { PaperClipIcon } from '../stories/assets';

const checkPropsInClasses = (props: Partial<ButtonStyleParams>) => {
    const {
        size = 'medium',
        borderRadius = 'medium',
        color = 'brand',
        type = 'contained',
        loading = false,
        disabled = false,
    } = props;
    const buttonElement = screen.getByRole('button');
    const propsWithDefault = { size, borderRadius, color, type, loading, disabled };

    expectPropsMapInClasses(buttonElement)(propsWithDefault);
};

const checkProps = (Component: FC, renderedProps?: BaseButtonProps) => (checkedProps?: Partial<ButtonStyleParams>) => () => {
    const { asFragment } = render(<Component {...renderedProps} {...checkedProps} />);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

const checkSnapshotsOf = (Component: FC, children: ReactNode) => {
    const checkButtonProps = checkProps(Component, { children });

    it('default', checkButtonProps());

    it('secondary', checkButtonProps({ color: 'secondary' }));
    it('success', checkButtonProps({ color: 'success' }));
    it('info', checkButtonProps({ color: 'info' }));
    it('warning', checkButtonProps({ color: 'warning' }));
    it('danger', checkButtonProps({ color: 'danger' }));

    it('size-xSmall', checkButtonProps({ size: 'xSmall' }));
    it('size-small', checkButtonProps({ size: 'small' }));
    it('size-large', checkButtonProps({ size: 'large' }));

    it('borderRadius-xSmall', checkButtonProps({ borderRadius: 'xSmall' }));
    it('borderRadius-small', checkButtonProps({ borderRadius: 'small' }));
    it('borderRadius-large', checkButtonProps({ borderRadius: 'large' }));
    it('borderRadius-xLarge', checkButtonProps({ borderRadius: 'xLarge' }));

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
        expect(loader).toHaveClass(`Qx${Component.displayName}-loader`);
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
