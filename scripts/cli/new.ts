import inquirer, { Answers, Question, QuestionCollection } from 'inquirer';
import path from 'path';
import { program } from 'commander';
import {
    ComponentType,
    createComponent,
    CreateComponentProps,
    GenerateTestsTemplate,
    isComponentType,
} from './src/components';

export type CLIAnswers = Answers & CreateComponentProps;

export type IsError = (value: string) => string;

const validations = (errors: IsError[]): Question['validate'] => (
    (value: string): boolean | string => {
        const result = errors.reduce<string[]>((acc, isError) => {
            const message = isError(value);
            return message.length === 0 ? acc : [...acc, message];
        }, []);
        return result.length === 0 ? true : result.join('; ');
    }
);

const testsChoices = [
    {
        value: GenerateTestsTemplate.yes,
        name: 'Да',
    },
    {
        value: GenerateTestsTemplate.only,
        name: 'Создать только шаблон тестов',
    },
    {
        value: GenerateTestsTemplate.no,
        name: 'Нет',
    },
];

const questions: QuestionCollection<CLIAnswers> = [
    {
        name: 'name',
        message: 'Введите имя компонента(например: Badge, ClickAwayListener и т.д.):',
        type: 'input',
        validate: validations([
            (v) => (
                v.length === 0 ? 'Поле не может быть пустым' : ''
            ),
            (v) => (
                !v.match(/^[A-Za-z]*$/)
                    ? 'Имя компонента может содержать только a-zA-Z'
                    : ''
            ),
        ]),
    },
    {
        name: 'type',
        message: 'Выберите тип компонента:',
        type: 'list',
        choices: [
            {
                value: ComponentType.styled,
                name: 'Styled (Компонент имеет стили и является ui компонентом дизайн-системы)',
            },
            {
                value: ComponentType.unstyled,
                name: [
                    'Unstyled (Компонент не имеет стилей и не является',
                    'ui компонентом дизайн-системы. Предназначен для разработки)',
                ].join(' '),
            },
        ],
        default: ComponentType.styled,
        validate: isComponentType,
    },
    {
        name: 'tests',
        message: 'Генерировать шаблон тестов?',
        type: 'list',
        choices: testsChoices,
    },
    {
        name: 'parent',
        message: [
            'Введите компонент, в директории которого нужно разместить генерируемый.',
            'Например: Button, Tabs/TabsDefault. Поддерживает вложенность.',
            'Компонент:',
        ].join('\n'),
        type: 'input',
        validate: validations([
            (v) => (
                !v.match(/^[A-Za-z/]*$/)
                    ? 'Поле может содержать только буквы и /'
                    : ''
            ),
        ]),
    },
];

const confirmQuestion: QuestionCollection = [{
    name: 'confirm',
    message: 'Все верно?',
    type: 'confirm',
}];

const getArgsByPrompt = async (): Promise<CLIAnswers> => {
    const answers = await inquirer.prompt(questions);

    const testsAnswer = testsChoices.find(
        (choice) => (
            choice.value === answers.tests
        ),
    )?.name;
    console.log([
        'Ваши ответы:',
        `Имя компонента: ${answers.name}`,
        `Тип компонента: ${answers.type}`,
        `Генерировать тесты? ${testsAnswer}`,
        `Родительский компонент: ${answers.parent || 'Отсутствует'}`,
    ].join('\n\t'));
    const confirmation = await inquirer.prompt(confirmQuestion);

    if (!confirmation.confirm) {
        return getArgsByPrompt();
    }

    return answers;
};

const getArgsFromCommand = async (): Promise<CLIAnswers> => {
    program.name('Создать новый компонент');
    program
        .description('CLI-скрипт для добавления нового компонента в репозиторий.\n'
            + 'Для выполнения в режиме вопрос-ответ можно запустить команду без аргументов: `yarn new`')
        .argument('<name>', 'Имя компонента')
        .option('-us, --unstyled', 'Компонент не имеет стилей и не является '
            + 'UI-компонентом дизайн-системы. Предназначен для разработки', false)
        .option('-t, --tests', 'Сгенерировать шаблоны тестов', false)
        .option('-tt, --tests-only', 'Сгенерировать только шаблоны тестов', false)
        .option('-p, --parent <string>', 'Имя компонента, в директории которого'
            + ' нужно разместить генерируемый компонент.\n'
            + 'Также поддерживает вложенность компонентов. Примеры: Button, Tabs/TabsDefault')
        .parse(process.argv);

    const [name] = program.args;
    const { unstyled, tests, testsOnly, parent } = program.opts();

    return ({
        name,
        type: unstyled ? ComponentType.unstyled : ComponentType.styled,
        // eslint-disable-next-line no-nested-ternary
        tests: tests ? GenerateTestsTemplate.yes : (
            testsOnly
                ? GenerateTestsTemplate.only
                : GenerateTestsTemplate.no
        ),
        parent,
    });
};

const main = async (): Promise<void> => {
    const withArgs = process.argv.slice(2).length > 0;

    const args = withArgs
        ? await getArgsFromCommand()
        : await getArgsByPrompt();

    console.log('Создание компонента...');
    await createComponent({
        ...args,
        parent: args.parent || undefined,
    });
    console.log(`Компонент ${path.join(args.type, args.parent ?? '', args.name)} создан.`);
};

main().catch(console.log);
