import { Story } from '@storybook/react/types-6-0';
import { Breadcrumbs, BreadcrumbsProps } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const CollapseStory: Story<BreadcrumbsProps> = (props) => (
    <Row>
        <Column>
            <Title>
                Отображение по умолчанию
            </Title>
            <Breadcrumbs
                {...props}
                collapse={false}
            />
        </Column>
        <Column>
            <Title>
                Предустановка по скрытию. При соблюдении условия
                <b> не менее 5 элементов. </b>
            </Title>
            <Breadcrumbs
                {...props}
                collapse
            />
        </Column>
        <Column>
            <Title>
                Кастомизация скрытия. В данном случае со 2 до 6 элементов.
                Скрытие определяется по
                <b> индексу элемента </b>
                в массиве.
            </Title>
            <Breadcrumbs
                {...props}
                collapse={{ start: 2, end: 6 }}
            />
        </Column>
    </Row>
);

setStoryParams(CollapseStory, {
    title: 'Скрытие промежуточных элементов',
    excludeArgs: ['collapse'],
});
