import { ReactNode } from 'react';
import {
    ComponentsProps,
    Counter,
    RadioButton,
    Switcher,
    valuesAsKeysFromArray,
} from '@kit';
import { PathTypes } from '@e2e/constants';
import { Button, IconButton } from './main/Button';
import { Badge } from './main/Badge';
import { Checkbox } from './main/Checkbox';
import { TextField } from './main/TextField';
import { Modal } from './main/Modal';
import { Tabs } from './main/Tabs';
import { Link } from './main/Link';
import { SidePage } from './main/SidePage';

type ComponentsListTypes = keyof ComponentsProps
type ComponentsType = Partial<Record<ComponentsListTypes, ReactNode>>

export const COMPONENTS: ComponentsType = {
    Badge,
    Button,
    IconButton,
    Checkbox,
    Counter,
    Link,
    Modal,
    RadioButton,
    Selection,
    Switcher,
    Tabs,
    TextField,
    SidePage,
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
