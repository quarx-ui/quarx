import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { paramsToCss } from '@core';
import { SELECTION_LIST_TYPE } from './constants';
import { SelectionListStyleParams } from './types';

export const useStyles = makeStyles((
    _,
    { type }: SelectionListStyleParams,
) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...paramsToCss(type)({
            [SELECTION_LIST_TYPE.text]: { gap: 16 },
            [SELECTION_LIST_TYPE.contained]: {},
        }),
    },
}));

export type SelectionListStyleKeys = KeysFromUseStyles<typeof useStyles>;
