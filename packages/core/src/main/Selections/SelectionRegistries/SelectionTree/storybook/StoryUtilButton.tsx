import { FC, PointerEventHandler } from 'react';
import { Button, makeStyles, PALETTE_COLORS, PaletteColor, transitions, useBooleanState } from '@core';

/** Компонент создан как концепт для согласования с дизайнерами (по вопросам к Maxim Zadorkin)
 * Если идея не понравится - удалю */

interface StoryUtilButtonStyleParams {
    /** Определяет нажатие на кнопку */
    isClicked: boolean;
}

interface StoryUtilButtonProps {
    /** Заголовок кнопки */
    children: string;

    /** Обработчик клика по кнопке */
    onClick(): void;

    /** Цветовая палитра кнопки
     *
     * @default brand */
    color: PaletteColor | undefined;
}

const animationDuration = transitions.duration.shortest;

const useStyles = makeStyles((
    _,
    { isClicked }: StoryUtilButtonStyleParams,
) => ({
    root: {
        transition: `transform ${animationDuration}ms, background-color ${animationDuration}ms`,
        ...isClicked && { transform: 'scale(0.95)' },
    },
}));

export const StoryUtilButton: FC<StoryUtilButtonProps> = ({
    children,
    onClick,
    color = PALETTE_COLORS.brand,
}) => {
    const { state: isClicked, setState: setClicked } = useBooleanState(false);
    const styles = useStyles({ isClicked });

    const pointerDownHandler = () => setClicked(true);
    const pointerUpHandler: PointerEventHandler = () => {
        const disableClicked = () => setClicked(false);
        setTimeout(disableClicked, animationDuration);
    };

    return (
        <Button
            size="small"
            type="outlined"
            color={color}
            onClick={onClick}
            onPointerDown={pointerDownHandler}
            onPointerUp={pointerUpHandler}
            css={styles.root}
        >
            {children}
        </Button>
    );
};
