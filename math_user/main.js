var math_example = require( 'math_example' );
var log = require( 'logcl' );

var result = 0;

log.cl();
result = math_example.addition( 5, 10 );
console.log( 'addition(5, 10) =', result );

log.cl();
result = math_example.subtraction( 50, 10 );
console.log( 'subtraction(50,10 =', result );

log.cl();
result = math_example.multiplication( 3, 7 );
console.log( 'multiplication(7,3) =', result );

log.cl();
result = math_example.division( 27, 3 );
console.log( 'division(27,3) =', result );

log.cl();
result = math_example.fibonacci( 3 );
console.log( 'fibonacci(3) =', result );

log.cl();
log.cl( 'done!' );