import { Story } from '@storybook/react/types-6-0';
import { DelayedMounterProps } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryButton } from '@core/storybook/components';
import { excludeProp } from '@core/storybook/templateParams';
import timeoutDescription from './description.md';
import { FlexContainer, createDelayedMounter, useDelayedMounterStoryState, FlexRow } from '../components';

export const TimeoutStory: Story<DelayedMounterProps> = ({
    ...props
}) => {
    const smallTimeout = 250;
    const mediumTimeout = 1000;
    const largeTimeout = 3000;
    const smallDelayedMounter = useDelayedMounterStoryState(smallTimeout);
    const mediumDelayedMounter = useDelayedMounterStoryState(mediumTimeout);
    const largeDelayedMounter = useDelayedMounterStoryState(largeTimeout);

    return (
        <FlexRow>
            <FlexContainer>
                <StoryButton
                    loading={smallDelayedMounter.isUnmounting}
                    onClick={() => smallDelayedMounter.setMounted((prevState) => !prevState)}
                >
                    {smallTimeout}
                </StoryButton>
                {createDelayedMounter({
                    ...props,
                    timeout: smallTimeout,
                    mounted: smallDelayedMounter.mounted,
                    leftTime: smallDelayedMounter.leftTime,
                    timerId: smallDelayedMounter.timerId,
                    setLeftTime: smallDelayedMounter.setLeftTime,
                    setIsUnmounting: smallDelayedMounter.setIsUnmounting,
                })}
            </FlexContainer>
            <FlexContainer>
                <StoryButton
                    loading={mediumDelayedMounter.isUnmounting}
                    onClick={() => mediumDelayedMounter.setMounted((prevState) => !prevState)}
                >
                    {mediumTimeout}
                </StoryButton>
                {createDelayedMounter({
                    ...props,
                    timeout: mediumTimeout,
                    mounted: mediumDelayedMounter.mounted,
                    leftTime: mediumDelayedMounter.leftTime,
                    timerId: mediumDelayedMounter.timerId,
                    setLeftTime: mediumDelayedMounter.setLeftTime,
                    setIsUnmounting: mediumDelayedMounter.setIsUnmounting,
                })}
            </FlexContainer>
            <FlexContainer>
                <StoryButton
                    loading={largeDelayedMounter.isUnmounting}
                    onClick={() => largeDelayedMounter.setMounted((prevState) => !prevState)}
                >
                    {largeTimeout}
                </StoryButton>
                {createDelayedMounter({
                    ...props,
                    timeout: largeTimeout,
                    mounted: largeDelayedMounter.mounted,
                    leftTime: largeDelayedMounter.leftTime,
                    timerId: largeDelayedMounter.timerId,
                    setLeftTime: largeDelayedMounter.setLeftTime,
                    setIsUnmounting: largeDelayedMounter.setIsUnmounting,
                })}
            </FlexContainer>
        </FlexRow>
    );
};

TimeoutStory.storyName = 'Продолжительность';
TimeoutStory.argTypes = excludeProp(['timeout', 'mounted']);
TimeoutStory.parameters = createStoryDescription(timeoutDescription);
