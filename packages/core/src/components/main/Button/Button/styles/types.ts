import { BaseButtonStyleParams } from '@core';

interface AdditionalButtonStyleParams {
    /** Проп, показывающий наличие переданного пропа leftIcon */
    leftIcon: boolean;

    /** Проп, показывающий наличие переданного пропа rightIcon */
    rightIcon: boolean;
}

export type ButtonStyleParams = BaseButtonStyleParams & AdditionalButtonStyleParams;
