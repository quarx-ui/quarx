import { css } from '@emotion/react';
import { FC, forwardRef } from 'react';
import { Styles, usePropsOverwrites } from '@core/styles';
import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_PLACEMENT, Modal } from '@core/src';
import { MODAL_SCROLL_BEHAVIOR } from '@core/src/main/Modal/constants';
import { FooterBlockStyleKeys } from '@core/src/system/FooterBlock/styles';
import clsx from 'clsx';
import { SidePageProps } from './types';
import { useStyles } from './styles';

export const SidePage: FC<SidePageProps> = forwardRef<HTMLDivElement, SidePageProps>((
    initialProps,
    ref,
) => {
    const { props, styleProps, cn } = usePropsOverwrites('SidePage', initialProps);

    const styles = useStyles(styleProps);

    const footerBlockExternalStyles = props.FooterProps?.styles as Styles<FooterBlockStyleKeys>;

    return (
        <Modal
            {...props}
            ref={ref}
            scrollBehaviour={MODAL_SCROLL_BEHAVIOR.body}
            OverScreenProps={{
                appearance: OVER_SCREEN_APPEARANCE.slide,
                placement: OVER_SCREEN_PLACEMENT.right,
                ...props.OverScreenProps,
            }}
            css={styles.root}
            className={cn('root')}
            styles={{
                ...styleProps.styles,
                box: styles.box,
                scrollContainer: styles.scrollContainer,
            }}
            classes={{
                ...props.classes,
                box: clsx(cn('box'), props.classes?.box),
                scrollContainer: clsx(cn('scrollContainer'), props.classes?.scrollContainer),
            }}
            FooterProps={{
                ...props.FooterProps,
                styles: {
                    ...props.FooterProps?.styles,
                    root: css([styles.footerBlock, footerBlockExternalStyles?.root]),
                },
                classes: {
                    ...props.FooterProps?.classes,
                    root: clsx(cn('footerBlock'), props.FooterProps?.classes?.root),
                },
            }}
        />
    );
});
