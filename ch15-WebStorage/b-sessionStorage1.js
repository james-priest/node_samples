// single global var ns pattern
var session_storageApp = (function () {
    var setItem = function (key, val) {
        try {
            if ('sessionStorage' in window) {
                sessionStorage.setItem(key, val);
            }
        } catch (e) {
            console.log(e.message);
        }
    };
    var getItem = function (key) {
        return sessionStorage[key];
    };

    return {
        setItem: setItem,
        getItem: getItem
    };
})();

// (() => {
//     var a = 'abc';
//     console.log('ES6 wrapper');
//     console.log(a);
// })();

// (function () {
//     var b = 'bcd';
//     console.log('ES5 wrapper');
//     console.log(b);
// })();

window.onload = function () {
    var txtKey = document.getElementById('txtKey'),
        txtVal = document.getElementById('txtVal');
    document.getElementById('btnSetSession').addEventListener('click', function () {
        session_storageApp.setItem(txtKey.value, txtVal.value);
        
    });
    document.getElementById('btnGetSession').addEventListener('click', function () {
        document.getElementById('output').innerHTML = session_storageApp.getItem(txtKey.value);
    });
    document.getElementById('btnClearSession').addEventListener('click', function () {
        sessionStorage.clear();
    });

};