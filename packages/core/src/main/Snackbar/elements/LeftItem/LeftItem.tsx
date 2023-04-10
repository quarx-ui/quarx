import { FC, ReactElement, ReactNode } from 'react';
import { SNACKBAR_COLORS, SNACKBARS_LEFT_ITEMS } from '@core/src/main/Snackbar/styles';
import { QX_SIZE, useProps } from '@core';
import { If } from '@core/src/system/If';
import { TimerIcon } from '../TimerIcon';
import { SnackbarLeftItemProps } from './types';
import { useStyles } from './styles';
import { mapColorToLeftItem } from './constants';

export const LeftItem: FC<SnackbarLeftItemProps> = (initialProps) => {
    const { cn, props, styleProps } = useProps('SnackbarLeftItem', initialProps);

    const {
        color = SNACKBAR_COLORS.default,
        timerValue,
        initialTimerValue,
        children = SNACKBARS_LEFT_ITEMS.default,
        size = QX_SIZE.large,

        TimerIconProps,

        ...htmlProps
    } = props;

    const params = { color };
    const styles = useStyles({ ...params, ...styleProps });

    const renderWrapper = (element: ReactNode): ReactElement => (
        <If condition={!!element}>
            <div
                css={styles.root}
                className={cn('root')}
                {...htmlProps}
            >
                {element}
            </div>
        </If>
    );

    switch (children) {
        case false:
            return null;
        case SNACKBARS_LEFT_ITEMS.default:
            return renderWrapper(mapColorToLeftItem[size][color]);
        case SNACKBARS_LEFT_ITEMS.timer:
            return (
                <TimerIcon
                    timerValue={timerValue}
                    initialTimerValue={initialTimerValue}
                    {...htmlProps}
                    {...TimerIconProps}
                    css={styles.root}
                    className={cn('root')}
                />
            );
        default:
            return renderWrapper(children);
    }
};
