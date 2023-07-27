import React, { FC } from 'react';
import { Accordion as KitAccordion } from '@kit';
import { TestAccordionProps } from './types';

export const Accordion: FC<TestAccordionProps> = ({ collapseIcon, statusIcon, leftIcon, ...props }) => (
    <KitAccordion
        collapseIcon={collapseIcon ? (<React.Fragment>V</React.Fragment>) : undefined}
        statusIcon={statusIcon ? (<React.Fragment></React.Fragment>) : undefined}
        leftIcon={leftIcon ? (<React.Fragment>!</React.Fragment>) : undefined}
        {...props}
    >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, fugit laudantium nihil ratione reiciendis
        repudiandae unde velit. Accusantium autem error minima molestias. Ea eaque modi nisi, quae quasi quia
        reiciendis!
    </KitAccordion>
);
