import React, { FC } from 'react';
import { Badge as KitBadge } from '@kit';
import { TestBadgeProps } from '@e2e/src/Badge/types';
import { PaperClipIcon } from '@kit-icons/paper-clip/16px/stroke/rounded';
import { CheckmarkIcon } from '@kit-icons/checkmark/16px/stroke/rounded';

export const Badge: FC<TestBadgeProps> = ({ leftItem, rightItem, children, ...props }) => (
    <KitBadge
        leftItem={leftItem ? <PaperClipIcon /> : undefined}
        rightItem={rightItem ? <CheckmarkIcon /> : undefined}
        {...props}
    >
        {children ?? 'Badge'}
    </KitBadge>
);
