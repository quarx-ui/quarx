import { FC, Fragment } from 'react';
import { CaseProps } from './types';

export const Case: FC<CaseProps> = ({
    children,
}) => (
    <Fragment>
        {children}
    </Fragment>
);
