/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';
import { useStyles } from './style';
import {
    TitleOfContainerProps,
    TitleProps,
    VariantsProps,
    ContainerProps,
    VerticalContainerProps, VariantProps,
} from './types';

export const Variant: FC<VariantProps> = ({ optionTitle, children }) => {
    const styles = useStyles({ optionTitle });

    return <div css={styles.variant}>{children}</div>;
};

export const Title: FC<TitleProps> = ({
    size,
    children,
}) => {
    const styles = useStyles({ size });

    return <div css={styles.title}>{children}</div>;
};

export const Variants: FC<VariantsProps> = ({
    direction,
    children,
}) => {
    const styles = useStyles({ direction });

    return <div css={styles.variantsContainer}>{children}</div>;
};

export const Container: FC<ContainerProps> = ({
    direction,
    center,
    children,
}) => {
    const styles = useStyles({ direction, center });

    return <div css={styles.variantsMapContainer}>{children}</div>;
};

export const TitleOfContainer: FC<TitleOfContainerProps> = ({
    direction,
    children,
}) => {
    const styles = useStyles({ direction });

    return <div css={styles.titleOfMap}>{children}</div>;
};

export const VerticalContainer: FC<VerticalContainerProps> = ({
    direction,
    spaceBetween,
    children,
}) => {
    const styles = useStyles({ direction, spaceBetween });

    return <div css={styles.verticalMapContainer}>{children}</div>;
};
