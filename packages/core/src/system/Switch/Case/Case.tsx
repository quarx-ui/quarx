import { FC, Fragment } from 'react';
import { cloneElementWithCss } from '@core';
import { CaseProps } from './types';

export const Case: FC<CaseProps> = ({
    children,
    ...props
}) => (
    <Fragment>
        {cloneElementWithCss(children, props as Record<string, unknown>)}
    </Fragment>
);
