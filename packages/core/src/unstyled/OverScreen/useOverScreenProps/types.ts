import { OverScreenProps } from '@core';

export interface ExtendedOverScreenProps extends OverScreenProps {
    uniqAttr?: string,
}

export type UseOverScreenPropsReturn<Props extends ExtendedOverScreenProps> =
    & Props
    & { dataIndex: number }
