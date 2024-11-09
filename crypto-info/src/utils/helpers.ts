export const mapParams = (path: string, values: Record<string, string>) => {
  return Object.keys(values).reduce((acc, key) => {
    const updatedPath = acc.replaceAll(`:${key}`, values[key]);
    return updatedPath;
  }, path);
};
