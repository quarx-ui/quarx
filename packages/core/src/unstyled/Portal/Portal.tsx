import { cloneElement, forwardRef, isValidElement, Ref, useState } from 'react';
import ReactDOM from 'react-dom';
import { useForkRef, useEnhancedEffect } from '@core/utils';
import { setRef } from '@core/utils/setRef';
import { PortalProps } from './types';
import { getContainer } from './helpers';

export const Portal = forwardRef(<T extends HTMLElement>(
    props: PortalProps<T>,
    ref: Ref<T>,
) => {
    const {
        children,
        container,
        disablePortal = false,
    } = props;

    const [mountNode, setMountNode] = useState(null);
    const handleRef = useForkRef(
        isValidElement(children)
            ? children.ref
            : null,
        ref,
    );

    useEnhancedEffect(() => {
        if (!disablePortal) {
            setMountNode(getContainer(container) || document.body);
        }
    }, [container, disablePortal]);

    useEnhancedEffect(() => {
        if (mountNode && !disablePortal) {
            setRef(ref, mountNode);
            return () => {
                setRef(ref, null);
            };
        }

        return undefined;
    }, [ref, mountNode, disablePortal]);

    if (disablePortal) {
        if (isValidElement(children)) {
            return cloneElement(children, { ref: handleRef });
        }
        return children;
    }

    return mountNode
        ? ReactDOM.createPortal(children, mountNode)
        : mountNode;
});
