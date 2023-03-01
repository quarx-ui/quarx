import { FC } from 'react';
import { Button, ButtonProps } from '@core';

export const StoryButton: FC<ButtonProps> = (props) => (
    <Button
        {...props}
        size="xSmall"
        borderRadius="small"
    />
);
