import { borderRadii, defaultPalette, OverScreenProps } from '@core';
import styled from '@emotion/styled';

export interface StoryOverScreenProps extends OverScreenProps {
    buttonText?: string;
}

export const Block = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: defaultPalette.colors.warning.default,
    color: defaultPalette.colors.warning.contrastText,
    width: 400,
    height: 400,
    borderRadius: borderRadii.small,
});

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: 30,
});
