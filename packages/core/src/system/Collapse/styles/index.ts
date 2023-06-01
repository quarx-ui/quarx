import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { CollapseStyleParams } from '@core/src/system/Collapse/styles/types';

export const useStyles = makeStyles((_, { isHorizontal }: CollapseStyleParams) => ({
    root: {
        overflow: 'hidden',
    },

    wrapper: [isHorizontal && { width: 'fit-content' }],
}));

export type CollapseStyleKeys = KeysFromUseStyles<typeof useStyles>;
