import { FC } from 'react';
import { useStyles } from './style';
import {
    TitleOfContainerProps,
    TitleProps,
    VariantsProps,
    ContainerProps,
    VerticalContainerProps, VariantProps,
} from './types';

export const Variant: FC<VariantProps> = ({
    optionTitle,
    children,
    variantAlign = 'center',
}) => {
    const styles = useStyles({ optionTitle, variantAlign });

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
    containerAlign = 'center',
    containerJustify = 'space-evenly',
}) => {
    const styles = useStyles({ direction, containerJustify, containerAlign });

    return <div css={styles.variantsContainer}>{children}</div>;
};

export const Container: FC<ContainerProps> = ({
    direction,
    containerAlign = 'center',
    containerJustify = 'center',
    children,
}) => {
    const styles = useStyles({ direction, containerAlign, containerJustify });

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
    containerAlign = 'center',
    containerJustify = 'space-evenly',
    children,
}) => {
    const styles = useStyles({ direction, containerAlign, containerJustify });

    return <div css={styles.verticalMapContainer}>{children}</div>;
};
