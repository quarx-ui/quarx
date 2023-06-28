import { FC } from 'react';
import {
    DropdownItem as QxDropdownItem,
    DropdownItemProps,
    DropdownItemsGroupSize,
    useBooleanState,
} from '@core';

const DropdownItem: FC<DropdownItemProps> = ({
    size,
    title,
    ...props
}) => {
    const [state, { toggleState }] = useBooleanState(false);

    return (
        <QxDropdownItem
            size={size}
            state={state}
            onChange={toggleState}
            title={title}
            {...props}
        />
    );
};

export const createTemplateChildren = (size: DropdownItemsGroupSize) => [
    <DropdownItem size={size} title="SuperDelivery" />,
    <DropdownItem size={size} title="MegaDelivery" />,
    <DropdownItem size={size} title="TeraDelivery" />,
    <DropdownItem size={size} title="UltraDelivery" />,
    <DropdownItem size={size} title="Delivery+" />,
    <DropdownItem size={size} title="DeliveryPro" />,
    <DropdownItem size={size} title="DeliveryMax" />,
];
