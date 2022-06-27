export const sortProps = (obj: any, keys: string[]) => {
  keys.forEach((key) => {
    obj[key] = obj[key]?.sort((a: any, b: any) => a.name.localeCompare(b.name));
  });
  return obj;
};

export const defaultHeadConfig = {
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1",
};
