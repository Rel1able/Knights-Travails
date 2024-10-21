function knightMoves(start, end) {
    let queue = [[start, [start]]];

    while (queue.length > 0) {
        let [location, path] = queue.shift();
        if (location[0] === end[0] && location[1] === end[1]) {
            return `You made it in ${path.length} moves. Here is your path: \n${JSON.stringify(path)}`;
        }
        let moves = getPossibleMoves(location[0], location[1]);
        moves.forEach((move) => {
            queue.push([move, [...path, move]]);
        })
    }
}
function getPossibleMoves(x, y) {
    let moves = [[x + 2, y + 1], [x + 2, y - 1], [x + 1, y - 2],
        [x + 1, y + 2],
        [x - 1, y - 2], [x - 2, y - 1], [x - 1, y + 2], [x - 2, y + 1]]
    return moves.filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8);
}

console.log(knightMoves([0, 0], [1, 2])); 
console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));



