function fetchAjaxAsync(url, callback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                processResult();
            }
            else {
                errorCallback(new Error(xhr.statusText));
            }
        }
    };
    xhr.open(url, "GET", true);
    xhr.send();
}