import inquirer, { Question, QuestionCollection } from 'inquirer';
import { ComponentType, GenerateTestsTemplate } from './creature/constants';
import { isComponentType } from './creature/types';
import { CLIAnswers } from './types';

type IsError = (value: string) => string;

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
                value: ComponentType.main,
                name: 'Main (Является ui компонентом дизайн-системы и имеет дизайн-макет)',
            },
            {
                value: ComponentType.system,
                name: [
                    'System (Является техническим компонентом',
                    'дизайн-системы. Предназначен для разработки)',
                ].join(' '),
            },
        ],
        default: ComponentType.main,
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

export const getArgsByPrompt = async (): Promise<CLIAnswers> => {
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
        const rewrittenAnswers = await getArgsByPrompt();
        return rewrittenAnswers;
    }

    return answers;
};
