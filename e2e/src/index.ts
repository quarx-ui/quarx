import { ReactNode } from 'react';
import {
    Checkbox,
    Counter,
    RadioButton,
    Switcher,
    valuesAsKeysFromArray,
} from '@kit';
import { ComponentsListTypes, PathTypes } from '@e2e/constants';
import { Button, IconButton } from './main/Button';
import { Badge } from './main/Badge';
import { TextField } from './main/TextField';
import { Modal } from './main/Modal';
import { Tabs } from './main/Tabs';
import { Link } from './main/Link';
import { SidePage } from './main/SidePage';
import { DatePicker, DatePickerAllowedDates, FrenchDatePicker } from './DatePicker';

type ComponentsType = Partial<Record<ComponentsListTypes, ReactNode>>

export const COMPONENTS: ComponentsType = {
    Badge,
    Button,
    IconButton,
    Checkbox,
    CheckboxSelection,
    Selection,
    RadioButton,
    Selection,
    Switcher,
    Tabs,
    TextField,
    SidePage,
    DatePicker,
    DatePickerAllowedDates,
    FrenchDatePicker,
} as const;

export const PATHS = valuesAsKeysFromArray(Object.keys(COMPONENTS)) as PathTypes;
