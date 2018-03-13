var squareCount = 16;
var emptySquare;

$(document).ready(function() {
    createBoard();
    addTiles();
    $('#gameBoard').on('dragstart', dragStarted);
    $('#gameBoard').on('dragend', dragEnded);
    $('#gameBoard').on('dragenter', preventDefault);
    $('#gameBoard').on('dragover', preventDefault);
    $('#gameBoard').on('drop', drop);
    $('body').on('keydown', keyDown);
    $('#scramble').on('click', scramble);

    // scramble();
});

function createBoard() {
    for (var i = 0; i < squareCount; i++) {
        var $square = $('<div id="square' + i + '" data-square="' +
            i + '" class="square"></div>');
        $square.appendTo($('#gameBoard'));
    }
}

function addTiles() {
    emptySquare = squareCount - 1;
    for (var i = 0; i < emptySquare; i++) {
        var $square = $('#square' + i);
        var $tile = $('<div draggable="true" id="tile' + i +
            '"  class="tile">' + (i + 1) + '</div>');
        $tile.appendTo($square);
    }
}

function dragStarted(e) {
    var $tile = $(e.target);
    $tile.addClass('dragged');
    var sourceLocation = $tile.parent().data('square');
    e.originalEvent.dataTransfer.setData('text', sourceLocation.toString());
    e.originalEvent.dataTransfer.effectAllowed = 'move';
}

function dragEnded(e) {
    $(e.target).removeClass('dragged');
}

function preventDefault(e) {
    e.preventDefault();
}

function drop(e) {
    var $square = $(e.target);
    if ($square.hasClass('square')) {
        var destinationLocation = $square.data('square');
        if (emptySquare !== destinationLocation) return;
        var sourceLocation = Number(e.originalEvent.dataTransfer.getData('text'));
        moveTile(sourceLocation);
    }
    e.preventDefault();
}

function moveTile(sourceLocation) {
    var distance = sourceLocation - emptySquare;
    if (distance < 0) { distance = -(distance); }
    if (distance === 1 || distance === 4) {
        swapTileAndEmptySquare(sourceLocation);
    }
    checkForWinner();
}

function swapTileAndEmptySquare(sourceLocation) {
    var $draggedItem = $('#square' + sourceLocation).children();
    $draggedItem.detach();
    var $target = $('#square' + emptySquare);
    $draggedItem.appendTo($target);
    emptySquare = sourceLocation;
}

function keyDown(e) {
    var sourceLocation = 0;
    switch (e.key) {
        case 'ArrowUp':
            if (emptySquare > 11) return;
            sourceLocation = emptySquare + 4;
            $('#key').css('background-position', 'top center');
            break;
        case 'ArrowDown':
            if (emptySquare < 4) return;
            sourceLocation = emptySquare - 4;
            $('#key').css('background-position', 'bottom');
            break;
        case 'ArrowRight':
            if (emptySquare < 1 || (emptySquare) % 4 === 0) return;
            sourceLocation = emptySquare - 1;
            $('#key').css('background-position', 'bottom right');
            break;
        case 'ArrowLeft':
            if (emptySquare > 14 || (emptySquare+1) % 4 === 0) return;
            sourceLocation = emptySquare + 1;
            $('#key').css('background-position', 'bottom left');
            break;
        default:
            return;
    }
    $('#key').show().delay(200).fadeOut('fast');
    moveTile(sourceLocation);
}

function scramble(e) {
    for (var i = 0; i < 128; i++) {
        var random = Math.random();
        var sourceLocation;
        if (random < 0.5) {
            var column = emptySquare % 4;
            if (column === 0 || (random < 0.25 && column != 3)) {
                sourceLocation = emptySquare + 1;
            } else {
                sourceLocation = emptySquare - 1;
            }
        } else {
            var row = Math.floor(emptySquare / 4);
            if (row === 0 || (random < 0.75 && row != 3)) {
                sourceLocation = emptySquare + 4;
            } else {
                sourceLocation = emptySquare - 4;
            }
        }
        swapTileAndEmptySquare(sourceLocation);
    }
    e.preventDefault();
}

function checkForWinner() {
    if (emptySquare !== squareCount - 1) {
        $('#message>h1').html('Number Scramble!');
        return;
    }
    for (var i = 0; i < emptySquare; i++) {
        if ($('#tile' + i).parent().attr('id') !== 'square' + i) {
            $('#message>h1').html('Number Scramble!');
            console.log('old');
            return;
        }
    }
    $('#message>h1').html('Winner!');
}