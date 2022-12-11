import { FC } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: palette.background.secondary,
        overflowY: 'auto',
    },
}));

export const StoryDarkerContainer: FC = ({ children }) => {
    const styles = useStyles();

    return (
        <div css={styles.root}>
            {children}
        </div>
    );
};

// ToDo: Добавить как декоратор WithDarkerStoryBackground
