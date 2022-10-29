import React, { FC } from 'react';
import { CaseProps } from './types';

export const Case: FC<CaseProps> = ({
    children,
}) => (
    <>
        {children}
    </>
);
