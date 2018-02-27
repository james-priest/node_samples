require('jquery');
// Example using $.Deferred() method to set a timeout that a user can
//  subscribe to using methods on the promise object

function timeoutAsync(milliseconds) {
    var deferred = $.Deferred(); 
    setTimeout(function() { deferred.resolve(); }, milliseconds);
    return deferred.promise();
}

// Sometimes you need to make an asynchronous call conditionally. In the case
// of chained operations, you need a way to splice in (or out) the operation.
// Here the third asynchronous operation is conditionally executed

function abcAsync(includeThird) {
    var firstPromise = timeoutAsync(2000);
    var secondPromise = firstPromise.pipe(function() {
        return timeoutAsync(3000);
    });
    var thirdPromise = includeThird ? secondPromise.pipe(function() {  // updated
        return timeoutAsync(1000);
    }) : secondPromise;                                                // updated
    var fourthPromise = thirdPromise.pipe(function() {
        return timeoutAsync(1234);
    });
    fourthPromise.done(function() {
        firstPromise.done(function() { console.log('done!'); });
    });
    return fourthPromise;
}

// here the `includeThird` variable is passed into the abcAsync function to
// determine if the third async function should be called. If `false`, the
// `thirdPromise` variable still needs to be assigned a promise to chain the
// fourth asynchronous call, so the `secondPromise` is assigned directly to
// the `thirdPromise` variable. This maintains the chain of operations.