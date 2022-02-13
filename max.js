const business = 1650;
const minister = 850;
const army = 900;
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('minister er pola is bigger');
// }

function findLargest( first, second ) {
    if ( first > second ) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest( 154, 241 );
console.log( 'largest is', largest )

// compare 3
/* if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
} */


var max = Math.max( business, minister, army );
// console.log('largest is', max);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three
function getBiggest( num1, num2, num3 ) {
    if ( num1 > num2 && num1 > num3 ) {
        return num1;
    }
    else if ( num2 > num1 && num2 > num3 ) {
        return num2;
    } else {
        return num3;
    }
}

const getBiggestNumbeer = getBiggest( 50, 480, 100 );
console.log( getBiggestNumbeer );

// Task 2: Write a function to find the smallest of three numbers.
function getSmallest( num1, num2, num3 ) {
    if ( num1 < num2 && num1 < num3 ) {
        return num1;
    }
    else if ( num2 < num1 && num2 < num3 ) {
        return num2;
    } else {
        return num3;
    }
}

const getSmallestNumbeer = getSmallest( 50, 480, 100 );
console.log( getSmallestNumbeer );