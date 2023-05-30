import { FC } from 'react';
import { makeStyles, typography } from '@core';
import { ArrowsClockwiseIcon } from '@quarx-ui/icons/src/arrows-clockwise/24px/stroke/rounded';

const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 16px 40px',
        backgroundColor: 'rgba(123, 97, 255, 0.1)',
        border: '1px dashed #7B61FF',
    },
    icon: {
        marginBottom: 12,
    },
    title: {
        ...typography.Text.M.Semibold,
        color: '#523BC7',
    },
    description: {
        ...typography.Text.M.Regular,
        color: '#523BC7',
        textAlign: 'center',
        maxWidth: 195,
    },
});

export const CustomContent: FC = () => {
    const styles = useStyles();

    return (
        <div css={styles.root}>
            <ArrowsClockwiseIcon
                css={styles.icon}
                color="#523BC7"
            />
            <span css={styles.title}>
                Кастомизация контента
            </span>
            <span css={styles.description}>
                Сделай Detach всего блока или замени
                этот элемент  на свой
            </span>
        </div>
    );
};
