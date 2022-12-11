import { render } from '@testing-library/react';
import { FC } from 'react';
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
        const { getByText } = render((
            <Selection
                title="Title"
                description="Description"
                helperText="HelperText"
            >
                <Checkbox />
            </Selection>
        ));
        expect(getByText('Title')).toBeInTheDocument();
        expect(getByText('Description')).toBeInTheDocument();
        expect(getByText('HelperText')).toBeInTheDocument();
    });

    test('text should be hidden', () => {
        const { queryByText } = render(<Selection><Checkbox /></Selection>);
        expect(queryByText('Title')).not.toBeInTheDocument();
        expect(queryByText('Description')).not.toBeInTheDocument();
        expect(queryByText('HelperText')).not.toBeInTheDocument();
    });

    test('Adornment', async () => {
        const { queryByText } = render((
            <Selection
                leftAdornment="LEFT"
                rightAdornment="RIGHT"
            >
                <Checkbox />
            </Selection>
        ));
        expect(queryByText('LEFT')).not.toBeInTheDocument();
        expect(queryByText('RIGHT')).not.toBeInTheDocument();
    });

    let callTest = jest.fn();
    beforeEach(() => { callTest = jest.fn(); });

    const TemplateTitle = 'Template';
    const Template: FC<Partial<SelectionProps>> = ({
        ...props
    }) => (
        <Selection
            {...props}
            title={TemplateTitle}
        >
            <Checkbox onChange={callTest} />
        </Selection>
    );

    test('Handle clicked by contained type', async () => {
        const { getByText, getByRole } = render(<Template type="contained" />);
        const container = getByText(TemplateTitle);
        const checkbox = getByRole('checkbox');

        userEvent.click(container);
        expect(callTest).toBeCalledTimes(1);
        userEvent.click(checkbox);
        expect(callTest).toBeCalledTimes(2);
    });

    test('Handle clicked by text type', async () => {
        const { getByText, getByRole } = render(<Template type="text" />);
        const container = getByText(TemplateTitle);
        const checkbox = getByRole('checkbox');

        userEvent.click(container);
        expect(callTest).toBeCalledTimes(1);
        userEvent.click(checkbox);
        expect(callTest).toBeCalledTimes(2);
    });

    test('Handle clicked (disabled state)', async () => {
        const { rerender, getByText } = render(<Template type="contained" disabled />);
        let container = getByText(TemplateTitle);
        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);

        rerender(<Template type="text" disabled />);
        container = getByText(TemplateTitle);
        userEvent.click(container);
        expect(callTest).toBeCalledTimes(0);
    });
});
