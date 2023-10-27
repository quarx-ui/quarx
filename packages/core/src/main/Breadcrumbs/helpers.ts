import { MouseEventHandler } from 'react';
import { BreadCrumbStruct } from './struct';

export const createOnClickHandler = (crumb: BreadCrumbStruct): MouseEventHandler<HTMLElement> => (
    (event) => {
        crumb?.onClick?.(crumb, event);
    }
);
