import { ReactNode } from 'react';
import {
    Checkbox,
    ComponentsProps,
    Counter,
    RadioButton,
    RadioButtonSelection,
    Switcher,
    valuesAsKeysFromArray,
} from '@kit';
import { PathTypes } from '@e2e/constants';
import { Button, IconButton } from './main/Button';
import { Badge } from './main/Badge';
import { SwitcherSelection } from './main/Switcher';
import { Selection } from './main/Selection';
import { TextField } from './main/TextField';
import { Modal } from './main/Modal';
import { CheckboxSelection } from './main/Checkbox';
import { Tabs } from './main/Tabs';
import { Link } from './main/Link';

type ComponentsListTypes = keyof ComponentsProps
type ComponentsType = Partial<Record<ComponentsListTypes, ReactNode>>

export const COMPONENTS: ComponentsType = {
    Badge,
    Button,
    IconButton,
    Checkbox,
    CheckboxSelection,
    Counter,
    Link,
    Modal,
    RadioButton,
    RadioButtonSelection,
    Selection,
    Switcher,
    Tabs,
    TextField,
    SwitcherSelection,
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
