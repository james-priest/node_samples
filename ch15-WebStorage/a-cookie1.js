// v1. Single global variable

var cookieApp = (function() {
    var _setCookie = function(cookieName, cookieValue, expirationDays) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + expirationDays);
        cookieValue = cookieValue + '; expires=' + expirationDate.toUTCString();
        document.cookie = cookieName + '=' + cookieValue;
    };
    var _getCookie = function(cookieName) {
        var cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            let index = cookie.indexOf('=');
            let key = cookie.substr(0, index);
            let val = cookie.substr(index + 1);

            if (key.trim() === cookieName) { return val; }
        }
    };

    return {
        getCookie: _getCookie,
        setCookie: _setCookie
    };
})();

window.onload = function() {
    cookieApp.setCookie('firstName1', 'James 1!', 1);
    var firstName = cookieApp.getCookie('firstName1');
    
    var div = document.getElementById('output');
    div.innerHTML = firstName;
};