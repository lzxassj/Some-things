/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const x = grid.length;
  if (x) {
    const y = grid[0].length;
    const nums = Array.from({ length: x * y }, () => {
      return -1;
    });

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 1) {

          // 下侧
          if (i + 1 < x && grid[i + 1][j] == 1) {
            union(nums, i * y + j, (i + 1) * y + j);
          }

          // 右侧
          if (j + 1 < y && grid[i][j + 1] == 1) {
            union(nums, i * y + j, i * y + j + 1);
          }
        } else {
          nums[i * y + j] = -2;
        }
      }
    }
    
    return nums.filter((item) => {
      return item === -1 ? true : false;
    }).length;
  } else {
    return 0;
  }
};

var union = function (parent, i, j) {
  var x = find(parent, i);
  var y = find(parent, j);

  if (x != y) {
    parent[y] = x;
  }
};

var find = function (parent, i) {
  if (parent[i] === -1) {
    return i;
  }
  return find(parent, parent[i]);
};

const x = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

const result = numIslands(x);
console.log(result);
