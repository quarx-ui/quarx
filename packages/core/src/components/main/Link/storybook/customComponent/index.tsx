/* eslint-disable @typescript-eslint/no-explicit-any,no-alert,jsx-a11y/anchor-is-valid */
import { FC, Fragment } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Link, LinkProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

const RouterLink:FC<any> = ({ to, ...props }) => (
    <span onClick={() => alert(`Переход по адресу: ${to}`)} {...props} />
);

export const CustomComponentStory: StoryFn<LinkProps> = (_) => (
    <Fragment>
        <Link
            component={RouterLink}
            to="/something"
            color="brand"
            size="XL"
        >
            Router-ссылка
        </Link>
        <Link
            component="button"
            color="secondary"
            size="XL"
            styles={{
                root: {
                    marginLeft: 24,
                    padding: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                },
            }}
        >
            Ссылка-кнопка
        </Link>
    </Fragment>
);

setStoryParams(CustomComponentStory, {
    title: 'Свой тег/компонент',
    description,
});
