import styled from '@emotion/styled';
import { ArrowGraphIcon } from '@quarx-ui/icons/src/arrow-graph/36px/stroke/rounded';
import { BuildingsIcon } from '@quarx-ui/icons/src/buildings/36px/stroke/rounded';
import { CirclesOnCircleIcon } from '@quarx-ui/icons/src/circles-on-circle/36px/stroke/rounded';

export const Title = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    fontSize: 20,
    margin: '12px auto',
});

export const iconItems = [
    { label: <ArrowGraphIcon />, value: 'graph' },
    { label: <BuildingsIcon />, value: 'buildings' },
    { label: <CirclesOnCircleIcon />, value: 'circles' },
];
