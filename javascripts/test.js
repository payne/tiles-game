$(document).ready(function () {
    var game,
        currentLegalMoves,
        $null,
        nullRowCol,
        i,
        clickHandlers;

    game = randomizeTiles(20);
    console.log(game);
    createTable(game);

    $null = $(".null");
    nullRowCol = $null.attr("id");
    currentLegalMoves = game.legalMoves[nullRowCol];

    clickHandlers = function (e) {
        var that = $(this);
        $("#table").children().remove();
        game = game.swap(that.attr("id"), nullRowCol);
        createTable(game);
    };

    for (i = 0; i < currentLegalMoves.length; i += 1) {
        $("#" + currentLegalMoves[i]).on('click', clickHandlers);
    }
});