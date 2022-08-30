/** @jsx jsx */
import React, { forwardRef } from 'react';
import { jsx } from '@emotion/react';
import { usePropsOverwrites } from '@core/styles';
import { SX_BORDER_SIZE, SX_SIZE } from '@core/enums';
import { UserIcon } from '@quarx-ui/icons/src/user/24px/fill/rounded';
import { AvatarProps } from './types';
import { useStyles } from './styles';
import { useImgLoaded } from './useImageLoad';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Avatar', initialProps);

    const {
        size = SX_SIZE.medium,
        radius = SX_BORDER_SIZE.smooth,
        showBorder = false,
        styles: externalStyles,
        children: childrenProp,
        alt,
        src,
        srcSet,
        crossOrigin,
        referrerPolicy,
        ...restProps
    } = props;

    const params = { size, radius, showBorder };

    const styles = useStyles({ ...params, styles: externalStyles });

    const { loaded, error } = useImgLoaded({ src, srcSet, crossOrigin, referrerPolicy });

    const isImage = src || srcSet;
    const imageLoaded = isImage && loaded && !error;

    let children = childrenProp;

    if (imageLoaded) {
        children = (
            <img
                alt={alt}
                src={src}
                srcSet={srcSet}
            />
        );
    } else if (childrenProp) {
        children = childrenProp;
    } else if (isImage && alt) {
        const [firstName, secondName] = alt.split(' ');
        children = (firstName[0] + secondName[0]).toUpperCase();
    } else {
        children = (
            <UserIcon
                css={styles.fallback}
                className={cn('fallback')}
            />
        );
    }

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            {children}
        </div>
    );
});
