import { FC } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export const Column: FC = ({ children }) => {
    const styles = useStyles();

    return (
        <div css={styles.root}>
            {children}
        </div>
    );
};
