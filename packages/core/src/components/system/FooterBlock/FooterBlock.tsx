import { FC, forwardRef, Fragment, useMemo } from 'react';
import { Button, QX_BORDER_SIZE, QX_SIZE, usePropsOverwrites } from '@core';
import { FOOTER_DIRECTION } from './constants';
import { FooterBlockProps } from './types';
import { useStyles } from './styles';

export const FooterBlock: FC<FooterBlockProps> = forwardRef<HTMLDivElement, FooterBlockProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('FooterBlock', initialProps);

    const {
        size = QX_SIZE.medium,
        direction = FOOTER_DIRECTION.vertical,
        buttons,
        children,
        ...restProps
    } = props;

    const params = {
        size,
        direction,
    };

    const styles = useStyles({ params, ...styleProps });

    const commonButtonProps = useMemo(() => ({
        borderRadius: QX_BORDER_SIZE.medium,
        size,
    }), [size]);

    const isHorizontal = direction === FOOTER_DIRECTION.horizontal || direction === FOOTER_DIRECTION['horizontal-reverse'];
    const ButtonWrapper: FC = useMemo(() => ({ children: buttonChildren }) => (
        isHorizontal
            ? (
                <div
                    css={styles.successButtons}
                    className={cn('successButtons')}
                >
                    {buttonChildren}
                </div>
            )
            : <Fragment>{buttonChildren}</Fragment>
    ), [cn, isHorizontal, styles.successButtons]);

    const buttonDanger = useMemo(() => buttons?.danger && (
        <Button
            type="outlined"
            color="danger"
            {...commonButtonProps}
            {...buttons?.danger}
        />
    ), [buttons?.danger, commonButtonProps]);

    const buttonSuccess = useMemo(() => buttons?.success && (
        <Button
            color="brand"
            {...commonButtonProps}
            {...buttons?.success}
        />
    ), [buttons?.success, commonButtonProps]);

    const buttonSecondary = useMemo(() => buttons?.secondary && (
        <Button
            type="outlined"
            color="secondary"
            {...commonButtonProps}
            {...buttons?.secondary}
        />
    ), [buttons?.secondary, commonButtonProps]);

    if (!children && (!buttons || !Object.keys(buttons).length)) {
        return null;
    }

    const order = direction === 'horizontal' || direction === 'vertical-reverse'
        ? 'reverse'
        : 'default';

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            {...restProps}
            ref={ref}
        >
            {children ?? (
                <Fragment>
                    {order === 'reverse' && buttonDanger}
                    <ButtonWrapper>
                        {order === 'default' && buttonSuccess}
                        {buttonSecondary}
                        {order === 'reverse' && buttonSuccess}
                    </ButtonWrapper>
                    {order === 'default' && buttonDanger}
                </Fragment>
            )}
        </div>
    );
});
