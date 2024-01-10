import { ReactChild } from 'react';

type PrimitiveBreadcrumbChildrenType = number | string;

export const isPrimitiveChildren = (
    value: ReactChild | PrimitiveBreadcrumbChildrenType,
): value is PrimitiveBreadcrumbChildrenType => (
    typeof value === 'string' || typeof value === 'number'
);
