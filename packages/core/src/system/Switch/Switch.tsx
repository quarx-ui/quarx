import { FC, ReactElement } from 'react';
import { cloneElementWithCss } from '@core';
import { CaseProps } from './Case';
import { SwitchProps } from './types';

export const Switch: FC<SwitchProps> = ({
    value,
    children,
    ...props
}) => {
    const finder = (child: ReactElement<CaseProps>): boolean => (
        child.props.value === value
    );

    return cloneElementWithCss(children.find(finder) ?? null, props);
};
