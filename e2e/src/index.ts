import { ReactNode } from 'react';
import {
    Checkbox,
    Counter,
    RadioButton,
    RadioButtonSelection,
    Switcher,
    valuesAsKeysFromArray,
} from '@kit';
import { ComponentsListTypes, PathTypes } from '@e2e/constants';
import { Button, IconButton } from './Button';
import { Badge } from './Badge';
import { SwitcherSelection } from './Switcher';
import { Selection } from './Selection';
import { TextField } from './TextField';
import { Modal } from './Modal';
import { CheckboxSelection } from './Checkbox';
import { Tabs } from './Tabs';
import { Link } from './Link';
import { DatePicker, DatePickerAllowedDates, FrenchDatePicker } from './DatePicker';

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
    DatePicker,
    DatePickerAllowedDates,
    FrenchDatePicker,
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
