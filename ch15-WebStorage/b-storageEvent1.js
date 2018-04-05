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

window.onload = function () {
    var txtKey = document.getElementById('txtKey'),
        txtVal = document.getElementById('txtVal'),
        divOutput = document.getElementById('output');
    document.getElementById('btnSetLocal').addEventListener('click', function () {
        local_storageApp.setItem(txtKey.value, txtVal.value);
        
    });
    document.getElementById('btnGetLocal').addEventListener('click', function () {
        document.getElementById('output').innerHTML = local_storageApp.getItem(txtKey.value);
    });
    document.getElementById('btnClearLocal').addEventListener('click', function () {
        localStorage.clear();
    });

    window.addEventListener('storage', function (e) {
        console.log('key', e.key, 'oldValue', e.oldValue, 'newValue', e.newValue, 'url', e.url);console.log('storageArea', e.storageArea);
        divOutput.innerHTML = 'key: ' + e.key + '<br>oldValue: ' + e.oldValue + '<br>newValue: ' + e.newValue + '<br>url: ' + e.url + '<br>storageArea: ' + e.storageArea;
    }, false);
};