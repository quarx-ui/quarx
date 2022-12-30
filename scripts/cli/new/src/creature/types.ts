import { ComponentsProps } from '@core';
import { ComponentType, GenerateTestsTemplate } from './constants';

export interface CreateComponentProps {
    type: ComponentType;
    name: string;
    tests: GenerateTestsTemplate;
    parent?: keyof ComponentsProps;
}

export const isComponentType = (
    name: string,
): name is ComponentType => (
    name === ComponentType.main
    || name === ComponentType.system
);
