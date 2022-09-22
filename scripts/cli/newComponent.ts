/* eslint-disable @typescript-eslint/no-var-requires */
import { createComponent } from './src/components';

const reader = require('readline-sync');

const main = async (): Promise<void> => {
    const name = reader.question('Component name [Badge, ClickAwayListener...]: ');
    const type = reader.question('Component type [styled, unstyled]: ');
    const tests = reader.question('Create tests? [+, only, undefined] ');
    const parent = reader.question('Parent component[ParentComponentName (Button, ...), undefined]: ');
    await createComponent({ type, name, tests, parent });
};

main().finally();
