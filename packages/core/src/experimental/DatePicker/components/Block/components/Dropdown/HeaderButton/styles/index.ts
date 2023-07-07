import { makeStyles } from '@core';
import { getHeaderTypography } from '../../../../utils';
import { ARROW_SIZES } from '../constants';
import { DropdownButtonStyleParam } from './types';

export const useStyles = makeStyles(({ palette, borderRadii, typography, transitions },
    { isOpen, disable, size, borderRadius }: Required<DropdownButtonStyleParam>) => ({
    root: [{
        display: 'flex',
        alignItems: 'center',
        padding: '4px 11px 4px 10px',
        border: '1px solid transparent',
        margin: 0,
        outline: 'none',
        marginRight: '4px',
        transition: transitions.create(['border-width', ' color', 'background-color'], {
            duration: transitions.duration.complex,
        }),
        borderRadius: borderRadii[borderRadius],
        color: palette.text.main,
        ...getHeaderTypography(typography)[size],
        '&:hover': {
            color: palette.text.main,
            background: palette.colors.brand.alpha[8],
            cursor: 'pointer',
            '& path': {
                color: palette.text.main,
                transitionProperty: 'fill',
                transition: '0.4s',
            },
        },
        '&:focus': {
            border: `3px solid ${palette.border.focus}`,
        },
    }, isOpen && {
        backgroundColor: palette.colors.brand.alpha[8],
        transitionProperty: 'color',
        transition: '0.4s',
        color: palette.colors.brand.default,
    }, disable && {
        color: palette.text.secondary,
        '&:hover': {
            background: 'transparent',
            color: palette.text.secondary,
            cursor: 'auto',
        },
    }],
    dropdownArrow: [{
        marginLeft: '5px',
        position: 'relative',
        transitionProperty: 'transform, bottom, fill',
        transition: '0.4s',
        ...ARROW_SIZES[size],
        '& path': {
            color: palette.text.main,
            fillOpacity: 1,
            transitionProperty: 'fill, fill-opacity',
            transition: '0.4s',
        },
    }, isOpen && {
        transform: 'rotate(180deg)',
        '& path': {
            color: palette.colors.brand.default,
            fillOpacity: 1,
        },
    }],
}));
