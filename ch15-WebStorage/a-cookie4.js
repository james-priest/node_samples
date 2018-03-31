// v4. Immediately Invoked Function Expressions (IIFE)

var cookieApp = cookieApp || {};

(function(o) {
    o.setCookie = function(cookieName, cookieValue, expirationDays) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + expirationDays);
        cookieValue = cookieValue + '; expires=' + expirationDate.toUTCString();
        document.cookie = cookieName + '=' + cookieValue;
    };

    o.getCookie = function(cookieName) {
        var cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            let index = cookie.indexOf('=');
            let key = cookie.substr(0, index);
            let val = cookie.substr(index + 1);

            if (key.trim() === cookieName) { return val; }
        }
    };
})(cookieApp);

window.onload = function() {
    cookieApp.setCookie('firstName4', 'James 4!', 1);
    var firstName = cookieApp.getCookie('firstName4');
    
    var div = document.getElementById('output');
    div.innerHTML = firstName;
};