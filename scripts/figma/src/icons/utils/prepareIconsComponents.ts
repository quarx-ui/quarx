import { ComponentMetadata } from 'figma-api/lib/api-types';
import { matchIconName } from './matchIconName';

export const prepareIconsComponents = (iconsComponents: ComponentMetadata[], links: Record<string, string | null>) => (
    iconsComponents.map(({ name, node_id: nodeId }) => {
        const match = matchIconName(name);

        if (!match) {
            throw new Error(`Icon name "${name}" doesn't match default pattern`);
        }

        if (!links[nodeId]) {
            throw new Error(`Link for icon "${name}" doesn't exist`);
        }

        const parsedName = {
            size: `${match[1]}px`,
            type: match[2].toLowerCase(),
            style: match[3].toLowerCase(),
            name: match[4],
        };

        return ({
            name: parsedName.name,
            params: `${parsedName.size}/${parsedName.type}/${parsedName.style}`,
            link: links[nodeId] as string,
        });
    })
);
