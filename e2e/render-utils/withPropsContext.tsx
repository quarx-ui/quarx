import { FC } from 'react';
import { useProps } from '@e2e/utils/useProps';

export function withPropsContext<Props>(Component: FC<Props>): FC {
    return (props) => {
        const urlProps = useProps<Props>();
        const key = Date.now();
        return (
            <Component
                key={key}
                {...props}
                {...urlProps}
            />
        );
    };
}
