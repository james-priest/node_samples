$( document ).ready( function() {
    // $( '#btnAdd' ).on( 'click', addNumbers$ajax_HTTP_GET );
    $( '#btnAdd' ).on( 'click', addNumbers );
    $( '#btnSubtract' ).on( 'click', subtractNumbers );
    $( '#btnMultiply' ).on( 'click', multiplyNumbers );
    $( '#btnDivide' ).on( 'click', divideNumbers );
} );

// format data for the ajax call - optional args
function getFormData( x, y ) {
    x = x || $( '#x' ).val();
    y = y || $( '#y' ).val();
    return { 'x': x, 'y': y };
}

// collects data, passes it to serverAddition, & decides how to process the results
function addNumbers( e ) {
    e.preventDefault();
    var data = getFormData();
    serverAddition( data ).done( displayResult );
}

// handles ajax call to the server and returns a promise object
function serverAddition( data ) {
    return $.getJSON( '/addition', data );
}

function subtractNumbers( e ) {
    e.preventDefault();
    var data = getFormData();
    serverSubtraction( data ).done( displayResult );
}

function serverSubtraction( data ) {
    return $.post( '/subtraction', data, 'json' );
}

function multiplyNumbers( e ) {
    e.preventDefault();
    var data = getFormData();
    serverMultiplication( data ).done( displayResult );
}

function serverMultiplication( data ) {
    return $.ajax( {
        url: '/multiplication',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false
    } );
}

function divideNumbers( e ) {
    e.preventDefault();
    var data = getFormData();
    serverDivision( data ).done( displayResult ).fail(displayError);
}

function serverDivision( data ) {
    return $.ajax( {
        url: '/division',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false
    } );
}

function displayResult( serverData ) {
    $( '#result' ).html( serverData.result );
}

function displayError( serverData, error ) {
    var value = 'No result';
    if ( 'result' in serverData ) { value = serverData.result; }
    $( '#result' ).html( value + ' - ' + error );
}