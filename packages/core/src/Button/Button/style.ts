import { KeysFromUseStyles, makeStyles } from '@core/emotion-styles';
import { CSSObject } from '@emotion/react';
import { BaseButtonStyleParams } from '@core/src/Button/BaseButton/types';
import { paramsToCss } from '@core/utils/paramsToCss';

export const useStyles = makeStyles((
    theme,
    { size, loading }: Required<Pick<BaseButtonStyleParams, 'size' | 'loading'>>,
) => {
    const flexCenter: CSSObject = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const hidden: CSSObject = {
        visibility: 'hidden',
    };

    return ({
        root: [
            flexCenter,
            paramsToCss(size)({
                xSmall: {
                    padding: '4px 10px',
                },
                small: {
                    padding: '6px 14px',
                },
                medium: {
                    padding: '12px 18px',
                },
                large: {
                    padding: '14px 22px',
                },
            }),
        ],
        icon: [
            flexCenter,
            {
                minWidth: 24,
                minHeight: 24,
                overflow: 'hidden',
                boxSizing: 'border-box',
            },
            size === 'xSmall' && {
                minWidth: 16,
                minHeight: 16,
            },
            loading && hidden,
        ],
        leftIcon: paramsToCss(size)({
            xSmall: {
                marginLeft: -4,
                marginRight: 6,
            },
            small: {
                marginLeft: -4,
                marginRight: 8,
            },
            medium: {
                marginLeft: -8,
                marginRight: 8,
            },
            large: {
                marginLeft: -8,
                marginRight: 12,
            },
        }),
        rightIcon: paramsToCss(size)({
            xSmall: {
                marginRight: -4,
                marginLeft: 6,
            },
            small: {
                marginRight: -4,
                marginLeft: 8,
            },
            medium: {
                marginRight: -8,
                marginLeft: 8,
            },
            large: {
                marginRight: -8,
                marginLeft: 12,
            },
        }),

        content: [
            flexCenter,
            loading && hidden,
        ],

        loader: {
            position: 'absolute',
        },
    });
}, { name: 'SxButton' });

export type ButtonStyleKeys = KeysFromUseStyles<typeof useStyles>
