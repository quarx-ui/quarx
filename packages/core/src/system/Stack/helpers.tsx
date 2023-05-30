import { Children, Fragment, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Divider } from '@core';
import { StackProps } from './types';
import { StackDirection } from './styles/constants';
import { directionToDividerOrientation } from './map';

const renderChild = (child: ReactChild | ReactFragment | ReactPortal) => {
    if (typeof child === 'string') { return <div>{child}</div>; }

    return child;
};

export const addDividerToChildren = (
    children: StackProps['children'],
    divider: ReactChild | true,
    direction: StackDirection,
) => {
    if (!children) { return null; }

    return Children
        .toArray(children)
        .filter(Boolean)
        .map((child, index, arr) => {
            if (index < arr.length - 1) {
                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Fragment key={`${index}`}>
                        {renderChild(child)}
                        {typeof divider === 'boolean'
                            ? (
                                <Divider
                                    css={{ alignSelf: 'stretch' }}
                                    orientation={directionToDividerOrientation[direction]}
                                />
                            )
                            : renderChild(divider)}
                    </Fragment>
                );
            }

            return renderChild(child);
        });
};
