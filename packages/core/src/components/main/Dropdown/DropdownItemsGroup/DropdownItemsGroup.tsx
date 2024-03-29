import { FC, forwardRef, UIEventHandler, useState } from 'react';
import { Loader, QX_SIZE, Stack } from '@core';
import { If } from '@core/components/system/If';
import { usePropsOverwrites } from '@core/styles';
import { DropdownItemsGroupProps } from './types';
import { useStyles } from './styles';

export const DropdownItemsGroup: FC<DropdownItemsGroupProps> = forwardRef<HTMLDivElement, DropdownItemsGroupProps>((
    initialProps,
    ref,
) => {
    const {
        cn,
        props,
        styleProps,
    } = usePropsOverwrites('DropdownItemsGroup', initialProps);
    const {
        hidden = false,
        size = QX_SIZE.medium,
        limiter = Infinity,
        loading = false,
        LoaderProps,
        title,
        children,

        ...restProps
    } = props;

    const [scrollTopPosition, setScrollTopPosition] = useState<number>(0);
    const onScrollHandler: UIEventHandler = (event) => {
        setScrollTopPosition(event.currentTarget?.scrollTop ?? 0);
    };

    const params = {
        size,
        limiter,
        notScrolled: scrollTopPosition === 0,
    };
    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                <If condition={Boolean(title)}>
                    <span
                        className={cn('title')}
                        css={styles.title}
                    >
                        {title}
                    </span>
                </If>
                <If condition={loading}>
                    <div
                        className={cn('loader')}
                        css={styles.loader}
                    >
                        <Loader {...LoaderProps} />
                    </div>
                </If>
                <If condition={!loading}>
                    <Stack
                        className={cn('stack')}
                        css={styles.stack}
                        direction="column"
                        spacing="4px"
                        onScroll={onScrollHandler}
                    >
                        {children}
                    </Stack>
                </If>
            </div>
        </If>
    );
});
