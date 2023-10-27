import { Story } from '@storybook/react/types-6-0';
import { Breadcrumbs, BreadcrumbsProps, BreadCrumbVisualProps, focusable } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { FC, forwardRef } from 'react';
import { CustomComponent } from '@core/storybook/components/CustomComponent';

const BreadcrumbComponent: FC<BreadCrumbVisualProps> = forwardRef<HTMLButtonElement, BreadCrumbVisualProps>(({
    value,
    onClick,
    children,
}, ref) => (
    <CustomComponent
        ref={ref}
        data-value={value}
        onClick={onClick}
        tabIndex={focusable(true)}
    >
        {children}
    </CustomComponent>
));

export const CustomizationStory: Story<BreadcrumbsProps> = ({
    collapse = true,
    ...props
}) => (
    <Row>
        <Column>
            <Title>
                Кастомизация Breadcrumb компонента
            </Title>
            <Breadcrumbs
                {...props}
                collapse={collapse}
                BreadcrumbComponent={BreadcrumbComponent}
            />
        </Column>
        <Column>
            <Title>
                Кастомизация DroppedBreadcrumb компонента
            </Title>
            <Breadcrumbs
                {...props}
                collapse={collapse}
                DroppedBreadcrumbComponent={BreadcrumbComponent}
            />
        </Column>
        <Column>
            <Title>
                Кастомизация троеточия
            </Title>
            <Breadcrumbs
                {...props}
                collapse={collapse}
                EllipsisBreadcrumbComponent={BreadcrumbComponent}
            />
        </Column>
    </Row>
);

setStoryParams(CustomizationStory, {
    title: 'Пользовательское отображение',
    excludeArgs: [
        'collapse',
        'BreadcrumbComponent',
        'DroppedBreadcrumbComponent',
        'EllipsisBreadcrumbComponent',
    ],
});
