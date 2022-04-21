export function findNestedObj(entireObj:object, keyToFind:string, valToFind:string) {
  let foundObj: any;
  JSON.stringify(entireObj, (_, nestedValue) => {
    if (nestedValue && nestedValue[keyToFind] === valToFind) {
      foundObj = nestedValue;
    }
    return nestedValue;
  });
  return foundObj;
};
