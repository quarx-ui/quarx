import { Story } from '@storybook/react/types-6-0';
import { StoryButton } from '@core/storybook/components';
import { DelayedMounterProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { FlexContainer, useDelayedMounterStoryState, createDelayedMounter } from '../components';

export const SandboxStory: Story<DelayedMounterProps> = ({
    disableTimeout,
    timeout = disableTimeout ? 0 : 250,
    ...props
}) => {
    const delayedMounter = useDelayedMounterStoryState(timeout ?? 250);

    return (
        <FlexContainer>
            <StoryButton
                loading={delayedMounter.isUnmounting}
                onClick={() => delayedMounter.setMounted((prevState) => !prevState)}
            >
                default
            </StoryButton>
            {createDelayedMounter({
                timeout,
                mounted: delayedMounter.mounted,
                leftTime: delayedMounter.leftTime,
                timerId: delayedMounter.timerId,
                setLeftTime: delayedMounter.setLeftTime,
                setIsUnmounting: delayedMounter.setIsUnmounting,
                ...props,
            })}
        </FlexContainer>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
