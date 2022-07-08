import React, { FC } from 'react';
import { usePropsFromURL } from '@e2e/utils/usePropsFromURL';

export function withURLProps<Props>(Component: FC<Props>): FC {
    return (props) => {
        const urlProps = usePropsFromURL<Props>();
        return <Component {...props} {...urlProps} />;
    };
}
