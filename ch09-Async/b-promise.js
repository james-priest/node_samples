require('jquery');
// Example using $.Deferred() method to set a timeout that a user can
//  subscribe to using methods on the promise object

function timeoutAsync(milliseconds) {
    var deferred = $.Deferred(); 
    setTimeout(function() { deferred.resolve(); }, milliseconds);
    return deferred.promise();
}

// No application-specific code is in the function. Instead the resolve
// method is called on the deferred object to indicate the completion of
// the timer.
// Calling the resolve method on the deferred object changes the state
// of the promise object to `resolved` and executes all code that was
// attached to the promise object using the `done` method.

function abcAsync() {
    var promise = timeoutAsync(2000);
    promise.always(function() { console.log('always!'); });
    promise.done(function() { console.log('done!'); });
    promise.fail(function() { console.log('fail!'); });
    return promise;
}

// In this example the function name also end with 'Async' to indicate that
// it's asynchronous. It's important to keep this convention and ALWAYS return
// a promise object that the calling function can use to add more code on
// completion or that the caller can use to check the status of the promise