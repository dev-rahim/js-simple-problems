let first = 4;
let second = 6;
console.log( first, second );
// first approach
/*
let temp = first;
first = second;
second = temp;
console.log( first, second );
*/
// js destructuring 
[ first, second ] = [ second, first ];
console.log( first, second );

