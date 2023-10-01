import { makeStyles, TYPOGRAPHY_WEIGHT } from '@core';
import { CSSObject } from '@emotion/react';
import { paramsToCss } from '@core/utils/paramsToCss';
import { DisplayVariantsStyledProps } from './types';

export const useStyles = makeStyles((
    { typography },
    {
        size,
        direction = 'horizontal',
        variantAlign,
        containerAlign,
        containerJustify,
        optionTitle,
    }: Omit<DisplayVariantsStyledProps, 'children'>,
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
                alignItems: containerAlign,
                justifyContent: containerJustify,
                maxWidth: '100%',
            },
            paramsToCss(direction)({
                horizontal: {
                    flexWrap: 'wrap',
                    '& > *': {
                        marginBottom: 12,
                        marginLeft: 8,
                        marginRight: 8,
                    },
                },
                vertical: {
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    '& > *:not(:last-child)': {
                        marginBottom: 12,
                    },
                },
            }),
        ],
        variantsMapContainer: [
            {
                display: 'flex',
                alignItems: containerAlign,
                justifyContent: containerJustify,
            },
            isVertical && verticalContainer,
        ],
        verticalMapContainer: [
            isVertical && {
                display: 'flex',
                alignItems: containerAlign,
                justifyContent: containerJustify,
            },
        ],
        title: [
            { margin: '8px 0 12px' },

            size && paramsToCss(size)({
                primary: {
                    ...typography.base.text.xLarge,
                    fontWeight: TYPOGRAPHY_WEIGHT.semibold,
                },
                secondary: {
                    ...typography.base.text.large,
                    fontWeight: TYPOGRAPHY_WEIGHT.medium,
                },
            }),
        ],
        variant: [
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: variantAlign,
                maxWidth: '100%',
                ...typography.base.text.xLarge,
                fontWeight: TYPOGRAPHY_WEIGHT.semibold,
            },
            !optionTitle && {
                marginBottom: 0,
                paddingBottom: 0,
            },
        ],
        titleOfMap: [
            { marginRight: 30 },
            {
                ...typography.base.text.xLarge,
                fontWeight: TYPOGRAPHY_WEIGHT.semibold,
            },
            isVertical && {
                marginBottom: 30,
                marginRight: 0,
            },
        ],
    };
}, { name: 'Variants' });
