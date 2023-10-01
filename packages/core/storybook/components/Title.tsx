import { FC } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles(({ typography }) => ({
    root: {
        margin: 12,
        ...typography.base.text.medium,
        fontSize: 18,
        color: '#333333BB',
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
