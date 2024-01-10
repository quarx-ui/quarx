import { Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbProps } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const booleans = [false, true];

export const BooleanParamsStory: Story<BreadcrumbProps> = (props) => (
    <Row>
        <Column>
            <Title>
                disableFocus
            </Title>
            <Row>
                {booleans.map((value) => (
                    <Column key={String(value)}>
                        <Title>{String(value)}</Title>
                        <Row>
                            <Breadcrumb
                                {...props}
                                type="link"
                                disableFocus={value}
                            />
                            <Breadcrumb
                                {...props}
                                type="contained"
                                disableFocus={value}
                            />
                        </Row>
                    </Column>
                ))}
            </Row>
        </Column>
    </Row>
);

setStoryParams(BooleanParamsStory, {
    title: 'Boolean параметры',
    excludeArgs: ['type', 'disableFocus'],
});
