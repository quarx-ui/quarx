import { cloneElement } from 'react';
import { JsxTag } from '@core/types';
import { omitProps } from '@core/utils';
import { If } from '@core/components/system/If';
import { useDelayedMounter } from './useDelayedMounter';
import { DelayedMounterProps } from './types';

export const DelayedMounter = <
    Props extends object,
    Element extends JsxTag = 'div'
>(
    props: DelayedMounterProps<Props, Element>,
) => {
    const {
        children,
        ...restProps
    } = props;

    const { mounted } = useDelayedMounter(props);

    const omittedProps = omitProps(restProps, [
        'disableTimeout',
        'mounted',
        'onExitStart',
        'onEnter',
        'onExit',
    ]);

    return (
        <If condition={mounted}>
            {typeof children === 'string'
                ? children
                : cloneElement(children, {
                    ...omittedProps,
                    ...children.props,
                })}
        </If>
    );
};
