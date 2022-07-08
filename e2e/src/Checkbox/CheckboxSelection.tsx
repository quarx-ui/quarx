import React, { FC } from 'react';
import { PaperClipIcon } from '@kit-icons/paper-clip/24px/stroke/rounded';
import { CheckboxSelection as KitCheckboxSelection } from '@kit/src/Checkbox/CheckboxSelection';
import { TestSelectionProps } from '@e2e/src/Selection/types';

export const CheckboxSelection: FC<TestSelectionProps> = ({
    rightAdornment,
    ...props
}) => (
    <KitCheckboxSelection
        rightAdornment={rightAdornment === true ? <PaperClipIcon /> : undefined}
        {...props}
    />
);
