import { FC } from 'react';
import {
    ComponentPropsWithHTML,
    SelectionControllerProps,
    WithClassesAndStyles,
} from '@core';
import { SelectionTreeNodeStyleKeys, SelectionTreeNodeStyleParams } from './styles';
import { SelectionTreeNodeStruct } from '../utils';
import { OmittedStyleParams } from './styles/types';
import { SelectionTreeNodeCSSVarKeys } from './styles/vars';

type SelectionTreeNodeStyleExternalParams = Omit<Partial<SelectionTreeNodeStyleParams>, keyof OmittedStyleParams>;

export type SelectionTreeNodeStylesProps =
    WithClassesAndStyles<
    SelectionTreeNodeStyleKeys,
    SelectionTreeNodeStyleExternalParams,
    SelectionTreeNodeCSSVarKeys
    >;

export interface SelectionTreeNodePropsWithoutHtml<T extends SelectionControllerProps = SelectionControllerProps>
    extends SelectionTreeNodeStyleExternalParams,
    SelectionTreeNodeStylesProps
{
    /** Узел дерева */
    node: SelectionTreeNodeStruct<T>;

    /** Контроллер, ответственный за переключение состояния узла */
    ControllerComponent: FC<SelectionControllerProps & SelectionTreeNodeStruct<T>>;

    /** Функция, вызываемая при обновлении статуса показа узла */
    createOnChangeVisibility(node: SelectionTreeNodeStruct<T>): () => void;

    /** Функция, вызываемая при обновлении статуса узла */
    createOnChange(node: SelectionTreeNodeStruct<T>): () => void;
}

export type SelectionTreeNodeProps<T extends SelectionControllerProps = SelectionControllerProps> =
    ComponentPropsWithHTML<SelectionTreeNodePropsWithoutHtml<T>>;
