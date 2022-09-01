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
import { CheckboxSelection } from '@kit/src/Checkbox/CheckboxSelection';
import { PathTypes } from '@e2e/constants';
import { Button, IconButton } from '@e2e/src/Button';
import { Badge } from '@e2e/src/Badge';
import { SwitcherSelection } from '@e2e/src/Switcher';
import { Selection } from '@e2e/src/Selection';
import { TextField } from '@e2e/src/TextField';
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
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
