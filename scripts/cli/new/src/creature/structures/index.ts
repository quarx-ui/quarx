import { CreateComponentProps } from '../types';
import { createCoreFiles } from './core';
import { createE2EFiles } from './e2e';

export const createStructure = async (
    props: CreateComponentProps,
): Promise<void> => {
    await createCoreFiles(props);
    await createE2EFiles(props);
};
