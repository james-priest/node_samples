$(document).ready(function() {
    getLocation();
});

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

function getLocation() {
    if (supportsGeolocation()) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        showMessage("Geolocation isn't supported by your browser");
    }
}

function showPosition(position) {
    var mapCanvas = document.getElementById('map');
    // var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    console.log(coords);
    var options = {
        zoom: 13,
        center: coords,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(mapCanvas, options);
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: 'You are here!'
    });
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