var express = require( 'express' );
var app = express();
var formidable = require( 'formidable' );

// route for root request
app.get( '/', function( request, response ) {
    response.send( 'Hello World' );
} );

// use static middleware to server existing files
app.use( '/forms', express.static( __dirname + '/public' ) );
// console.log( __dirname + '/public' );

app.get( '/SubmitHelloGet', function( request, response ) {
    response.writeHead( 200, { 'content-type': 'text/html' } );
    response.write( 'Hello ' + request.query.userName + '!<br>' );
    response.end( 'Have a great day!' );
    console.log( 'Handled request from', request.query.userName );
} );

app.post( '/SubmitHelloPost', function( request, response ) {
    if ( request.method.toLocaleLowerCase() == 'post' ) {
        // parse form data
        var form = new formidable.IncomingForm();
        form.parse( request, function( err, fields ) {
            response.writeHead( 200, { 'content-type': 'text/html' } );
            response.write( 'Hello ' + fields.userName + '!<br />' );
            response.end( 'Have a POST great day!' );
            console.log( 'Handled request from', fields.userName );
        } );
    }
} );

// listener
var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );