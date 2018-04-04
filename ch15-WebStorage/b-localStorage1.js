// single global var ns pattern
var local_storageApp = (function () {
    var setItem = function (key, val) {
        try {
            if ('localStorage' in window) {
                localStorage.setItem(key, val);
            }
        } catch (e) {
            console.log(e.message);
        }
    };
    var getItem = function (key) {
        return localStorage[key];
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
    document.getElementById('btnSetLocal').addEventListener('click', function () {
        local_storageApp.setItem(txtKey.value, txtVal.value);
        
    });
    document.getElementById('btnGetLocal').addEventListener('click', function () {
        document.getElementById('output').innerHTML = local_storageApp.getItem(txtKey.value);
    });
    document.getElementById('btnClearLocal').addEventListener('click', function () {
        localStorage.clear();
    });

};