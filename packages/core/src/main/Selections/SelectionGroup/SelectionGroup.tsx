import { cloneElement, FC, forwardRef } from 'react';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { controlSynchronizedChildProps } from '@core';
import { If } from '@core/src/system/If';
import { QX_SIZE } from '@core/enums';
import { SELECTION_GROUP_TYPE } from './styles/constants';
import { SelectionGroupProps } from './types';
import { useStyles } from './styles';

export const SelectionGroup: FC<SelectionGroupProps> = forwardRef<HTMLDivElement, SelectionGroupProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('SelectionGroup', initialProps);
    const {
        title,
        description,
        helperText,
        hidden,
        type = SELECTION_GROUP_TYPE.text,
        color = PALETTE_COLORS.brand,
        size = QX_SIZE.medium,
        children,
        ...restProps
    } = props;

    const {
        props: initialChildrenProps,
    } = children;

    // Перезапись одинаковых дочерних и родительских свойств
    const parentSynchronizableProps = {
        type,
        size,
        color,
    };
    const childSynchronizableProps = {
        type: initialChildrenProps.type,
        size: initialChildrenProps.size,
        color: initialChildrenProps.color,
    };
    const defaultSynchronizableProps = {
        type: SELECTION_GROUP_TYPE.text,
        size: QX_SIZE.medium,
        color: PALETTE_COLORS.brand,
    };
    const {
        synchronizedParentProps,
        synchronizedChildProps,
    } = controlSynchronizedChildProps(
        defaultSynchronizableProps,
        parentSynchronizableProps,
        childSynchronizableProps,
    );

    const childrenProps = {
        ...initialChildrenProps,

        // SynchronizedProps
        type: synchronizedChildProps.type,
        size: synchronizedChildProps.size,
        color: synchronizedChildProps.color,
    };

    const params = {
        color: synchronizedParentProps.color,
        size: synchronizedParentProps.size,
        type: synchronizedParentProps.type,
    };

    const styles = useStyles({ ...params, ...styleProps });

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
                <If condition={Boolean(description)}>
                    <span
                        className={cn('description')}
                        css={styles.description}
                    >
                        {description}
                    </span>
                </If>
                <If condition={Boolean(children)}>
                    <div
                        className={cn('content')}
                        css={styles.content}
                    >
                        {cloneElement(
                            children,
                            childrenProps,
                        )}
                    </div>
                </If>
                <If condition={Boolean(helperText)}>
                    <span
                        className={cn('helperText')}
                        css={styles.helperText}
                    >
                        {helperText}
                    </span>
                </If>
            </div>
        </If>
    );
});
