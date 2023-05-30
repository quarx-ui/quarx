import { FC, Fragment } from 'react';
import { IfProps } from './types';
import { cloneElementWithCss } from '../../../utils';

export const If: FC<IfProps> = ({
    children,
    condition,
    ...props
}) => (
    <Fragment>
        {Boolean(condition) && cloneElementWithCss(children, props as Record<string, unknown>)}
    </Fragment>
);
