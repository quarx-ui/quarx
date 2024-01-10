import { KeysFromUseStyles, makeStyles, withUnit } from '@core/styles';
import { StackStyleParams } from './types';
import { STACK_ORDER } from './constants';
import { directionAndOrderToOffsetProperty } from './maps';

export const useStyles = makeStyles((
    _,
    { order, direction, justifyContent, alignItems, spacing, inline }: StackStyleParams,
) => {
    const reverse = order === STACK_ORDER.reverse;

    const offsetProperty = directionAndOrderToOffsetProperty[direction][order];

    return ({
        root: {
            display: inline ? 'inline-flex' : 'flex',
            flexDirection:
                reverse
                    ? `${direction}-reverse`
                    : direction,
            justifyContent,
            alignItems,

            '& > :not(:last-child)': {
                [offsetProperty]: withUnit(spacing),
            },
        },
    });
});

export type StackStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
