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