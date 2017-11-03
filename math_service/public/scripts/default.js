$( document ).ready( function() {
    $( '#btnAdd' ).on( 'click', addNumbers$ajax );
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

function addNumbers$ajax(e) {
    e.preventDefault();
    var x = $( '#x' ).val();
    var y = $( '#y' ).val();
    var data = { 'x': x, 'y': y };
    $.ajax( {
        url: '/addition',
        data: data,
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function( data ) {
            $( '#result' ).html( data.result );
        }
    } );
}