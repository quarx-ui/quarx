import { StackProps } from '../types';
import { Button } from '../../../main';

export const defaultArgs: Partial<StackProps> = {
    spacing: '8px',
    direction: 'column',
    order: 'default',
    inline: false,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    children: [
        <Button borderRadius="small" type="outlined">
            Отправить
        </Button>,
        <Button borderRadius="small" type="outlined" color="secondary">
            Редактировать
        </Button>,
        <Button borderRadius="small" type="outlined" color="danger">
            Удалить
        </Button>,
    ],
};
