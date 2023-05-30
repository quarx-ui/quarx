import { FC, Fragment } from 'react';
import {
    DropdownItem,
    DropdownItemProps,
    DropdownItemsGroup,
    DropdownProps,
    useBooleanState,
} from '@core';

export const DropdownItemTemplate: FC<DropdownItemProps> = ({
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
                <DropdownItemTemplate size={size} title="Delivery+" />
                <DropdownItemTemplate size={size} title="DeliveryPro" />
                <DropdownItemTemplate size={size} title="DeliveryMax" />
            </DropdownItemsGroup>
            <DropdownItemsGroup
                title="Выбор доставки"
                size={size}
                limiter={125}
            >
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                    title="SuperDelivery"
                />
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                    title="MegaDelivery"
                />
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                    title="TeraDelivery"
                />
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                    title="UltraDelivery"
                />
            </DropdownItemsGroup>
        </Fragment>
    )
);
