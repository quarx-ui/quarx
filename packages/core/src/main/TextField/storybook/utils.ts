import styled from '@emotion/styled';
import { TextFieldProps } from '../types';

export type StoryTextFieldProps = TextFieldProps & {
    leftIconShown: boolean;
    rightIconShown: boolean;
};

export const Flex = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
});

export const Grid = styled('div')({
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: 16,
});
