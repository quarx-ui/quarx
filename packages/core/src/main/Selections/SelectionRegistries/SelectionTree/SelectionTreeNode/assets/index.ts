import { PickQxSize, QX_SIZE } from '@core';
import { FC, SVGProps } from 'react';
import { ReactComponent as ArrowIconMediumSize } from './medium/arrow.svg';
import { ReactComponent as ArrowIconSmallSize } from './small/arrow.svg';

const ArrowIcon: Record<PickQxSize<'small' | 'medium' | 'large'>, FC<SVGProps<'svg'>>> = {
    [QX_SIZE.small]: ArrowIconSmallSize,
    [QX_SIZE.medium]: ArrowIconMediumSize,
    [QX_SIZE.large]: ArrowIconMediumSize,
};

export { ArrowIcon };
