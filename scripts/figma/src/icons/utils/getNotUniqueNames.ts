import { ComponentMetadata } from 'figma-api/lib/api-types';

export const getNotUniqueNames = (iconsComponents: ComponentMetadata[]): string[] => {
    const hashMap: Record<string, number> = iconsComponents
        .map((iconComponent) => iconComponent.name)
        .reduce((acc, name) => {
            if (!acc[name]) {
                acc[name] = 1;
            } else {
                acc[name] += 1;
            }
            return acc;
        }, {} as Record<string, number>);

    return Object.keys(hashMap).filter((key) => hashMap[key] > 1);
};
