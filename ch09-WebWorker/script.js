// require('jquery');

/*
// ES5
var worker = new Worker('g-worker.js');   // create our worker
worker.onmessage = function(e) {    // listen for events from the worker
    $('#result').append(e.data + '<br>');
}
worker.onerror = function(e) {
    $('#result').append('Error:', + e.data, '<br>');
}

$('document').ready(function() {
    $('#btnSend').on('click', function() {
        worker.postMessage($('#message').val()); // post a message to our worker
    });
});
*/

// Web worker created using the Worker() constructor and passing in the URI of
// a script to execute. Notifications are received from the worker by setting
// the 'onmessage' and 'onerror' properties to an event handler function.
// The button click event retrieves the value of the input control and posts
// the message to the worker.

// ES6
const worker = new Worker('worker.js'); // create our worker
worker.onmessage = e => { $('#result').append(e.data + '<br>'); }; // listen
worker.onerror = e => { $('#result').append('Error:', e.data, '<br>'); };

$('document').ready(() => {
    $('#btnSend').on('click', () => {
        worker.postMessage($('#message').val()); // post a message to our worker
    });
});