$(document).ready(function () {
    var game,
        currentLegalMoves,
        $null,
        nullRowCol,
        i,
        equalSetups,
        clickHandlers;

    game = randomizeTiles(2);
    createTable(game);

    $null = $(".null");
    nullRowCol = $null.attr("id");
    currentLegalMoves = game.legalMoves[nullRowCol];

    equalSetups = function (setup1, setup2) {
        for (var j in setup2) {
            if (setup1[j] !== setup2[j]) {
                return false;
            }
        }
        return true;
    };

    clickHandlers = function (e) {
        var that = $(this);
        $("#table").children().remove();
        game = game.swap(that.attr("id"), nullRowCol);
        createTable(game);

        $null = $(".null");
        nullRowCol = $null.attr("id");
        currentLegalMoves = game.legalMoves[nullRowCol];

        for (i = 0; i < currentLegalMoves.length; i += 1) {
            $("#" + currentLegalMoves[i]).on('click', clickHandlers);
        }

        // check if game is over
        if (equalSetups(game.setup, game.baseSetup)) {
            alert("Congrats! You won!");
            $("div").off("click");
        }
    };

    for (i = 0; i < currentLegalMoves.length; i += 1) {
        $("#" + currentLegalMoves[i]).on('click', clickHandlers);
    }
});