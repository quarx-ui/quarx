export const matchIconName = (name: string) => (
    name.match(/^(\d{1,3}) +(Stroke|Fill)? +(Rounded|Square)? +\/ +ic_(?:\d{1,3}_)?(.*)$/)
);
