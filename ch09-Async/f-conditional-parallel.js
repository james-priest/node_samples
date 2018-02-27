require('jquery');
// Example using $.Deferred() method to set a timeout that a user can
//  subscribe to using methods on the promise object

function timeoutAsync(milliseconds) {
    var deferred = $.Deferred(); 
    setTimeout(function() { deferred.resolve(); }, milliseconds);
    return deferred.promise();
}

// When making parallel asynchronous calls, conditionally calling the third
// operation is done differently

function abcAsync(includeThird) {
    var deferred = $.Deferred();
    var firstPromise = timeoutAsync(2000);
    var secondPromise = timeoutAsync(3000);
    var thirdPromise = includeThird ? timeoutAsync(1000) : $.when();    // updated
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

// If `includeThird` is false, $.when() is assigned to the `thirdPromise`
// variable. If you call $.when() with no parameters, a new promise object is
// created with its status set to resolved.