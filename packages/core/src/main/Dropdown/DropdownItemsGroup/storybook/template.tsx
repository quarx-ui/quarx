import { FC } from 'react';
import {
    DropdownItem,
    DropdownItemProps,
    DropdownItemsGroupSize,
    useBooleanState,
} from '@core';

const DropdownItemTemplate: FC<DropdownItemProps> = ({
    size,
    ...props
}) => {
    const {
        state,
        setOppositeState,
    } = useBooleanState(false);
    return (
        <DropdownItem
            size={size}
            state={state}
            onChange={setOppositeState}
            {...props}
        >
            SuperDelivery
        </DropdownItem>
    );
};

export const createTemplateChildren = (size: DropdownItemsGroupSize) => [
    <DropdownItemTemplate size={size}>
        SuperDelivery
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        MegaDelivery
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        TeraDelivery
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        UltraDelivery
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        Delivery+
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        DeliveryPro
    </DropdownItemTemplate>,
    <DropdownItemTemplate size={size}>
        DeliveryMax
    </DropdownItemTemplate>,
];
