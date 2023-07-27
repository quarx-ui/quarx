import { AccordionProps } from '@kit';
import { TestComponentProps } from '@e2e/constants';

export type TestAccordionProps = TestComponentProps<AccordionProps, {
    collapseIcon?: boolean;
    statusIcon?: boolean;
    leftIcon?: boolean;
}>
