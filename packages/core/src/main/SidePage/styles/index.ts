import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { ModalStyleKeys } from '@core/src/main/Modal/styles';

export const useStyles = makeStyles(() => ({
    root: {},
    scrollContainer: {
        flexGrow: 'unset',
    },
    box: [
        {
            borderRadius: 'unset',
            margin: 0,
            marginLeft: 'auto',
            height: '100%',
            width: 400,
            maxHeight: 'unset',
        },
    ],
    footerBlock: {
        marginTop: 'auto',
    },
}));

export type SidePageStyleKeys = KeysFromUseStyles<typeof useStyles> | ModalStyleKeys;
export * from './types';
