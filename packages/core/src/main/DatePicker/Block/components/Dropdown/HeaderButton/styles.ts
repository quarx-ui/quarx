import { KeysFromUseStyles, makeStyles } from '@core';
import { DROPDOWN_TYPOGRAPHY } from '../../../utils';
import { DropdownButtonStyleParam } from './types';

export const useStyles = makeStyles(({ palette, borderRadii },
    { isOpen, disable, size, borderRadius }: Required<DropdownButtonStyleParam>) => ({
    dropdownButton: [{
        display: 'flex',
        alignItems: 'center',
        padding: '4px 11px 4px 10px',
        border: '1px solid transparent',
        margin: 0,
        outline: 'none',
        marginRight: '4px',
        transitionProperty: 'border-width, color, background-color',
        transition: '0.4s',
        borderRadius: borderRadii[borderRadius],
        color: palette.text.main,
        ...DROPDOWN_TYPOGRAPHY[size],
        '&:hover': {
            color: palette.text.main,
            background: palette.colors.brand.alpha[8],
            cursor: 'pointer',
            '& path': {
                fill: palette.text.main,
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
        fill: palette.text.secondary,
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
        '& path': {
            fill: palette.text.main,
            fillOpacity: 1,
            transitionProperty: 'fill, fill-opacity',
            transition: '0.4s',
        },
    }, isOpen && {
        transform: 'rotate(180deg)',
        '& path': {
            fill: palette.colors.brand.default,
            fillOpacity: 1,
        },
    }],
}), { name: 'HeaderDropdown' });

export type DropdownButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
