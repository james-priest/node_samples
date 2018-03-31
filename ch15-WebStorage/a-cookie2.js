// v2. Object literal notation

var cookieApp = cookieApp || {};

cookieApp = {
    setCookie: function(cookieName, cookieValue, expirationDays) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + expirationDays);
        cookieValue = cookieValue + '; expires=' + expirationDate.toUTCString();
        document.cookie = cookieName + '=' + cookieValue;
    },
    getCookie: function(cookieName) {
        var cookies = document.cookie.split(';');

        for (let cookie of cookies) {
            let index = cookie.indexOf('=');
            let key = cookie.substr(0, index);
            let val = cookie.substr(index + 1);

            if (key.trim() === cookieName) { return val; }
        }
    }
};

window.onload = function() {
    cookieApp.setCookie('firstName2', 'James 2!', 1);
    var firstName = cookieApp.getCookie('firstName2');
    
    var div = document.getElementById('output');
    div.innerHTML = firstName;
};