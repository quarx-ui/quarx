/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';
import { createComponent } from './src/components';

const reader = require('readline-sync');

const yesNoMap: Record<string, boolean> = {
    yes: true,
    no: false,
    y: true,
    n: false,
};

const clearLastLines = (count: number) => {
    process.stdout.moveCursor(0, -count);
    process.stdout.clearScreenDown();
};

const main = async (): Promise<void> => {
    const name = reader.question(
        '1. Введите имя компонента\n '
        + `${chalk.gray('Например: Avatar, Button, и т.д.')}\n`
        + `${chalk.blueBright('>')} `,
    );

    clearLastLines(2);

    console.log(`${chalk.blueBright('>')} ${name}\n`);

    const styledAns: string = reader.question(
        '2. Компонент содержит стили?\n'
        + `${chalk.gray('Варианты ответа: yes/no, y/n. По умолчанию: yes')}\n`
        + `${chalk.blueBright('>')} `,
    ).toLowerCase();

    clearLastLines(2);

    const styled = yesNoMap[styledAns] ?? true;

    console.log(`${chalk.blueBright('>')} ${({ true: 'Да', false: 'Нет' })[`${styled}`]}\n`);

    const testsAns: string = reader.question(
        '3. Сгенерировать шаблоны тестов?\n'
        + `${chalk.gray('Варианты ответа:\n'
            + '• yes/y – Да\n'
            + '• no/n – Нет\n'
            + '• only – Создать только шаблоны тестов \n'
            + 'По умолчанию: no')}\n`
        + `${chalk.blueBright('>')} `,
    ).toLowerCase();

    const tests = yesNoMap[testsAns.trim() || 'no'] ?? testsAns;

    clearLastLines(6);

    console.log(`${chalk.blueBright('>')} ${({ true: 'Да', false: 'Нет' })[`${tests}`] ?? tests}\n`);

    // const parent = reader.question('Parent component[ParentComponentName (Button, ...), undefined]: ');
    // await createComponent({ type, name, tests, parent });
};

main().finally();
