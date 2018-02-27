require('jquery');
// Example using $.Deferred() method to set a timeout that a user can
//  subscribe to using methods on the promise object

function timeoutAsync(milliseconds) {
    var deferred = $.Deferred(); 
    setTimeout(function() { deferred.resolve(); }, milliseconds);
    return deferred.promise();
}

// BAD NESTING EXAMPLE
function badAsync() {
    var firstPromise = timeoutAsync(2000);
    firstPromise.done(function() {
        var secondPromise = timeoutAsync(3000);
        secondPromise.done(function() {
            var thirdPromise = timeoutAsync(1000);
            thirdPromise.done(function() {
                var fourthPromise = timeoutAsync(1234);
                fourthPromise.done(function() {
                    firstPromise.done(function() { console.log('done!'); });
                });
            });
        });
    });
}

// Chaining solves nesting issue with `pipe()` method.
// This chaining operation waits for the previous operation to complete
// before starting the next.
function abcAsync() {
    var firstPromise = timeoutAsync(2000);
    var secondPromise = firstPromise.pipe(function() {
        return timeoutAsync(3000);
    });
    var thirdPromise = secondPromise.pipe(function() {
        return timeoutAsync(1000);
    });
    var fourthPromise = thirdPromise.pipe(function() {
        return timeoutAsync(1234);
    });
    fourthPromise.done(function() {
        firstPromise.done(function() { console.log('done!'); });
    });
    return fourthPromise;
}

// Here, the fourthPromise object is correctly returned so the caller can know
// when all code is completed. The calling function can also call the `done()`,
// `fail()` or `always()` on the returned promise object to add code to execute
// upon completion.

// Additionally, If the first async call fails, the failure is automatically
// passed to the piped object in the chain. You don't need extra code. You can
// subscribe to the fail of the fourthPromise object, and you will be
// automatically notified if any asynchronous call in the chain failed.