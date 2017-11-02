var http = require( 'http' );
var url = require( 'url' );
var port = 8080;

http.createServer( function( request, response ) {
    var url_parts = url.parse( request.url, true );
    console.log( url_parts ); 

    var name = url_parts.query.name;
    response.writeHead( 200, { 'content-type': 'text/plain' } );
    response.end( 'Hello ' + name + '!\n' );
    console.log( 'Handled request from ' + name );
} ).listen( port, 'localhost', function() {
    console.log( 'Server running at http://localhost:%d/', port );
});

// http://localhost:8080/?name=James