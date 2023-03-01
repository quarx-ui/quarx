import { FC, ReactNode } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { testStyleParams } from '@core/test-utils';
import { Button, IconButton, ButtonStyleParams, ButtonProps, IconButtonProps } from '@core';
import { PaperClipIcon } from '../stories/assets';

const checkComponent = (Component: FC<ButtonProps & IconButtonProps>, children: ReactNode) => {
    testStyleParams<Partial<ButtonStyleParams>, ButtonProps & IconButtonProps>(
        Component,
        {
            size: 'medium',
            borderRadius: 'medium',
            color: 'brand',
            type: 'contained',
        },
        { children: 'Button' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger'],
        size: ['xSmall', 'small', 'medium', 'large'],
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
        type: ['contained', 'outlined', 'text'],
        loading: [true, false],
    });

    it('loading should be in the document', () => {
        render(<Component loading>{children}</Component>);
        const button = screen.getByRole('button');
        const loader = button.children[1];

        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('QxBaseButton-loader');
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

describe('Button', () => {
    it('text should be in the document', () => {
        render(<Button>Button</Button>);

        expect(screen.queryByText('Button')).toBeInTheDocument();
        expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
    });
    Button.displayName = 'Button';
    checkComponent(Button, 'Button');
});

describe('IconButton', () => {
    it('svg should be in the document', () => {
        render(<IconButton><PaperClipIcon /></IconButton>);
        const svgElement = document.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });
    IconButton.displayName = 'IconButton';
    checkComponent(IconButton, <PaperClipIcon />);
});
