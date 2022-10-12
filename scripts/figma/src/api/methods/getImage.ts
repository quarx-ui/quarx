import { GetImageResult } from 'figma-api/lib/api-types';
import { figmaApi } from '../index';

export const getImage = async (fileKey: string, nodeIds: string[]): Promise<GetImageResult['images']> => {
    const { images } = await figmaApi.getImage(fileKey, { ids: nodeIds.join(','), scale: 1, format: 'svg' });
    return images;
};
