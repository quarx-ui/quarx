import { FC } from 'react';
import { TextField as KitTextField } from '@kit';
import { TestTextFieldProps } from '@e2e/src/main/TextField/types';
import { HomeIcon } from '@kit-icons/home/24px/fill/rounded';
import { InfoIcon } from '@kit-icons/info/24px/stroke/rounded';

export const TextField: FC<TestTextFieldProps> = ({ leftItem, rightItem, ...props }) => (
    <KitTextField
        leftItem={leftItem ? <HomeIcon /> : undefined}
        rightItem={rightItem ? <InfoIcon /> : undefined}
        label="Text Field"
        placeholder="Enter a value"
        {...props}
    />
);
