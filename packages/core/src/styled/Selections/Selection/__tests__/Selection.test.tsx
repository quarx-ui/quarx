import { render, screen } from '@testing-library/react';
import React from 'react';
import {
    Checkbox,
    PALETTE_COLORS,
    QX_SIZE,
    Selection,
    SelectionProps,
    SelectionStyleParams,
} from '@core';
import userEvent from '@testing-library/user-event';
import { testStyleParams } from '@core/test-utils';
import { SELECTION_TYPE } from '../styles/constants';

describe('Selection', () => {
    testStyleParams<Partial<SelectionStyleParams>, SelectionProps>(
        Selection,
        {
            reverse: false,
            type: SELECTION_TYPE.text,
            size: QX_SIZE.medium,
            color: PALETTE_COLORS.brand,
            disabled: false,
            disableFocus: false,
            hover: false,
        },
        {
            children: <Checkbox />,
            title: 'Title',
            description: 'Description',
            helperText: 'HelperText',
        },
    )({
        type: ['text', 'contained'],
        size: ['small', 'medium', 'large'],
        color: Object.values(PALETTE_COLORS),
        reverse: [true, false],
        disabled: [true, false],
        disableFocus: [true, false],
        hover: [true, false],
    });

    test('text should be in the document', () => {
        render((
            <Selection
                title="Title"
                description="Description"
                helperText="HelperText"
            >
                <Checkbox />
            </Selection>
        ));
        expect(screen.queryByText('Title')).toBeInTheDocument();
        expect(screen.queryByText('Description')).toBeInTheDocument();
        expect(screen.queryByText('HelperText')).toBeInTheDocument();
    });

    test('text should be hidden', () => {
        render(<Selection><Checkbox /></Selection>);
        expect(screen.queryByText('Title')).not.toBeInTheDocument();
        expect(screen.queryByText('Description')).not.toBeInTheDocument();
        expect(screen.queryByText('HelperText')).not.toBeInTheDocument();
    });

    test('Adornment', async () => {
        render((
            <Selection
                leftAdornment="LEFT"
                rightAdornment="RIGHT"
            >
                <Checkbox />
            </Selection>
        ));
        expect(screen.queryByText('LEFT')).not.toBeInTheDocument();
        expect(screen.queryByText('RIGHT')).not.toBeInTheDocument();
    });

    let callTest = jest.fn();
    beforeEach(() => { callTest = jest.fn(); });

    const Template: React.FC<Partial<SelectionProps>> = ({
        ...props
    }) => (
        <Selection
            {...props}
        >
            <Checkbox
                onChange={callTest}
                disabled={props.disabled}
            />
        </Selection>
    );

    test('Handle clicked by contained type', async () => {
        render(<Template type="contained" />);
        const container = await screen.findByRole('button');
        const checkbox = await screen.findByRole('checkbox');

        userEvent.click(container);
        expect(callTest).toBeCalledTimes(1);
        userEvent.click(checkbox);
        expect(callTest).toBeCalledTimes(2);
    });

    test('Handle clicked by text type', async () => {
        render(<Template type="text" />);
        const container = await screen.findByRole('button');
        const checkbox = await screen.findByRole('checkbox');

        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);
        userEvent.click(checkbox);
        expect(callTest).toBeCalledTimes(1);
    });

    test('Handle clicked (disabled state)', async () => {
        const { rerender } = render(<Template type="contained" disabled />);
        let container = await screen.findByRole('button');
        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);

        rerender(<Template type="text" disabled />);
        container = await screen.findByRole('button');
        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);
    });

    test('disableHandlingChildProps', async () => {
        render((
            <Template
                type="contained"
                disableHandlingChildProps
                disabled
            />
        ));
        const container = await screen.findByRole('button');
        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);
    });
});
