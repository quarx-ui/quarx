import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { SELECTION_TREE_TYPE, SelectionTreeStyleParams } from '@core';

export const useStyles = makeStyles((
    _,
    { type }: SelectionTreeStyleParams,
) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...type === SELECTION_TREE_TYPE.text && {
            gap: 16,
        },
    },
}));

export type SelectionTreeStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
