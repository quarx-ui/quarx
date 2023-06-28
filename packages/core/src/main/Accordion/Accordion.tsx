import { FC, forwardRef } from 'react';
import { QX_SIZE } from '@core/enums';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { Collapse, Divider, useBooleanState } from '@core';
import { AccordionProps } from './types';
import { useStyles } from './styles';
import { ChevronDownIcon } from './assets/ChevronDownIcon';

export const Accordion: FC<AccordionProps> = forwardRef<HTMLDivElement, AccordionProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Accordion', initialProps);
    const {
        open: externalOpen,
        initialOpen = false,
        title,
        description,
        collapseIcon,
        statusIcon,
        children,
        hidden = false,
        size = QX_SIZE.medium,
        inheritTextStyles = false,
        showDivider = false,
        onChange,
        disableTransition = false,
        CollapseProps,
        ...restProps
    } = props;

    const [innerOpen, { toggleState: toggleOpen }] = useBooleanState(externalOpen ?? initialOpen);

    const open = externalOpen ?? innerOpen;

    const params = { open, size, inheritTextStyles, showDivider };
    const styles = useStyles({ params, ...styleProps });

    const handleClick = () => {
        onChange?.(!open);
        toggleOpen();
    };

    const timeout = disableTransition ? 0 : CollapseProps?.timeout;

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                <div
                    className={cn('summary')}
                    css={styles.summary}
                    onClick={handleClick}
                >
                    <div
                        className={cn('headline')}
                        css={styles.headline}
                    >
                        <div
                            className={cn('title')}
                            css={styles.title}
                        >
                            {title}
                        </div>
                        <div
                            className={cn('icons')}
                            css={styles.icons}
                        >
                            <If condition={Boolean(statusIcon)}>
                                <div
                                    className={cn('statusIcon')}
                                    css={styles.statusIcon}
                                >
                                    {statusIcon}
                                </div>
                            </If>
                            <div
                                className={cn('collapseIcon')}
                                css={styles.collapseIcon}
                            >
                                {collapseIcon ?? <ChevronDownIcon />}
                            </div>
                        </div>
                    </div>
                    <If condition={Boolean(description)}>
                        <div
                            className={cn('description')}
                            css={styles.description}
                        >
                            {description}
                        </div>
                    </If>
                </div>
                <Collapse
                    open={open}
                    {...CollapseProps}
                    timeout={timeout}
                >
                    <div
                        className={cn('details')}
                        css={styles.details}
                    >
                        {children}
                    </div>
                </Collapse>
                <If condition={showDivider}>
                    <Divider
                        className={cn('divider')}
                        css={styles.divider}
                    />
                </If>
            </div>
        </If>
    );
});
