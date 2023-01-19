import { program } from 'commander';
import { ComponentType, GenerateTestsTemplate } from './creature/constants';
import { CLIAnswers } from './types';

const parseTestArgument = (
    tests: boolean,
    testsOnly: boolean,
): GenerateTestsTemplate => {
    if (tests) {
        return GenerateTestsTemplate.yes;
    }

    return testsOnly
        ? GenerateTestsTemplate.only
        : GenerateTestsTemplate.no;
};

export const getArgsFromCommand = async (): Promise<CLIAnswers> => {
    program.name('Создать новый компонент');
    program
        .description('CLI-скрипт для добавления нового компонента в репозиторий.\n'
            + 'Для выполнения в режиме вопрос-ответ можно запустить команду без аргументов: `yarn new`')
        .argument('<name>', 'Имя компонента')
        .option('-s, --system', 'System (Является техническим компонентом '
            + 'дизайн-системы. Предназначен для разработки)', false)
        .option('-t, --tests', 'Сгенерировать шаблоны тестов', false)
        .option('-tt, --tests-only', 'Сгенерировать только шаблоны тестов', false)
        .option('-p, --parent <string>', 'Имя компонента, в директории которого'
            + ' нужно разместить генерируемый компонент.\n'
            + 'Также поддерживает вложенность компонентов. Примеры: Button, Tabs/TabsDefault')
        .parse(process.argv);

    const [name] = program.args;
    const { system, tests, testsOnly, parent } = program.opts();

    return ({
        name,
        type: system ? ComponentType.system : ComponentType.main,
        tests: parseTestArgument(tests, testsOnly),
        parent,
    });
};
