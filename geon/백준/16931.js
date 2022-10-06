const [nm, ...lines] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [n, m] = nm.split(" ").map(Number);
const arr = lines.map((line) => line.split(" ").map(Number));
let area = n * m;

const getLineArea = (arr) => arr.reduce((area, cur, i) => (area += Math.max(0, cur - arr[i - 1])));

for (const line of arr) {
  area += getLineArea(line);
}
for (let i = 0; i < m; i++) {
  const line = [];
  for (let j = 0; j < n; j++) {
    line.push(arr[j][i]);
  }
  area += getLineArea(line);
}

console.log(2 * area);
