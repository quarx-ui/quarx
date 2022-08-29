import React, { FC } from 'react';
import { Link as KitLink } from '@kit';
import { ChevronRightIcon } from '@kit-icons/chevron-right/24px/stroke/rounded';
import { GearIcon } from '@kit-icons/gear/24px/fill/rounded';
import { TestLinkProps } from './types';

export const Link: FC<TestLinkProps> = ({
    leftItem,
    rightItem,
    children,
    ...props
}) => (
    <KitLink
        leftItem={leftItem ? <GearIcon /> : undefined}
        rightItem={rightItem ? <ChevronRightIcon /> : undefined}
        {...props}
    >
        {children ?? 'Перейти'}
    </KitLink>
);
