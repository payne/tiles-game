var game = new Tiles({
    "r1c1": 1,
    "r1c2": 2,
    "r1c3": 3,
    "r2c1": 4,
    "r2c2": 5,
    "r2c3": 6,
    "r3c1": 7,
    "r3c2": 8,
    "r3c3": null
});

console.log(game);
console.log(game = game.swap("r2c3", "r3c3"));
// console.log(game);
console.log(game = game.swap("r2c3", "r2c2"));
// console.log(game);
console.log(game.swap("r2c3", "r3c3"));