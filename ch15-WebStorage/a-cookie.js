// This pollutes the global namespace & increases chances of code collision

function setCookie(cookieName, cookieValue, expirationDays) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    cookieValue = cookieValue + '; expires=' + expirationDate.toUTCString();
    document.cookie = cookieName + '=' + cookieValue;
}

function getCookie(cookieName) {
    var cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        let index = cookie.indexOf('=');
        let key = cookie.substr(0, index);
        let val = cookie.substr(index + 1);

        if (key.trim() === cookieName) { return val; }
    }
}

window.onload = function() {
    setCookie('firstName', 'James', 1);
    var firstName = getCookie('firstName');

    var div = document.getElementById('output');
    div.innerHTML = firstName; // James
};