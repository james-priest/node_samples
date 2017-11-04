$( document ).ready( function() {
    // $( '#btnAdd' ).on( 'click', addNumbers$ajax_HTTP_GET );
    $( '#btnAdd' ).on( 'click', addNumbers$getJSON );
    
    $( '#btnSubtract' ).on( 'click', subtractNumbers$post );
    $( '#btnMultiply' ).on( 'click', multiplyNumbers$ajax_HTTP_PUT );
    $( '#btnDivide' ).on( 'click', divideNumbers$ajax_HTTP_DELETE );
} );

// This uses synchronous ajax - BAD!
function addNumbersXhrSync(e) {
    e.preventDefault();
    var x = document.getElementById( 'x' ).value;
    var y = document.getElementById( 'y' ).value;
    var result = document.getElementById( 'result' );
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open( 'GET', '/addition?x=' + x + '&y=' + y, false ); // this is synchronous
    xmlhttp.send();

    var jsonObject = JSON.parse( xmlhttp.response );
    result.innerHTML = jsonObject.result;
}

function addNumbersXhrAsync( e ) {
    e.preventDefault();
    var x = document.getElementById( 'x' ).value;
    var y = document.getElementById( 'y' ).value;
    var result = document.getElementById( 'result' );
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {
            var jsonObject = JSON.parse( xmlhttp.response );
            result.innerHTML = jsonObject.result;
        }
    };

    xmlhttp.open( 'GET', '/addition?x=' + x + '&y=' + y, true );
    xmlhttp.send();
}

function addNumbers$ajax_HTTP_GET(e) {
    e.preventDefault();
    console.log( ' ', '$.ajax() call with HTTP GET' );

    $.ajax( {
        url: '/addition',
        data: ajaxData(),   // { 'x': x, 'y': y }
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function( data ) {
            $( '#result' ).html( data.result );
        }
    } );
}

function addNumbers$get( e ) {
    e.preventDefault();
    console.log( ' ', '$.get() call' );
    var ajaxData = ajaxData();

    $.get( '/addition', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    }, 'json' );
}

function abc(a, b) {
    var x = a || $( '#x' ).val();
    var y = b || $( '#y' ).val();
    return { 'x': x, 'y': y };
}

// format data for the ajax call - optional args
function formatAjaxData( x, y ) {
    x = x || $( '#x' ).val();
    y = y || $( '#y' ).val();
    return { 'x': x, 'y': y };
}

/**
 * Functions in use...
 */
function addNumbers$getJSON( e ) {
    e.preventDefault();
    console.log( ' ', '$.getJSON() call' );     
    var ajaxData = formatAjaxData();   // { 'x': x, 'y': y }
    
    $.getJSON( '/addition', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    } );
}
function subtractNumbers$post( e ) {
    e.preventDefault();
    console.log( ' ', '$.post() call' );
    var ajaxData = formatAjaxData();
    
    $.post( '/subtraction', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    }, 'json' );
}
function multiplyNumbers$ajax_HTTP_PUT( e ) {
    e.preventDefault();
    console.log( ' ', '$.ajax() call with HTTP PUT' );
    var ajaxData = formatAjaxData();

    $.ajax( {
        url: '/multiplication',
        data: ajaxData,
        type: 'PUT',
        dataType: 'json',
        cache: false,
        success: function( data ) {
            $( '#result' ).html( data.result );
        }
    } );
}
function divideNumbers$ajax_HTTP_DELETE( e ) {
    e.preventDefault();
    console.log( ' ', '$.ajax() call with HTTP DELETE' );
    var ajaxData = formatAjaxData();
    
    $.ajax( {
        url: '/division',
        data: ajaxData,
        type: 'DELETE',
        dataType: 'json',
        cache: false,
        success: function( data ) {
            $( '#result' ).html( data.result );
        }
    } );
}
