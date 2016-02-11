var Tiles = function (setup) {
    // setup is an object
    this.setup = setup || Tiles.prototype.baseSetup;
};

Tiles.prototype.baseSetup = {
    
    "r1c2": 2,
    "r1c1": 1,
    "r1c3": 3,
    "r1c4": 4,
    "r2c1": 5,
    "r2c2": 6,
    "r2c3": 7,
    "r2c4": 8,
    "r3c1": 9,
    "r3c2": 10,
    "r3c3": 11,
    "r3c4": 12,
    "r4c1": 13,
    "r4c2": 14,
    "r4c3": 15,
    "r4c4": null
};

Tiles.prototype.legalMoves = {
    "r1c1": ["r1c2", "r2c1"],
    "r1c2": ["r1c1", "r1c3", "r2c2"],
    "r1c3": ["r1c2", "r2c3", "r1c4"],
    "r1c4": ["r1c3", "r2c4"],
    "r2c1": ["r1c1", "r3c1", "r2c2"],
    "r2c2": ["r1c2", "r2c1", "r2c3", "r3c2"], 
    "r2c3": ["r1c3", "r2c2", "r3c3", "r2c4"],
    "r2c4": ["r1c4", "r2c3", "r3c4"],
    "r3c1": ["r2c1", "r3c2", "r4c1"],
    "r3c2": ["r3c1", "r2c2", "r3c3", "r4c2"],
    "r3c3": ["r2c3", "r3c2", "r3c4", "r4c3"],
    "r3c4": ["r3c3", "r2c4", "r4c4"],
    "r4c1": ["r3c1", "r4c2"],
    "r4c2": ["r4c1", "r3c2", "r4c3"],
    "r4c3": ["r4c2", "r3c3", "r4c4"],
    "r4c4": ["r4c3", "r3c4"]
};

Tiles.prototype.isValidMove = function (from, to) {
    // from and to are string inputs
    return _.contains(this.legalMoves[from], to);
};

Tiles.prototype.isSwapWithNull = function (from, to) {
    return (this.setup[from] !== null && this.setup[to] === null) || (this.setup[to] !== null && this.setup[from] === null);
};

Tiles.prototype.swap = function (from, to) {
    var copy;
    if (this.isValidMove(from, to) &&  this.isSwapWithNull(from, to)) {
        copy = _.reduce(this.setup, function (acc, val, prop, thisObj) {
            // this should point to the Tile object, while thisObj points to the Tile object's setup property
            acc[prop] = val;
            return acc;
        }, {}, this);
        copy[from] = this.setup[to];
        copy[to] = this.setup[from];
        return new Tiles(copy);
    }
};

// Next step: Add randomize function which creates a new random game that is solvable.
Tiles.prototype.findTile = function (val) {
    for (var prop in this.setup) {
        if (this.setup.hasOwnProperty(prop) && this.setup[prop] === val) {
            return prop;
        }
    }
};

var randomFromArray = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

var randomizeTiles = function (num) {
    var possibleMoves,
        nextMove,
        i,
        tileWithNull,
        game = new Tiles();
        // answer = [];

    for (i = 0; i < num; i += 1) {
        tileWithNull = game.findTile(null);
        possibleMoves = game.legalMoves[tileWithNull];
        nextMove = randomFromArray(possibleMoves);
        // answer.unshift("Move from " + nextMove + " to " + tileWithNull);
        game = game.swap(tileWithNull, nextMove);
    }

    // game.answer = answer;
    return game;
};
