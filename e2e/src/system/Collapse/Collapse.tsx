import React, { FC } from 'react';
import { Collapse as KitCollapse, CollapseProps } from '@kit';

export const Collapse: FC<CollapseProps> = (props) => (
    <KitCollapse
        {...props}
    >
        <div style={{ width: 200, maxWidth: 200 }}>Traffic jams Traffic jams Traffic jams Traffic jams Traffic jams</div>
    </KitCollapse>
);
