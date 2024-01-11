import { render, screen } from '@testing-library/react';
import {
    PALETTE_COLORS,
    QX_SIZE,
    SELECTION_GROUP_TYPE,
    SelectionGroup,
    SelectionGroupProps,
    SelectionGroupStyleParams,
    SelectionList,
} from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';

describe('SelectionGroup', () => {
    testStyleParams<Partial<SelectionGroupStyleParams>, SelectionGroupProps>(
        SelectionGroup,
        {
            type: SELECTION_GROUP_TYPE.text,
            size: QX_SIZE.medium,
            color: PALETTE_COLORS.brand,
        },
        {
            children: (
                <SelectionList
                    nodes={[]}
                    onUpdate={() => undefined}
                />
            ),
        },
    )({
        color: Object.values(PALETTE_COLORS),
        size: ['small', 'medium', 'large'],
        type: Object.values(SELECTION_GROUP_TYPE),
    });

    test('text/children should be in the document', () => {
        render((
            <SelectionGroup
                title="Title"
                description="Description"
                helperText="HelperText"
            >
                <span>SelectionGroup</span>
            </SelectionGroup>
        ));
        expect(screen.queryByText('Title')).toBeInTheDocument();
        expect(screen.queryByText('Description')).toBeInTheDocument();
        expect(screen.queryByText('HelperText')).toBeInTheDocument();
        expect(screen.queryByText('SelectionGroup')).toBeInTheDocument();
    });

    test('text should be hidden', () => {
        render((
            <SelectionGroup>
                <span>SelectionGroup</span>
            </SelectionGroup>
        ));
        expect(screen.queryByText('Title')).not.toBeInTheDocument();
        expect(screen.queryByText('Description')).not.toBeInTheDocument();
        expect(screen.queryByText('HelperText')).not.toBeInTheDocument();
    });
});
