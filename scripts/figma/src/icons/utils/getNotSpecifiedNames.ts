import { ComponentMetadata } from 'figma-api/lib/api-types';
import { matchIconName } from './matchIconName';

export const getNotSpecifiedNames = (components: ComponentMetadata[]) => (
    components.filter(({ name }) => !matchIconName(name)).map(({ name }) => name)
);
