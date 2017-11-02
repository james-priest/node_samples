var express = require( 'express' );
var app = express();
var formidable = require( 'formidable' );
var math = require( 'math_example' );

app.use( express.static( __dirname + '/public' ) );

app.get( '/addition', function( request, response ) {
    var x = Number( request.query.x ),
        y = Number( request.query.y ),
        result = math.addition( x, y );
    
    response.writeHead( 200, { 'content-type': 'application/json' } );
    response.end( '{ "result": "' + result + '" }' );
    console.log( 'Handled addition request for x=' + x + ' : y=' + y );
} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );

// http://localhost:8080/addition?x=5&y=10