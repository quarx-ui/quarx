import React, { FC } from 'react';
import { IfProps } from './types';

export const If: FC<IfProps> = ({
    children,
    condition,
}) => (
    <>
        {Boolean(condition) && children}
    </>
);
