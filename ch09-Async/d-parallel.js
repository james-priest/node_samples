require('jquery');
// Example using $.Deferred() method to set a timeout that a user can
//  subscribe to using methods on the promise object

function timeoutAsync(milliseconds) {
    var deferred = $.Deferred(); 
    setTimeout(function() { deferred.resolve(); }, milliseconds);
    return deferred.promise();
}

// The previous chaining operation was done consecutively (in serial).
// One operation completes before the next one begins. This took 7.234 seconds
// If we run them in parallel, how can we know all four operations completed?

// We can use $.when() to indicate completion of multiple asynchronous
// operations $.when() is also non-blocking, so it's usually used with a
// $.Deferred object

function abcAsync() {
    var deferred = $.Deferred();
    var firstPromise = timeoutAsync(2000);
    var secondPromise = timeoutAsync(3000);
    var thirdPromise = timeoutAsync(1000);
    var fourthPromise = timeoutAsync(1234);

    $.when(firstPromise, secondPromise, thirdPromise, fourthPromise)
        .then(function() {
            console.log('done!');
            deferred.resolve();
        }, function() {
            deferred.reject();
        });
    return deferred.promise();
}

// The $.when() method accepts promise parameters and monitors for all to
// complete. If a parameter is not a promise object is is considered to be
// complete.

// The $.when() method creates it own promise that is passed to the then()
// method, which first accepts a function to be executed upon success and
// then accepts a function to be executed upon failure.