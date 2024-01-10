import { Story } from '@storybook/react/types-6-0';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import styled from '@emotion/styled';
import { Chips, ChipsProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 22,
});

const ColumnFlex = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
});

const ACTIVE_VARIANTS: boolean[] = [false, true];
const DISABLED_VARIANTS: boolean[] = [true];
export const BooleanParamsStory: Story<ChipsProps> = (props) => (
    <ColumnFlex>
        <ColumnFlex>
            <Title size="primary">Active</Title>
            <Flex>
                <ColumnFlex>
                    <Title>Elevation off</Title>
                    {DisplayVariants({
                        property: 'active',
                        values: ACTIVE_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: { ...props, elevation: false },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Elevation</Title>
                    {DisplayVariants({
                        property: 'active',
                        values: ACTIVE_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: { ...props, elevation: true },
                    })}
                </ColumnFlex>
            </Flex>
        </ColumnFlex>
        <br />
        <ColumnFlex>
            <Title size="primary">Disabled</Title>
            <Flex>
                <ColumnFlex>
                    <Title>Inactive & Elevation off</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: {
                            ...props,
                            active: false,
                            elevation: false,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Active & Elevation off</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: {
                            ...props,
                            active: true,
                            elevation: false,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Inactive & Elevation</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: {
                            ...props,
                            active: false,
                            elevation: true,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Active & Elevation</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Chips,
                        componentProps: {
                            ...props,
                            active: true,
                            elevation: true,
                        },
                    })}
                </ColumnFlex>
            </Flex>
        </ColumnFlex>
    </ColumnFlex>
);

setStoryParams(BooleanParamsStory, {
    title: 'Boolean параметры',
    excludeArgs: ['disabled', 'active', 'elevation'],
});
