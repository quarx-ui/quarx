import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, useBooleanState } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import styled from '@emotion/styled';

const WidthLimiter = styled('div')({
    width: 230,
});

export const EllipsisStory: Story<DropdownItemProps> = ({
    state: externalState = false,
    ...props
}) => {
    const [state, { toggleState }] = useBooleanState(externalState);
    return (
        <Row>
            <Column>
                <Title>False</Title>
                <WidthLimiter>
                    <DropdownItem
                        {...props}
                        title="Super puper duper delivery"
                        state={externalState || state}
                        onChange={toggleState}
                    />
                </WidthLimiter>
            </Column>
            <Column>
                <Title>True</Title>
                <WidthLimiter>
                    <DropdownItem
                        {...props}
                        title="Super puper duper delivery"
                        state={externalState || state}
                        onChange={toggleState}
                        ellipsis
                    />
                </WidthLimiter>
            </Column>
            <Column>
                <Title>Title: true</Title>
                <WidthLimiter>
                    <DropdownItem
                        {...props}
                        title="Super puper duper delivery"
                        state={externalState || state}
                        onChange={toggleState}
                        ellipsis={{ title: true }}
                    />
                </WidthLimiter>
            </Column>
            <Column>
                <Title>Description: true</Title>
                <WidthLimiter>
                    <DropdownItem
                        {...props}
                        title="Super puper duper delivery"
                        state={externalState || state}
                        onChange={toggleState}
                        ellipsis={{ description: true }}
                    />
                </WidthLimiter>
            </Column>
        </Row>
    );
};
EllipsisStory.storyName = 'Сокращения';
