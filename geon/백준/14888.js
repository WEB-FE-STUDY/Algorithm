const lines = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const n = Number(lines.shift());
const a = lines.shift().split(" ").map(Number);
const ops = lines
  .pop()
  .split(" ")
  .map(Number)
  .flatMap((opNum, i) => Array(opNum).fill(i));
const visited = ops.map(() => false);
const ans = [];
const calc = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => Math.trunc(a / b),
};

const dfs = (arr) => {
  if (arr.length === ops.length) {
    const result = a.reduce((acc, cur, i) => calc[arr[i - 1]](acc, cur));
    ans.push(result);
    return;
  }
  for (let i = 0; i < ops.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      arr.push(ops[i]);
      dfs(arr);
      visited[i] = false;
      arr.pop();
    }
  }
};
dfs([]);
console.log([Math.max(...ans), Math.min(...ans)].join("\n"));
