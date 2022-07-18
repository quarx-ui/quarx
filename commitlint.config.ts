import { UserConfig } from '@commitlint/types';
import lerna from './lerna.json';

const typesFromJson = lerna.command.version.changelogPreset.types;
const types = typesFromJson.map((type) => type.type);

const Configuration: UserConfig = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        bodyLeadingBlank: [2, 'always'],
        subjectEmpty: [2, 'always'],
        typeCheck: [2, 'always'],
    },
    plugins: [
        {
            rules: {
                typeCheck: ({ type }) => {
                    if (!type || type === '') {
                        return [
                            false,
                            'Тип коммита не может быть пустым',
                        ];
                    }
                    const typeIsCorrect = types.includes(type.toLowerCase());

                    if (typeIsCorrect && type !== type.toLowerCase()) {
                        return [
                            false,
                            'Тип коммита должен быть в нижнем регистре (lowercase)',
                        ];
                    }

                    return [
                        Boolean(typeIsCorrect),
                        `Тип коммита должен быть одним из следующих: ${types.join(', ')}`,
                    ];
                },
                subjectEmpty: ({ subject }) => {
                    if (!subject || subject === '') {
                        return [
                            false,
                            'Сообщение коммита не может быть пустым',
                        ];
                    }

                    const issueReg = /^(#\d+|[A-z]+-\d+)/g;
                    const clearSubject = subject
                        .replace(issueReg, '')
                        .replace(/(^\s?-\s?)/g, '');

                    return [
                        Boolean(clearSubject && clearSubject !== ''),
                        'Сообщение коммита не может быть пустым',
                    ];
                },
                bodyLeadingBlank: ({ raw, body }) => {
                    if (!body) { return [true]; }

                    const indexOfBody = raw.indexOf(`\n${body}`);
                    const bodyIsCorrect = raw[indexOfBody - 1] === '\n';

                    return [
                        bodyIsCorrect,
                        'body должен отделяться пустой строкой',
                    ];
                },
            },
        },
    ],
    defaultIgnores: true,
};

export default Configuration;
