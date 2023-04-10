import { Story } from '@storybook/react/types-6-0';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { SNACKBAR_COLORS, SNACKBARS_LEFT_ITEMS } from '../styles';
import { Snackbar, SnackbarProps } from '..';

interface StorySnackbarProps extends SnackbarProps {
    descriptionShown: boolean;
}

const defaultArgs: StorySnackbarProps = {
    title: 'Title',
    description: 'Description',
    color: SNACKBAR_COLORS.default,
    leftItem: SNACKBARS_LEFT_ITEMS.timer,
    initialTimerValue: 5,
    disableTimer: true,
    pauseOnHover: true,
    descriptionShown: true,
    size: 'large',
    alert: false,
    background: 'main',
    elevation: 'medium',
    PrimaryButtonProps: {
        children: 'Primary',
    },
    SecondaryButtonProps: {
        children: 'Secondary',
    },
};

export default {
    title: STORY_PATHS.core.components.main('Snackbar'),
    component: Snackbar,
    argTypes: {
        title: {},
        description: {},
        descriptionShown: {
            description: 'Скрыть/Показать описание.<br><small>Доступно только для демонстрации</small>',
        },
        color: {},
        leftItem: {
            control: {
                type: 'radio',
                options: Object.keys(SNACKBARS_LEFT_ITEMS),
            },
        },
        initialTimerValue: {},
        disableTimer: {},
        onClose: {},
        pauseOnHover: {},
        ...defineCategory('Внутренние компоненты', {
            PrimaryButtonProps: {},
            SecondaryButtonProps: {},
            TimerProps: {},
            LeftItemProps: {},
            BodyProps: {},
            ActionButtonProps: {},
            CloseButtonProps: {},
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
        design: { disable: true },
    },
    args: defaultArgs,
};

export const Sandbox: Story<StorySnackbarProps> = ({
    descriptionShown = true,
    description,
    ...props
}) => (
    <Snackbar
        description={descriptionShown ? description : undefined}
        {...props}
    />
);

Sandbox.storyName = 'Компонент';
