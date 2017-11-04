# AJAX examples

in [/public/scripts/default.js](public/scripts/default.js)

## Synchronous XMLHttpRequest() method - BAD!

```javascript
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
```

## Asynchronous XMLHttpRequest() method

```javascript
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
```

## Asynchronous jQuery $.ajax() method with HTTP GET

```javascript
function addNumbers$ajax_typeGET(e) {
    e.preventDefault();
    console.log( ' ', '$.ajax() call' );

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
```

## Asynchronous jQuery $.get() method with HTTP GET

```javascript
function addNumbers$get( e ) {
    e.preventDefault();
    var ajaxData = formatAjaxData();   // { 'x': x, 'y': y }

    $.get( '/addition', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    }, 'json' );
}
```

## Asynchronous jQuery $.getJSON() method with HTTP GET

```javascript
function addNumbers$getJSON( e ) {
    e.preventDefault();
    var ajaxData = formatAjaxData();   // { 'x': x, 'y': y }

    $.getJSON( '/addition', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    } );
}
```

## Asynchronous jQuery $.post() method with HTTP POST

```javascript
function subtractNumbers$post( e ) {
    e.preventDefault();
    var ajaxData = formatAjaxData();

    $.post( '/subtraction', ajaxData, function( data ) {
        $( '#result' ).html( data.result );
    }, 'json' );
}
```

## Asynchronous jQuery $.ajax() with HTTP PUT

```javascript
function multiplyNumbers$ajax_HTTP_PUT( e ) {
    e.preventDefault();
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
```

## Asynchronous jQuery $.ajax() with HTTP DELETE

```javascript
function divideNumbers$ajax_HTTP_DELETE( e ) {
    e.preventDefault();
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
```