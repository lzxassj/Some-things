/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let _return = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        _return += 1;
        dfs(grid, i, j);
      }
    }
  }
  return _return;
};

const dfs = function (grid, i, j) {
  // 越界判断
  if (!grid[i] || !grid[i][j]) {
    return;
  }

  // 遍历过的陆地或者不是陆地，直接返回
  if (grid[i] && (grid[i][j] == 2 || grid[i][j] == 0)) {
    return;
  }

  // 遍历过的陆地设置成2，防止再次遍历
  grid[i][j] = 2;

  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};

const x = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const result = numIslands(x);
