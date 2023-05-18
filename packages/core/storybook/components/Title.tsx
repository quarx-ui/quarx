import { FC } from 'react';
import { makeStyles, typography } from '@core';

const useStyles = makeStyles({
    root: {
        margin: 12,
        ...typography.Text.M.Regular,
        fontSize: 18,
        color: '#333333BB',
    },
});

export const Title: FC = ({ children }) => {
    const styles = useStyles();

    return (
        <span css={styles.root}>
            {children}
        </span>
    );
};
