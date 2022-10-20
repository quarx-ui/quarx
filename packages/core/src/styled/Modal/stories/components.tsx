import React, { FC } from 'react';
import { Button, ButtonProps } from '@core';

export const CommonButton: FC<ButtonProps> = (props) => (
    <Button
        {...props}
        size="xSmall"
        borderRadius="small"
    />
);
