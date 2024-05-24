
export const shapeData = <T>(object: object, template: T) => {
  const shapedObject: T = {} as T

  console.log('shapedObject', shapedObject)

  for (const key in object) {
    // @ts-expect-error: to iterate over T it doesn't recognize as object
    if (key in template) {
      shapedObject[key] = object[key]
    }
  }

  return shapedObject
}
