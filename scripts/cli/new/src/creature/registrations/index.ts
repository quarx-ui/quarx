import { registration as core } from './core';
import { CreateComponentProps } from '../types';

export const registration = async (
    props: CreateComponentProps,
): Promise<void> => {
    await core(props);
};
