import { binarySearch } from './binarysearch.js';

const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let index = binarySearch(23, values);
console.log(`Talet fundet på ${index}`);