import { KeysFromUseStyles, makeStyles, ButtonStyleParams } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { CSSObject } from '@emotion/react';

export const useStyles = makeStyles((
    theme,
    { size, loading }: Required<ButtonStyleParams>,
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
                    height: 32,
                    width: 32,
                    padding: 0,
                },
                small: {
                    height: 40,
                    width: 40,
                    padding: 0,
                },
                medium: {
                    height: 52,
                    width: 52,
                    padding: 0,
                },
                large: {
                    height: 60,
                    width: 60,
                    padding: 0,
                },
            }),
        ],
        icon: [
            flexCenter,
            loading && hidden,
        ],
        loader: {
            position: 'absolute',
        },
    });
}, { name: 'SxIconButton' });

export type IconButtonStyleKeys = KeysFromUseStyles<typeof useStyles>;
