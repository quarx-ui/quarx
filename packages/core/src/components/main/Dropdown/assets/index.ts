import { FC } from 'react';
import { DropdownSize, QX_SIZE } from '@core';
import { ReactComponent as SearchIconSmallSize } from './small/SearchIcon.svg';
import { ReactComponent as SearchIconMediumSize } from './medium/SearchIcon.svg';

export const SearchIcon: Record<DropdownSize, FC> = {
    [QX_SIZE.small]: SearchIconSmallSize,
    [QX_SIZE.medium]: SearchIconMediumSize,
    [QX_SIZE.large]: SearchIconMediumSize,
};
