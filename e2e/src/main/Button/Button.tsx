import React, { FC } from 'react';
import { Button as KitButton } from '@kit';
import { PaperClipIcon } from '@kit-icons/paper-clip/24px/stroke/rounded';
import { ChevronDownIcon } from '@kit-icons/chevron-down/24px/stroke/rounded';
import { TestButtonProps } from './types';

export const Button: FC<TestButtonProps> = ({ leftIcon, rightIcon, children, ...props }) => (
    <KitButton
        leftIcon={leftIcon ? <PaperClipIcon /> : undefined}
        rightIcon={rightIcon ? <ChevronDownIcon /> : undefined}
        {...props}
    >
        {children ?? 'Button'}
    </KitButton>
);
