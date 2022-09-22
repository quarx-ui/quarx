import { program } from 'commander';
import { ComponentType, createComponent } from './src/components';

const main = async (): Promise<void> => {
    program.name('Component creator');
    program
        .option('<name>', 'Component name (Badge, ClickAwayListener)')
        .option('-ty, --type <string>', 'Component type (styled or unstyled)', 'unstyled')
        .option('-t, --tests <string>', 'Create tests? [+, only, undefined] ')
        .option('-p, --parent <string>', 'Parent component [Button, ..., undefined]: ')
        .parse(process.argv);

    const options = program.opts();
    await createComponent({
        name: program.args[0],
        type: options.type ?? ComponentType.styled,
        tests: options.tests,
        parent: options.parent,
    });
};

main().finally();
