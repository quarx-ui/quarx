import { CreateComponentProps } from '../types';

export interface CreateStructureProps {
    options: CreateComponentProps;
    makeDir(folderName: string): Promise<void>;
    createFile(file: string, content: string): Promise<void>;
}
