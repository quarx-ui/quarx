import React, { FC } from 'react';
import { Selection as KitSelection, SelectionProps } from '@kit';
import { PaperClipIcon } from '@kit-icons/paper-clip/24px/stroke/rounded';

export const Selection: FC<SelectionProps> = ({
    rightAdornment,
    ...props
}) => (
    <KitSelection
        rightAdornment={rightAdornment === true ? <PaperClipIcon /> : undefined}
        {...props}
    />
);
