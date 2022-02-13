let numbers = [ 12, 52, 6, 5, 95, 85, 10, 24, 500 ];

function getArrayBiggestNumner( array ) {
    let largest = array[ 0 ];
    for ( let i = 0; i < array.length; i++ ) {
        let element = array[ i ];
        if ( element > largest ) {
            largest = element;
        }
    }
    return largest;
}

let arrayBiggestNumber = getArrayBiggestNumner( numbers );
console.log( arrayBiggestNumber );

// get smallest number from an array 
function getArraySallestNumner( array ) {
    let largest = array[ 0 ];
    for ( let i = 0; i < array.length; i++ ) {
        let element = array[ i ];
        if ( element < largest ) {
            largest = element;
        }
    }
    return largest;
}

let arraySmallestNumber = getArraySallestNumner( numbers );
console.log( arraySmallestNumber );