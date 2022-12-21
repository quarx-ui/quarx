// import { initTest } from '@e2e/test-utils/initTest';
// import { SelectionProps } from '@kit';
//
// const { test } = initTest<SelectionProps>('Selection');
//
// test('Selection', async ({ compareSnapshotsMap }) => {
//     await compareSnapshotsMap({
//         targetProps: {
//             size: ['small', 'medium', 'large'],
//             disabled: [true],
//             reverse: [true],
//         },
//         commonProps: {
//             title: 'Selection',
//             subTitle: 'Subtitle',
//             rightAdornment: true,
//         },
//     });
//
//     await compareSnapshotsMap({
//         targetProps: {
//             styleHover: ['default', 'smooth'],
//         },
//         commonProps: {
//             title: 'Selection',
//         },
//         state: 'hover',
//         postfix: 'hover',
//     });
//
//     await compareSnapshotsMap({
//         targetProps: {
//             styleHover: ['default', 'smooth'],
//         },
//         commonProps: {
//             title: 'Selection',
//         },
//         state: 'focus',
//         postfix: 'focus',
//     });
// });
