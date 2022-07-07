import { UserConfig } from '@commitlint/types';
import lerna from './lerna.json';

const typesFromJson = lerna.command.version.changelogPreset.types;
const types = typesFromJson.map((type) => type.type);

const Configuration: UserConfig = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [0, 'always', 100],
        'footer-leading-blank': [0, 'always'],
        'footer-max-line-length': [0, 'always', 100],
        'header-max-length': [0, 'always', 100],
        'subject-case': [
            0,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [0, 'never', '.'],
        'type-case': [1, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', types],
    },
    defaultIgnores: true,
    prompt: {
        messages: {
            skip: ':пропустить',
            max: 'максимум %d символов',
            min: '%d символов минимум',
            emptyWarning: 'не может быть пустым',
            upperLimitWarning: 'выше лимита',
            lowerLimitWarning: 'ниже лимита',
        },
        questions: {
            type: {
                description: 'Выберите тип изменений, для которого предназначен коммит:',
                enum: {
                    figma: {
                        description: 'Выгрузка исходников из Figma (иконки, цвета, палитра, типографика и тп).',
                        title: 'Figma',
                        emoji: '💎',
                    },
                    feature: {
                        description: 'Добавление новой функциональности в библиотеку. '
                            + 'Это может быть новый компонент (функция) или доработка уже существующих.',
                        title: 'Features',
                        emoji: '✨',
                    },
                    feat: {
                        description: 'Добавление новой функциональности в библиотеку. '
                            + 'Это может быть новый компонент (функция) или доработка уже существующих.',
                        title: 'Features',
                        emoji: '✨',
                    },
                    bugfix: {
                        description: 'Исправление багов, ошибок и прочего.',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    fix: {
                        description: 'Исправление багов, ошибок и прочего.',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    tech: {
                        description: 'Изменения связанные с окружением производственного кода.',
                        title: 'Technical',
                        emoji: '📁',
                    },
                    docs: {
                        description: 'Изменения кода документации.',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    style: {
                        description: 'Изменение визуального отображения компонентов, без изменений в логике работы.',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    refactor: {
                        description: 'Изменение поведения компонента, либо внутренней организации кода в библиотеке.',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    perf: {
                        description: 'Производственных изменения, связанные с улучшением производительности.',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Добавление новых тестов или изменение существующих.',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    build: {
                        description: 'Изменения, связанные с системой сборки '
                            + '(включая сценарии, конфигурации или инструменты) и зависимостей пакетов.',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    chore: {
                        description: 'Используется lerna для генерации изменений в CHANGELOG и package.json.',
                        title: 'Chores',
                        emoji: '♻️',
                    },
                },
            },
            scope: {
                description:
                    'Необязательный параметр, описывающий область кодовой базы, в которую были внесены изменения.',
            },
            subject: {
                description:
                    'Краткое описание коммита, попадающий в CHANGELOG.',
            },
            body: {
                description: 'Подробное описание изменений.',
            },
            isBreaking: {
                description: 'Есть ли в коде какие-то критические изменения?',
            },
            breakingBody: {
                description:
                    'Для BREAKING CHANGE коммита необходимо тело. '
                    + 'Пожалуйста, введите более подробное описание самого коммита. '
                    + 'Не должно опираться на текст коммита, так как в CHANGELOG отображается отдельно.',
            },
            breaking: {
                description: 'Опишите критические изменения.',
            },
            isIssueAffected: {
                description: 'Влияет ли изменение на какую-либо открытую задачу?',
            },
            issuesBody: {
                description:
                    'Подробное описание изменений.',
            },
            issues: {
                description: 'Добавьте номер задачи (например: "fix: DSSX-321", "feat: PRMCA-123".)',
            },
        },
    },
};

export default Configuration;
