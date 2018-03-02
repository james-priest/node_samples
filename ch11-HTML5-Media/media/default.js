$(document).ready(function () {
    $('#play').on('click', playStop);

    $('#media').on('play', function() {
        $('#play').html('Pause');
        $('#message').html($('#media')[0].currentSrc);
    });
    $('#media').on('pause', function() { $('#play').html('Play'); });
});

function playStop() {
    var media = $('#media')[0];
    if (media.paused) {
        media.play();
    } else {
        media.pause();
    }
}