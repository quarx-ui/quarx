import { FC } from 'react';
import styled from '@emotion/styled';
import {
    Checkbox,
    RadioButton,
    Values,
    valuesAsKeysFromArray,
    Switcher,
} from '@core';
import { SelectionControllerProps, SelectionProps } from '../types';

export const Padding = styled.div`
    margin: 0 6px;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const CONTROLLER_OPTIONS = valuesAsKeysFromArray([
    'Checkbox',
    'RadioButton',
    'Switcher',
]);

interface GetController {
    variant: Values<typeof CONTROLLER_OPTIONS>;

    checked: boolean;

    onChange(): void;
}

type StoryController =
    & FC<SelectionControllerProps>
    & { checked?: boolean }
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    & any

export const getController = ({
    variant,
    checked,
    onChange,
}: GetController): StoryController => {
    switch (variant) {
        case 'RadioButton':
            return (
                <RadioButton
                    checked={checked}
                    onChange={onChange}
                />
            );
        case 'Switcher':
            return (
                <Switcher
                    checked={checked}
                    onChange={onChange}
                />
            );
        case 'Checkbox':
        default:
            return (
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    borderRadius="max"
                />
            );
    }
};

export interface SelectionTemplateProps extends Omit<Partial<SelectionProps>, 'children'> {
    children: Values<typeof CONTROLLER_OPTIONS>;
}
