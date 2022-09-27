import inquirer, { Answers, Question, QuestionCollection } from 'inquirer';
import path from 'path';
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

const main = async (): Promise<void> => {
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
        await main();
        return;
    }

    console.log('Создание компонента...');
    await createComponent({
        ...answers,
        parent: answers.parent || undefined,
    });
    console.log(`Компонент ${path.join(answers.type, answers.parent ?? '', answers.name)} создан.`);
};

main().finally();
