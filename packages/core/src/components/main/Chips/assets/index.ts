import { FC, SVGProps } from 'react';
import { ChipsSize } from '@core';
import { ReactComponent as CheckMarkIconSmallSize } from './small/checkmarkIcon.svg';
import { ReactComponent as CheckMarkIconMediumSize } from './medium/checkmarkIcon.svg';
import { ReactComponent as ClosingIconSmallSize } from './small/closeIcon.svg';
import { ReactComponent as ClosingIconMediumSize } from './medium/closeIcon.svg';
import { ReactComponent as TriangleIconSmallSize } from './small/triangleIcon.svg';
import { ReactComponent as TriangleIconMediumSize } from './medium/triangleIcon.svg';

export const CheckMarkIcon: Record<ChipsSize, FC<SVGProps<SVGElement>>> = {
    small: CheckMarkIconSmallSize,
    medium: CheckMarkIconMediumSize,
};

export const ClosingIcon: Record<ChipsSize, FC<SVGProps<SVGElement>>> = {
    small: ClosingIconSmallSize,
    medium: ClosingIconMediumSize,
};

export const TriangleIcon: Record<ChipsSize, FC<SVGProps<SVGElement>>> = {
    small: TriangleIconSmallSize,
    medium: TriangleIconMediumSize,
};
