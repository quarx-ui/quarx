type PropsType = Record<string, string | boolean | number>;

interface UrlOptions {
    component: string;
    story?: string;
    props?: PropsType;
}

const reducePropsToURLString = (props?: PropsType) => {
    if (!props) {
        return '';
    }

    const keysOfProps = Object.keys(props);
    const valuesOfProps = Object.values(props);

    if (keysOfProps.length > 1) {
        return keysOfProps.reduce((prev, cur) => {
            const currentProp = `${cur}:${props[cur]}`;
            return `${prev};${currentProp}`;
        });
    }
    return `${keysOfProps[0]}:${valuesOfProps[0]}`;
};

export function storyUrl(options: UrlOptions) {
    const { component, story = 'sandbox', props } = options;
    const reducedProps = reducePropsToURLString(props);

    return `?path=/story/core-${component}--${story}&args=${reducedProps}`;
}
