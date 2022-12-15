import React, { cloneElement } from 'react';
import { JsxTag } from '@core/types';
import { omitProps } from '@core/utils';
import { If } from '@core/src/system/If';
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
