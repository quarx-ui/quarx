import { CreateComponentProps } from './types';
import { createStructure } from './structures';
import { registration } from './registrations';

/* Создание и регистрация нового компонента */
export const createComponent = async (
    props: CreateComponentProps,
): Promise<void> => {
    await createStructure(props);
    await registration(props);
};
