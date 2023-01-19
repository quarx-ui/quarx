import path from 'path';
import { createComponent } from './src/creature';
import { getArgsFromCommand } from './src/command';
import { getArgsByPrompt } from './src/prompt';

const main = async (): Promise<void> => {
    const withArgs = process.argv.slice(2).length > 0;

    const args = withArgs
        ? await getArgsFromCommand()
        : await getArgsByPrompt();

    console.log('Обработка входящего запроса...');
    await createComponent({
        ...args,
        parent: args.parent || undefined,
    });
    console.log(`Компонент ${path.join(args.type, args.parent ?? '', args.name)} готов к использованию.`);
};

main().catch(console.log);
