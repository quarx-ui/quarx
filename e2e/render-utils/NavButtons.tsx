import { getURLFromProps } from '@e2e/utils';
import { FC } from 'react';
import { Button, useTheme } from '@kit';
import { Link } from 'react-router-dom';
import { PropValueType, ComponentsListTypes } from '@e2e/constants';
import { PATHS } from '@e2e/src';

export const NavButtons: FC<{ renderProps: Record<string, PropValueType>; component: ComponentsListTypes }> = ({
    renderProps,
    component,
}) => {
    const themeType = useTheme().palette.type;
    return (
        <div style={{ display: 'flex', marginBottom: 10 }}>
            <Link
                to="/"
                style={{ textDecoration: 'none', marginRight: 20 }}
            >
                <Button
                    size="small"
                    borderRadius="xSmall"
                >
                    Home
                </Button>
            </Link>
            <Link
                to={getURLFromProps(PATHS[component], themeType, renderProps)}
                style={{ textDecoration: 'none' }}
            >
                <Button
                    size="small"
                    borderRadius="xSmall"
                >
                    Render
                </Button>
            </Link>
        </div>
    );
};
