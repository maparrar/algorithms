/*
Generic Function for Array Manipulation

Create a generic function in TypeScript that takes an array of any type and a callback function as arguments.

The function should iterate through the array and call the callback function for each element.
The callback function should also be generic and accept the element type of the array.
The generic function should return a new array containing the results of applying the callback function to each element.
*/

export const mapArray = <T>(array: T[], callback: (element: T) => T) =>
  array.map(elem => callback(elem))
