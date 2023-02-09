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

export const createDropdownChildren = ({ size, ...props }: DropdownProps) => (
    props.children ?? (
        <Fragment>
            <DropdownItemsGroup>
                <DropdownItemTemplate size={size}>
                    Delivery+
                </DropdownItemTemplate>
                <DropdownItemTemplate size={size}>
                    DeliveryPro
                </DropdownItemTemplate>
                <DropdownItemTemplate size={size}>
                    DeliveryMax
                </DropdownItemTemplate>
            </DropdownItemsGroup>
            <DropdownItemsGroup
                title="Выбор доставки"
                size={size}
                limiter={75}
            >
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                >
                    SuperDelivery
                </DropdownItemTemplate>
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                >
                    MegaDelivery
                </DropdownItemTemplate>
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                >
                    TeraDelivery
                </DropdownItemTemplate>
                <DropdownItemTemplate
                    type="checkbox"
                    size={size}
                >
                    UltraDelivery
                </DropdownItemTemplate>
            </DropdownItemsGroup>
        </Fragment>
    )
);
