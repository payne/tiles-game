var Tiles = function (setup) {
    // setup is an object
    this.setup = setup;
};

Tiles.prototype.legalMoves = {
    "r1c1": ["r1c2", "r2c1"],
    "r1c2": ["r1c1", "r1c3", "r2c2"],
    "r1c3": ["r1c2", "r2c3"],
    "r2c1": ["r1c1", "r3c1", "r2c2"],
    "r2c2": ["r1c2", "r2c1", "r2c3", "r3c2"], 
    "r2c3": ["r1c3", "r2c2", "r3c3"],
    "r3c1": ["r2c1", "r3c2"],
    "r3c2": ["r3c1", "r2c2", "r3c3"],
    "r3c3": ["r2c3", "r3c2"]
};

Tiles.prototype.isValidMove = function (from, to) {
    // from and to are string inputs
    return _.contains(this.legalMoves[from], to);
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

Tiles.prototype.isSwapWithNull = function (from, to) {
    return (this.setup[from] !== null && this.setup[to] === null) || (this.setup[to] !== null && this.setup[from] === null);
};