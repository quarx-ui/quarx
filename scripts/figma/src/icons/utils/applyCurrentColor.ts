export const applyCurrentColor = (svgData: string): string => {
    const regExpToFindFilledColors = /(?<=fill=")(?!none)([\s\S]+?)(?=")/g;
    const colorsInCurSvgArr = svgData.match(regExpToFindFilledColors);
    const isEqualColors = Array.isArray(colorsInCurSvgArr)
            && colorsInCurSvgArr.reduce((acc, curItem, indexReduce) => {
                if (acc && indexReduce !== 0) {
                    return curItem === colorsInCurSvgArr[indexReduce - 1];
                } return indexReduce === 0;
            }, true);
    if (isEqualColors) {
        return svgData.replace(regExpToFindFilledColors, 'currentColor');
    }
    return svgData;
};
