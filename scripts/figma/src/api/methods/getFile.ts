import { GetFileResult } from 'figma-api/lib/api-types';
import { figmaApi } from '../index';

export const getFile = async (fileKey: string): Promise<GetFileResult> => {
    const { ...result } = await figmaApi.getFile(fileKey);
    return result;
};
