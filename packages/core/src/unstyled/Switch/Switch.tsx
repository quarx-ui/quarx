import { FC, ReactElement } from 'react';
import { CaseProps } from '@core/src';
import { SwitchProps } from './types';

export const Switch: FC<SwitchProps> = ({
    value,
    children,
}) => {
    const finder = (child: ReactElement<CaseProps>): boolean => (
        child.props.value === value
    );

    return children.find(finder) ?? null;
};
