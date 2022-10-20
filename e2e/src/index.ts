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
import { Button, IconButton } from './Button';
import { Badge } from './Badge';
import { SwitcherSelection } from './Switcher';
import { Selection } from './Selection';
import { TextField } from './TextField';
import { Modal } from './Modal';
import { CheckboxSelection } from './Checkbox';
import { Tabs } from './Tabs';
import { Link } from './Link';

type ComponentsListTypes = keyof ComponentsProps
type ComponentsType = Partial<Record<ComponentsListTypes, ReactNode>>

export const COMPONENTS: ComponentsType = {
    Button,
    IconButton,
    Badge,
    Counter,
    Switcher,
    SwitcherSelection,
    Checkbox,
    CheckboxSelection,
    Selection,
    RadioButton,
    RadioButtonSelection,
    TextField,
    Link,
    Tabs,
    Modal,
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
