// Add code to fill in tile values into HTML
// Add animation via jQuery

var createRow = function (r, game) {
    var c, row_col, $row, $col, $base;

    $base = $("#table");
    $row = $("<div></div>").attr("id", "row" + r);
    for (c = 1; c < 5; c += 1) {
        row_col = "r" + r + "c" + c;
        $col = $("<div></div>").attr("id", row_col);
        
        if (game.setup[row_col] === null) {
            $col.attr("class", "null");
        } else {
            $col.text(game.setup[row_col]);    
        }

        $row.append($col);
    }
    $base.append($row);
};

var createTable = function (game) {
    for (var i = 1; i < 5; i += 1) {
        createRow(i, game);
    }
};