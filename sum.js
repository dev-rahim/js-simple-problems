let numbers = [ 12, 52, 25, 63, 36, 85, 95, 45, 25 ];

/* let sum = 0;
for ( let i = 0; i < numbers.length; i++ ) {
    let element = numbers[ i ];
    sum = sum + element;
}
console.log( sum ); */

function getArraySum( array ) {
    let sum = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        let element = numbers[ i ];
        sum = sum + element;
    }
    return sum;
}

let arraySummetion = getArraySum( numbers );
console.log( 'Summetion is=', arraySummetion );