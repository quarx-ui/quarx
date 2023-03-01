import { FC, Fragment } from 'react';
import { IfProps } from './types';

export const If: FC<IfProps> = ({
    children,
    condition,
}) => (
    <Fragment>
        {Boolean(condition) && children}
    </Fragment>
);
