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
    <DropdownItem key={1} title="SuperDelivery" />,
    <DropdownItem key={2} title="MegaDelivery" />,
    <DropdownItem key={3} title="TeraDelivery" />,
    <DropdownItem key={4} title="UltraDelivery" />,
    <DropdownItem key={5} title="Delivery+" />,
    <DropdownItem key={6} title="DeliveryPro" />,
    <DropdownItem key={7} title="DeliveryMax" />,
];

describe('DropdownItemsGroup', () => {
    testStyleParams<Partial<DropdownItemsGroupStyleParams>, DropdownItemsGroupProps>(
        DropdownItemsGroup,
        {
            size: QX_SIZE.medium,
            limiter: Infinity,
        },
        {
            title: 'Title',
            children: items,
        },
    )({
        size: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
        limiter: [50, 75, 100, Infinity],
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
