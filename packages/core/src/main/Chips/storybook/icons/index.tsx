import { Story } from '@storybook/react/types-6-0';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Chips, CHIPS_VARIANT, ChipsProps, QX_SIZE } from '@core';
import { DocumentIcon } from '@quarx-ui/icons/src/document/24px/stroke/rounded';
import { TrashBinIcon } from '@quarx-ui/icons/src/trash-bin/24px/stroke/rounded';
import { CheckmarkCircleIcon } from '@quarx-ui/icons/src/checkmark-circle/24px/fill/rounded';
import { excludeProp } from '@core/storybook/templateParams';
import styled from '@emotion/styled';

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

export const IconsStory: Story<ChipsProps> = (props) => (
    <Flex>
        <ColumnFlex>
            <Title size="primary">Default icons</Title>
            {DisplayVariants({
                property: 'variant',
                values: Object.values(CHIPS_VARIANT),
                title: { isShown: true, size: 'secondary', type: 'value' },
                component: Chips,
                componentProps: {
                    ...props,
                    size: QX_SIZE.medium,
                    leftIcon: undefined,
                    rightIcon: true,
                },
            })}
        </ColumnFlex>
        <ColumnFlex>
            <Title size="primary">Custom icons</Title>
            {DisplayVariants({
                property: 'variant',
                values: Object.values(CHIPS_VARIANT),
                title: { isShown: true, size: 'secondary', type: 'value' },
                component: Chips,
                componentProps: {
                    ...props,
                    size: QX_SIZE.medium,
                    rotateRightIcon: false,
                    leftIcon: <DocumentIcon />,
                    rightIcon: <TrashBinIcon />,
                },
            })}
        </ColumnFlex>
        <ColumnFlex>
            <Title size="primary">
                Active state icon
            </Title>
            <Flex>
                <div>
                    <Title size="secondary">
                        active: false
                    </Title>
                    <Chips
                        {...props}
                        active={false}
                        activeStateIcon={<CheckmarkCircleIcon />}
                        elevation
                        leftIcon={undefined}
                    >
                        chips
                    </Chips>
                </div>
                <div>
                    <Title size="secondary">
                        active: true
                    </Title>
                    <Chips
                        {...props}
                        active
                        activeStateIcon={<CheckmarkCircleIcon />}
                        elevation
                        leftIcon={undefined}
                    >
                        chips
                    </Chips>
                </div>
            </Flex>
        </ColumnFlex>
    </Flex>
);
IconsStory.storyName = 'Иконки';
IconsStory.argTypes = excludeProp([
    'leftIcon',
    'rightIcon',
    'size',
    'variant',
    'rotateRightIcon',
]);
