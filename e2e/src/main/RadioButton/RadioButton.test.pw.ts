// import { initTest } from '@e2e/test-utils/initTest';
// import { RadioButtonProps } from '@kit';
//
// const { test } = initTest<RadioButtonProps>('RadioButton');
//
// test('RadioButton', async ({ compareSnapshotsMap }) => {
//     await compareSnapshotsMap({
//         targetProps: {
//             checked: [false],
//             size: ['small', 'medium', 'large'],
//             color: ['secondary', 'success', 'info', 'warning', 'danger'],
//         },
//         commonProps: {
//             checked: true,
//             children: 'RadioButton',
//         },
//     });
//
//     await compareSnapshotsMap({
//         targetProps: {
//             disabled: [false],
//             hover: [true],
//             checked: [false],
//             color: ['secondary', 'success', 'info', 'warning', 'danger'],
//         },
//         commonProps: {
//             disabled: true,
//             checked: true,
//             children: 'RadioButton',
//         },
//         postfix: 'disabled',
//     });
//
//     await compareSnapshotsMap({
//         targetProps: {
//             checked: [false],
//             color: ['secondary', 'success', 'info', 'warning', 'danger'],
//         },
//         commonProps: {
//             checked: true,
//             children: 'RadioButton',
//         },
//         state: 'hover',
//         postfix: 'hover',
//     });
//
//     await compareSnapshotsMap({
//         targetProps: {
//             checked: [false],
//             color: ['secondary', 'success', 'info', 'warning', 'danger'],
//         },
//         commonProps: {
//             checked: true,
//             children: 'RadioButton',
//         },
//         state: 'focus',
//         postfix: 'focus',
//     });
// });
