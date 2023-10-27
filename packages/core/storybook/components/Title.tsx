import { FC } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles(({
    palette,
    typography,
}) => ({
    root: {
        margin: 12,
        ...typography.base.text.medium,
        fontSize: 18,
        color: palette.text.main,
        textAlign: 'center',
    },
}));

export const Title: FC = ({ children }) => {
    const styles = useStyles();

    return (
        <span css={styles.root}>
            {children}
        </span>
    );
};
