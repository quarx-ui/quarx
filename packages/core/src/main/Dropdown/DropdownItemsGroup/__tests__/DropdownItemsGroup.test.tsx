import { testStyleParams } from '@core/test-utils';
import {
    DropdownItem,
    DropdownItemsGroup,
    DropdownItemsGroupProps,
    DropdownItemsGroupStyleParams,
    QX_SIZE,
} from '@core';
import { render } from '@testing-library/react';

const items = [
    <DropdownItem>
        SuperDelivery
    </DropdownItem>,
    <DropdownItem>
        MegaDelivery
    </DropdownItem>,
    <DropdownItem>
        TeraDelivery
    </DropdownItem>,
    <DropdownItem>
        UltraDelivery
    </DropdownItem>,
    <DropdownItem>
        Delivery+
    </DropdownItem>,
    <DropdownItem>
        DeliveryPro
    </DropdownItem>,
    <DropdownItem>
        DeliveryMax
    </DropdownItem>,
];

describe('DropdownItemsGroup', () => {
    testStyleParams<DropdownItemsGroupStyleParams, DropdownItemsGroupProps>(
        DropdownItemsGroup,
        {
            size: QX_SIZE.medium,
            limiter: Infinity,
            stackScrollable: false,
        },
        {
            title: 'Title',
            children: items,
        },
    )({
        size: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
        limiter: [50, 75, 100, Infinity],
        stackScrollable: [false],
    });

    it('Default snapshot', () => {
        const { asFragment } = render(
            <DropdownItemsGroup
                title="Title"
            >
                {items}
            </DropdownItemsGroup>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
