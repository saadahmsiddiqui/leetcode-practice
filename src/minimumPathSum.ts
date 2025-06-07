function move(grid: number[][], position: number[]): number {
    if (position[0] > grid.length) return Infinity;
    if (position[1] > grid[0].length) return Infinity;

    if (position[0] === grid.length - 1 && position[1] === grid[0].length - 1) {
        return grid[position[0]][position[1]]
    }

    const row = position[0]
    const col = position[1]
    const cost = grid[row][col]

    return Math.min(
        cost + move(grid, [row + 1, col]),
        cost + move(grid, [row, col + 1])
    )
}


export function minPathSum(grid: number[][]): number {
    if (grid.length === 0) return 0

    return move(grid, [0,0])
};