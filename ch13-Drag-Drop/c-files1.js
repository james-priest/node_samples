$(document).ready(function() {
    $('#target').on('dragenter', preventDefault);
    $('#target').on('dragover', preventDefault);
    $(document).on('dragenter', preventDefault);
    $(document).on('dragover', preventDefault);
    $(document).on('drop', preventDefault);
});

function preventDefault(e) {
    e.preventDefault();
}