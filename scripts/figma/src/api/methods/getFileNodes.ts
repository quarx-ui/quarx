import { FileNodes } from '../types';
import { figmaApi } from '../index';

export const getFileNodes = async (fileKey: string, nodeIds: string[]): Promise<FileNodes> => {
    const { nodes } = await figmaApi.getFileNodes(fileKey, nodeIds);
    return nodes;
};
