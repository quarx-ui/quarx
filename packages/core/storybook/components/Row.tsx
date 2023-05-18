import { FC } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: 32,
        margin: 32,
    },
});

export const Row: FC = ({ children }) => {
    const styles = useStyles();

    return (
        <div css={styles.root}>
            {children}
        </div>
    );
};
