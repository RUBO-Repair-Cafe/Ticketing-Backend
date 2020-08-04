export function updateObject<T>(original: T, values: Partial<T>): T{
  const workingCopy = Object.assign({}, original);
  for (const key in values) {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
      const element = values[key];
      if (element){
        workingCopy[key] = element;
      }
    }
  }

  return workingCopy;
}