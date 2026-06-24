import { CreateComponentProps } from '../types';
import { createCoreFiles } from './core';

export const createStructure = async (
    props: CreateComponentProps,
): Promise<void> => {
    await createCoreFiles(props);
};
