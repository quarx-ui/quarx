import { typography, makeStyles } from '@core';
import { CSSObject } from '@emotion/react';
import { paramsToCss } from '@core/utils/paramsToCss';
import { StyledProps } from './types';

export const useStyles = makeStyles((
    theme,
    { size, direction, spaceBetween, center, optionTitle }: Omit<StyledProps, 'children'>,
) => {
    const isVertical = direction === 'vertical';
    const verticalContainer: CSSObject = {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    };

    return {
        variantsContainer: [
            {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
            },
            isVertical && verticalContainer,
        ],
        variantsMapContainer: [
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: center ? 'center' : 'space-between',
            },
            isVertical && verticalContainer,
        ],
        verticalMapContainer: [
            isVertical && {
                display: 'flex',
                justifyContent: spaceBetween ? 'space-between' : 'space-evenly',
            },
        ],
        title: [
            { margin: '0 0 15px' },

            size && paramsToCss(size)({
                primary: typography.Text.XL.Semibold,
                secondary: typography.Text.L.Medium,
            }),
        ],
        variant: [
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingRight: 10,
                paddingBottom: 20,
                margin: '0 20px 15px',
                ...typography.Text.XL.Semibold,
            },
            !optionTitle && {
                marginBottom: 0,
                paddingBottom: 0,
            },
        ],
        titleOfMap: [
            { marginRight: 30 },
            typography.Text.XL.Semibold,

            isVertical && {
                marginBottom: 30,
                marginRight: 0,
            },
        ],
    };
}, { name: 'Variants' });
