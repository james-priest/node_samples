var http = require( 'http' );
var url = require( 'url' );
var port = 8080;

function start() {
    http.createServer( function( request, response ) {
        var url_parts = url.parse( request.url, true );
        console.log( url_parts );

        response.writeHead( 200, { 'content-type': 'text/plain' } );
        response.end( 'Hello ' + url_parts.query.name + '!\n' );
        console.log( 'Handled request from ' + url_parts.query.name );
    } ).listen( port, 'localhost', function() {
        console.log( 'Server running at http://localhost:' + port + "/" );
    } );
}

exports.start = start;