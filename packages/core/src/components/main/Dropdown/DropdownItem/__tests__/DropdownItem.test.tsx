import { render } from '@testing-library/react';
import {
    DROPDOWN_ITEM_TYPE,
    DropdownItem,
    DropdownItemProps,
    DropdownItemStyleParams,
    PALETTE_COLORS,
    QX_SIZE,
} from '@core';
import { expectRootCn, testStyleParams } from '@quarx-ui/core/test-utils';

describe('DropdownItem', () => {
    it('className', () => {
        expectRootCn(DropdownItem, 'QxDropdownItem');
    });

    testStyleParams<Partial<DropdownItemStyleParams>, DropdownItemProps>(
        DropdownItem,
        {
            disableFocus: false,
            hover: false,
            color: PALETTE_COLORS.brand,
            size: QX_SIZE.medium,
        },
        { children: 'Title' },
    )({
        hover: [false],
        disableFocus: [false, true],
        color: Object.values(PALETTE_COLORS),
        size: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
    });

    it('Snapshot (default component)', () => {
        const { asFragment } = render(
            <DropdownItem>
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Snapshot (with description)', () => {
        const { asFragment } = render(
            <DropdownItem description="Small description">
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Checkbox type', () => {
        const { asFragment } = render(
            <DropdownItem state type={DROPDOWN_ITEM_TYPE.checkbox}>
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Default type', () => {
        const { asFragment } = render(
            <DropdownItem state type={DROPDOWN_ITEM_TYPE.default}>
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Left icon', () => {
        const { asFragment } = render(
            <DropdownItem leftItem={<div>left icon</div>}>
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Active icon', () => {
        const { asFragment } = render(
            <DropdownItem
                state
                activeIcon={<div>active icon</div>}
            >
                Title
            </DropdownItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
