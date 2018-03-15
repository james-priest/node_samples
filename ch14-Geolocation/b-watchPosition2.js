var watchId = 0,
    lat2 = 0,
    lon2 = 0;

$(document).ready(function() {
    $('#startMonitoring').on('click', getLocation);
    $('#stopMonitoring').on('click', endWatch);
});

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

function getLocation() {
    if (supportsGeolocation()) {
        var options = { enableHighAccuracy: true };
        watchId = navigator.geolocation.watchPosition(showPosition, showError, options);
    } else {
        showMessage("Geolocation isn't supported by your browser");
    }
}

function endWatch() {
    if (watchId != 0) {
        navigator.geolocation.clearWatch(watchId);
        watchId = 0;
        showMessage("Monitoring ended.");
    }
}

function showPosition(position) {
    var datetime = new Date(position.timestamp).toLocaleString();
    var lat1 = position.coords.latitude,
        lon1 = position.coords.longitude;
    showMessage('Latitude: ' + lat1 + '<br>' +
        'Longitude: ' +lon1 + '<br>' +
        'Timestamp: ' + datetime);
    lat2 = lat2 === 0 ? lat1 : lat2;
    lon2 = lon2 === 0 ? lon1 : lon2;
    var dist = getDistance(lat1, lon1, lat2, lon2);
    $('#distance').html(dist);
    lat2 = lat1;
    lon2 = lon1;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showMessage("User denied Geolocation access request.");
            break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location Information unavailable.");
            break;
        case error.TIMEOUT:
            showMessage("Get user location request timed out.");
            break;
        case error.UNKNOWN_ERROR:
            showMessage("An unknown error occurred.");
            break;
    }
}

function getDistance(lat1, lon1, lat2, lon2) {
    var earthRadius = 3959; //miles
    var latRadians = getRadians(lat2 - lat1);
    var lonRadians = getRadians(lon2 - lon1);
    var a = Math.sin(latRadians / 2) * Math.sin(latRadians / 2) +
        Math.cos(getRadians(lat1)) * Math.cos(getRadians(lat2)) *
        Math.sin(lonRadians / 2) * Math.sin(lonRadians / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = earthRadius * c;
    return distance;
}

function getRadians(latlongDistance) {
    return latlongDistance * Math.PI / 180;
}