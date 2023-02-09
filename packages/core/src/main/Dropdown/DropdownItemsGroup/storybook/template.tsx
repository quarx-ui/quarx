import { FC } from 'react';
import {
    DropdownItem,
    DropdownItemProps,
    DropdownItemsGroupSize,
    useBooleanState,
} from '@core';

const DropdownItemTemplate: FC<DropdownItemProps> = ({
    size,
    title,
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
            title={title}
            {...props}
        />
    );
};

export const createTemplateChildren = (size: DropdownItemsGroupSize) => [
    <DropdownItemTemplate size={size} title="SuperDelivery" />,
    <DropdownItemTemplate size={size} title="MegaDelivery" />,
    <DropdownItemTemplate size={size} title="TeraDelivery" />,
    <DropdownItemTemplate size={size} title="UltraDelivery" />,
    <DropdownItemTemplate size={size} title="Delivery+" />,
    <DropdownItemTemplate size={size} title="DeliveryPro" />,
    <DropdownItemTemplate size={size} title="DeliveryMax" />,
];
