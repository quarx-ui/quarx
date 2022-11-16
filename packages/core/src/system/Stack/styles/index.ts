import { cssVar } from '@core/utils';
import { KeysFromUseStyles, makeStyles } from '@core/styles';
import { StackStyleParams } from './types';
import { STACK_ORDER } from './constants';
import { directionAndOrderToOffsetProperty } from './maps';
import { StackCSSVarKeys } from './vars';

export const useStyles = makeStyles((
    _,
    { order, direction, justifyContent, alignItems, spacing, inline }: StackStyleParams,
    { cssSpacing }: Record<StackCSSVarKeys, string>,
) => {
    const reverse = order === STACK_ORDER.reverse;

    const offsetProperty = directionAndOrderToOffsetProperty[direction][order];

    return ({
        root: {
            [cssSpacing]: spacing,
            display: inline ? 'inline-flex' : 'flex',
            flexDirection:
                reverse
                    ? `${direction}-reverse`
                    : direction,
            justifyContent,
            alignItems,
        },
        item: {
            '&:not(:last-child)': {
                [offsetProperty]: cssVar(cssSpacing),
            },
        },
        divider: {
            alignSelf: 'center',
            '&:not(:last-child)': {
                [offsetProperty]: cssVar(cssSpacing),
            },
        },
    });
});

export type StackStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
