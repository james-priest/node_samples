$(document).ready(function() {
    $('#carList').on('dragstart', dragging);
    $('#favoriteCars').on('dragenter', preventDefault);
    $('#favoriteCars').on('dragover', preventDefault);
    $('#favoriteCars').on('drop', dropItem);
});

function dragging(e) {
    var val = e.target.dataset.value;
    e.originalEvent.dataTransfer.setData('text/plain', val);
    e.originalEvent.dataTransfer.effectAllowed = 'copy';
}

function preventDefault(e) {
    e.preventDefault();
}

function dropItem(e) {
    var data = e.originalEvent.dataTransfer.getData('text/plain').split(',');
    if (data[0] === 'car') {
        var li = document.createElement('li');
        li.textContent = data[1];
        e.target.appendChild(li);
    }
    e.preventDefault();
}