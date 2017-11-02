const http = require( 'http' );
var port = 8080;

http.createServer( function( request, response ) {
    response.writeHead( 200, { 'Content-Type': 'text/plain' } );
    response.end( 'Hello World from Node.js!\n' );
    console.log( 'Handled request' );
} ).listen( port, 'localhost', function() {
    console.log( 'Server running at http://localhost:%d/', port );
} );

