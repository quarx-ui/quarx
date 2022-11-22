import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { ModalStyleKeys } from '@core/src/styled/Modal/styles';

export const useStyles = makeStyles(() => ({
    root: {},
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
}), { name: 'QxSidePage' });

export type SidePageStyleKeys = KeysFromUseStyles<typeof useStyles> | ModalStyleKeys;
