import { valuesFromHsb } from '.';

it(valuesFromHsb.name, () => {
    const hsb = { h: 300, s: 100, b: 7, a: 1 };

    expect(valuesFromHsb('hsb(300, 100, 7)')).toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300,100,7)')).toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300, 100,7, 1)')).toStrictEqual(hsb);

    hsb.a = 0.3;

    expect(valuesFromHsb('hsb(300, 100, 7, 0.3)')).toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300,100,7,0.3)')).toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300, 100,7,0.3)')).toStrictEqual(hsb);

    expect(valuesFromHsb('hsb(300, 8, 7, 0.3)')).not.toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300,100,8,0.3)')).not.toStrictEqual(hsb);
    expect(valuesFromHsb('hsb(300, 100,7,0.5)')).not.toStrictEqual(hsb);
});
