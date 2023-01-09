import { getURLFromProps } from '@e2e/utils';
import { FC } from 'react';
import { Button } from '@kit';
import { Link } from 'react-router-dom';
import { ComponentsListTypes, PropValueType } from '@e2e/constants';
import { PATHS } from '@e2e/src';

export const NavButtons: FC<{ renderProps: Record<string, PropValueType>; component: ComponentsListTypes }> = ({
    renderProps,
    component,
}) => (
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
            to={getURLFromProps(PATHS[component], renderProps)}
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
