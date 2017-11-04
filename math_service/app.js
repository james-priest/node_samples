var express = require( 'express' );
var app = express();
var formidable = require( 'formidable' );
var math = require( 'math_example' );

app.use( express.static( __dirname + '/public' ) );

app.get( '/addition', function( request, response ) {
    var x = +request.query.x,
        y = +request.query.y,
        result = math.addition( x, y );
    
    response.writeHead( 200, { 'content-type': 'application/json' } );
    response.end( '{ "result": "' + result + '" }' );
    console.log( 'Handled addition request for x=' + x + ' : y=' + y );
} );

app.post( '/subtraction', function( request, response ) {
    var form = new formidable.IncomingForm();
    form.parse( request, function( err, fields ) {
        var x = Number(fields.x),
            y = Number(fields.y),
            result = math.subtraction( x, y );
    
        response.writeHead( 200, { 'content-type': 'application/json' } );
        response.end( '{ "result": "' + result + '" }' );
        console.log( 'Handled subtraction request for x=' + x + ' : y=' + y );
    } );
} );

app.put( '/multiplication', function( request, response ) {
    var form = new formidable.IncomingForm();
    form.parse( request, function( err, fields ) {
        var x = +fields.x,
            y = +fields.y,
            result = math.multiplication( x, y );
        
        response.writeHead( 200, { 'content-type': 'application/json' } );
        response.end( '{ "result": "' + result + '" }' );
        console.log( 'Handled multiplication request for x=' + x + ' : y=' + y );
    } );
} );

app.delete( '/division', function( request, response ) {
    var form = new formidable.IncomingForm();
    form.parse( request, function( err, fields ) {
        var x = +fields.x,
            y = +fields.y,
            result = math.division( x, y );
        
        response.writeHead( 200, { 'content-type': 'application/json' } );
        response.end( '{ "result": "' + result + '" }' );
        console.log( 'Handled division request for x=' + x + ' : y=' + y );
    } );
} );

var port = 8080;
app.listen( port, function() {
    console.log( 'Listening on port:', port );
} );

// http://localhost:8080/addition?x=5&y=10