import { FC } from 'react';
import { Story } from '@storybook/react/types-6-0';
import {
    Counter,
    DropdownItem,
    DropdownItemProps,
    DropdownItemSize,
    makeStyles,
    paramsToCss,
    QX_SIZE,
    Stack,
    useTheme,
} from '@core';
import { excludeProp } from '@core/storybook/templateParams';
import { FourSquaresIcon } from '@quarx-ui/icons/src/four-squares/24px/stroke/rounded';
import { CheckmarkSquareIcon } from '@quarx-ui/icons/src/checkmark-square/24px/stroke/rounded';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import Image from './assets/avatar.story.png';

// TODO: Заменить на компонент Avatar
const useAvatarStyles = makeStyles((
    { palette },
    { size }: { size: DropdownItemSize},
) => ({
    root: {
        border: '1px solid',
        borderRadius: 22,
        borderColor: palette.border.main,
        objectFit: 'cover',
        ...paramsToCss(size)({
            [QX_SIZE.small]: {
                width: 28,
                height: 28,
            },
            [QX_SIZE.medium]: {
                width: 36,
                height: 36,
            },
            [QX_SIZE.large]: {
                width: 36,
                height: 36,
            },
        }),
    },
}));

const Avatar: FC<{ size: DropdownItemSize }> = ({
    size,
}) => {
    const styles = useAvatarStyles({ size });

    return (
        <img
            css={styles.root}
            src={Image}
            alt="Аватар"
        />
    );
};

export const CustomizationStory: Story<DropdownItemProps> = ({ size, ...props }) => {
    const theme = useTheme();
    return (
        <Stack direction="column">
            <Title size="primary">
                Custom leftItem
            </Title>
            <DropdownItem
                {...props}
                state
                size={size}
                leftItem={<FourSquaresIcon color={theme.palette.text.main} />}
            />
            <Title size="primary">
                Custom leftItem (На примере Avatar)
            </Title>
            <DropdownItem
                {...props}
                state
                size={size}
                leftItem={<Avatar size={size ?? QX_SIZE.medium} />}
            />
            <Title size="primary">
                Custom ActiveIcon
            </Title>
            <DropdownItem
                {...props}
                size={size}
                state
                activeIcon={<CheckmarkSquareIcon color={theme.palette.text.main} />}
            />
            <Title size="primary">
                Custom leftItem & ActiveIcon
            </Title>
            <DropdownItem
                {...props}
                state
                size={size}
                leftItem={<FourSquaresIcon color={theme.palette.text.main} />}
                activeIcon={<CheckmarkSquareIcon color={theme.palette.text.main} />}
            />
            <Title size="primary">
                Custom content
            </Title>
            <DropdownItem
                {...props}
                state
                size={size}
                leftItem={<FourSquaresIcon color={theme.palette.text.main} />}
                activeIcon={<CheckmarkSquareIcon color={theme.palette.text.main} />}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Counter>100</Counter>
                    <span style={{ marginLeft: 4 }}>
                        - Кастомный контент вместо текста
                    </span>
                </div>
            </DropdownItem>
        </Stack>
    );
};
CustomizationStory.storyName = 'Кастомизация';
CustomizationStory.argTypes = excludeProp([
    'children',
    'leftItem',
    'activeIcon',
    'state',
]);
