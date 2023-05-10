import React, { FC } from 'react';
import { Checkbox as KitCheckbox, CheckboxProps } from '@kit';

export const Checkbox: FC<CheckboxProps> = (props) => (
    <KitCheckbox style={{ width: 'max-content' }} {...props} />
);
