import { Story } from '@storybook/react/types-6-0';
import { DelayedMounterProps } from '@core';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { FlexRow, FlexContainer, createDelayedMounter, useDelayedMounterStoryState } from '../components';

export const DisableTimeoutStory: Story<DelayedMounterProps> = ({
    timeout = 250,
    ...props
}) => {
    const noDelayedMounter = useDelayedMounterStoryState(timeout);
    const smallDelayedMounter = useDelayedMounterStoryState(timeout);

    return (
        <FlexRow>
            <FlexContainer>
                <StoryButton
                    loading={noDelayedMounter.isUnmounting}
                    onClick={() => noDelayedMounter.setMounted((prevState) => !prevState)}
                >
                    default
                </StoryButton>
                {createDelayedMounter({
                    ...props,
                    timeout,
                    mounted: noDelayedMounter.mounted,
                    leftTime: noDelayedMounter.leftTime,
                    timerId: noDelayedMounter.timerId,
                    setLeftTime: noDelayedMounter.setLeftTime,
                    setIsUnmounting: noDelayedMounter.setIsUnmounting,
                })}
            </FlexContainer>
            <FlexContainer>
                <StoryButton
                    loading={smallDelayedMounter.isUnmounting}
                    onClick={() => smallDelayedMounter.setMounted((prevState) => !prevState)}
                >
                    disableTimeout
                </StoryButton>
                {createDelayedMounter({
                    ...props,
                    timeout,
                    disableTimeout: true,
                    mounted: smallDelayedMounter.mounted,
                    leftTime: smallDelayedMounter.leftTime,
                    timerId: smallDelayedMounter.timerId,
                    setLeftTime: smallDelayedMounter.setLeftTime,
                    setIsUnmounting: smallDelayedMounter.setIsUnmounting,
                })}
            </FlexContainer>
        </FlexRow>
    );
};

setStoryParams(DisableTimeoutStory, {
    title: 'Отключение задержки',
    excludeArgs: ['timeout', 'mounted', 'disableTimeout'],
});
