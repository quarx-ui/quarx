import { FC, forwardRef, Fragment } from 'react';
import { IconButton, QX_BORDER_SIZE, QX_SIZE, usePropsOverwrites } from '@core';
import clsx from 'clsx';
import { CrossIcon } from './assets';
import { HeaderBlockProps } from './types';
import { useStyles } from './styles';

export const HeaderBlock: FC<HeaderBlockProps> = forwardRef<HTMLDivElement, HeaderBlockProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('HeaderBlock', initialProps);

    const {
        size = QX_SIZE.medium,
        title,
        subTitle,
        disableCloseButton,
        children,
        CloseButtonProps,
        onClose,
        CloseButton,
        ...restProps
    } = props;

    const params = {
        size,
    };

    const styles = useStyles({ params, ...styleProps });

    if (!title && !subTitle && !children && disableCloseButton) {
        return null;
    }

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            {...restProps}
            ref={ref}
        >
            {children ?? (
                <Fragment>
                    <div
                        css={styles.content}
                        className={cn('content')}
                    >
                        {title && (
                            <div
                                css={styles.title}
                                className={cn('title')}
                            >
                                {title}
                            </div>
                        )}
                        {subTitle && (
                            <div
                                css={styles.subTitle}
                                className={cn('subTitle')}
                            >
                                {subTitle}
                            </div>
                        )}
                    </div>
                    {!disableCloseButton && (
                        CloseButton ?? (
                            <IconButton
                                size="small"
                                type="text"
                                color="secondary"
                                borderRadius={QX_BORDER_SIZE.medium}
                                onClick={onClose}
                                {...CloseButtonProps}
                                css={styles.closeButton}
                                className={clsx(cn('closeButton'), CloseButtonProps?.className)}
                            >
                                {CloseButtonProps?.children ?? <CrossIcon />}
                            </IconButton>
                        ))}
                </Fragment>
            )}
        </div>
    );
});
