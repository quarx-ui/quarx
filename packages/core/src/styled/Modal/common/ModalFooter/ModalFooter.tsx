/** @jsxFrag */
/** @jsx jsx */
import React, { FC, forwardRef, useMemo } from 'react';
import { jsx } from '@emotion/react';
import { Button, QX_BORDER_SIZE, QX_SIZE, usePropsOverwrites } from '@core';
import { MODAL_DIRECTION } from '../constants';
import { ModalFooterProps } from './types';
import { useStyles } from './styles';

export const ModalFooter: FC<ModalFooterProps> = forwardRef<HTMLDivElement, ModalFooterProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('ModalFooter', initialProps);

    const {
        size = QX_SIZE.medium,
        direction = MODAL_DIRECTION.vertical,
        buttons,
        children,
        ...restProps
    } = props;

    const params = {
        size,
        direction,
    };

    const styles = useStyles({ ...params, ...styleProps });

    const commonButtonProps = useMemo(() => ({
        borderRadius: QX_BORDER_SIZE.medium,
        size,
    }), [size]);

    const ButtonWrapper: FC = useMemo(() => ({ children: buttonChildren }) => (
        direction === MODAL_DIRECTION.horizontal
            ? (
                <div
                    css={styles.successButtons}
                    className={cn('successButtons')}
                >
                    {buttonChildren}
                </div>
            )
            : <>{buttonChildren}</>
    ), [cn, direction, styles.successButtons]);

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

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            {...restProps}
            ref={ref}
        >
            {children ?? (
                <>
                    {direction === 'horizontal' && buttonDanger}
                    <ButtonWrapper>
                        {direction === 'vertical' && buttonSuccess}
                        {buttonSecondary}
                        {direction === 'horizontal' && buttonSuccess}
                    </ButtonWrapper>
                    {direction === 'vertical' && buttonDanger}
                </>
            )}
        </div>
    );
});
