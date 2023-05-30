import { FC, Fragment } from 'react';
import {
    DropdownItem as QxDropdownItem,
    DropdownItemProps,
    DropdownItemsGroup,
    DropdownProps,
    useBooleanState,
} from '@core';

export const DropdownItem: FC<DropdownItemProps> = ({
    size,
    title,
    ...props
}) => {
    const {
        state,
        setOppositeState,
    } = useBooleanState(false);
    return (
        <QxDropdownItem
            size={size}
            state={state}
            title={title ?? 'SuperDelivery'}
            onChange={setOppositeState}
            {...props}
        />
    );
};

export const createDropdownChildren = ({ size, ...props }: DropdownProps) => (
    props.children ?? (
        <Fragment>
            <DropdownItemsGroup>
                <DropdownItem size={size} title="Delivery+" />
                <DropdownItem size={size} title="DeliveryPro" />
                <DropdownItem size={size} title="DeliveryMax" />
            </DropdownItemsGroup>
            <DropdownItemsGroup
                title="Выбор доставки"
                size={size}
                limiter={125}
            >
                <DropdownItem
                    type="checkbox"
                    size={size}
                    title="SuperDelivery"
                />
                <DropdownItem
                    type="checkbox"
                    size={size}
                    title="MegaDelivery"
                />
                <DropdownItem
                    type="checkbox"
                    size={size}
                    title="TeraDelivery"
                />
                <DropdownItem
                    type="checkbox"
                    size={size}
                    title="UltraDelivery"
                />
            </DropdownItemsGroup>
        </Fragment>
    )
);
