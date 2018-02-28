// 

/*
// ES5
self.onmessage = function(e) {
    console.log('Worker received event from main thread..');
    for (let c in e.data) {
        // check hasOwnProperty to avoid unwanted inherited props
        if (e.data.hasOwnProperty(c)) {
            self.postMessage(e.data[c].toUpperCase());
        }
    }
};
 */

// This code subscribes to the 'onmessage' event, loops through the message,
// converting each character, and sends it back to the creator using
// postMessage() method.

// ES6
self.onmessage = event => {
    console.log('Worker received event from main thread..');
    for (let c of event.data) {
        self.postMessage(c.toUpperCase());
    }
};

// You can stop a web worker by 
//  - calling the`worker.terminate()` method from the creator
//  - calling the `close()` method inside the worker itself