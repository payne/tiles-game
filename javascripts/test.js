$(document).ready(function () {
    var game = randomizeTiles(10);
    createTable(game);

    console.log(game);

    $("div[id*='row']").on('click', 'div', function (e) {
        // if (game.isValidMove(from, to) &&  game.isSwapWithNull(from, to)) {

        // }
    });
});