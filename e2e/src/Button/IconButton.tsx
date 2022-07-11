import React, { FC } from 'react';
import { IconButton as KitIconButton, IconButtonProps } from '@kit';
import { PaperClipIcon } from '@kit-icons/paper-clip/24px/stroke/rounded';

export const IconButton: FC<IconButtonProps> = (props) => (
    <KitIconButton {...props}>
        <PaperClipIcon />
    </KitIconButton>
);
