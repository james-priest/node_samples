// v3. Nested namespacing

var myApp = myApp || {};
myApp.cookie = myApp.cookie || {};

myApp.cookie= {
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
    myApp.cookie.setCookie('firstName3', 'James 3!', 1);
    var firstName = myApp.cookie.getCookie('firstName3');
    
    var div = document.getElementById('output');
    div.innerHTML = firstName;
};