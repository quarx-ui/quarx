import { FC, forwardRef, useEffect, useRef, useState } from 'react';
import { usePropsOverwrites, useTheme } from '@core/styles';
import { If } from '@core/src/system/If';
import { MapTransitionStatusToStyles, Transition } from '@core/src';
import { mergeRefs } from '@core/utils';
import { ORIENTATIONS } from '@core/enums';
import { DEFAULT_ENTER_ANIMATION_FUNCTION, DEFAULT_EXIT_ANIMATION_FUNCTION } from './styles/constants';
import { CollapseProps } from './types';
import { useStyles } from './styles';

export const Collapse: FC<CollapseProps> = forwardRef<HTMLDivElement, CollapseProps>((initialProps, ref) => {
    const { cn, props, styleProps } = usePropsOverwrites('Collapse', initialProps);

    const theme = useTheme();

    const {
        hidden = false,
        timeout = theme.transitions.duration.shorter,
        easing,
        orientation = ORIENTATIONS.vertical,
        children,
        open,
        collapsedSize = 0,
        TransitionProps = {},
        ...rest
    } = props;

    const isVertical = orientation === ORIENTATIONS.vertical;

    const params = { isHorizontal: !isVertical };
    const styles = useStyles({ ...styleProps, params });

    const internalRef = useRef<HTMLDivElement>(null);
    const refToChildren = useRef<HTMLDivElement>(null);

    const timeoutPropertyCamel = isVertical ? 'maxHeight' : 'maxWidth';
    const timeoutPropertyKebab = isVertical ? 'max-height' : 'max-width';

    const [mapStatusToStyles, setMapStatusToStyles] = useState<MapTransitionStatusToStyles>();

    useEffect(() => {
        const childrenHeightOrWidth = refToChildren.current?.[isVertical ? 'offsetHeight' : 'offsetWidth'];
        setMapStatusToStyles({
            entering: {
                [timeoutPropertyCamel]: childrenHeightOrWidth,
            },
            entered: {
                [timeoutPropertyCamel]: childrenHeightOrWidth,
            },
            exiting: {
                [timeoutPropertyCamel]: collapsedSize,
            },
            exited: {
                [timeoutPropertyCamel]: collapsedSize,
            },
        });
    }, [collapsedSize, isVertical, timeoutPropertyCamel]);

    return (
        <If condition={!hidden}>
            <Transition
                refNode={refToChildren}
                in={open}
                timeoutProperty={timeoutPropertyKebab}
                mapStatusToStyles={mapStatusToStyles}
                easing={{
                    enter: easing?.enter ?? DEFAULT_ENTER_ANIMATION_FUNCTION,
                    exit: easing?.exit ?? DEFAULT_EXIT_ANIMATION_FUNCTION,
                }}
                enter
                exit
                timeout={timeout}
                styles={{}}
                {...TransitionProps}
            >
                <div
                    ref={mergeRefs(ref, internalRef)}
                    className={cn('root')}
                    css={styles.root}
                    {...rest}
                >
                    <div ref={refToChildren} className={cn('wrapper')} css={styles.wrapper}>
                        {children}
                    </div>
                </div>
            </Transition>
        </If>
    );
});
