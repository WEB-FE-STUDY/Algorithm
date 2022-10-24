const [_, ...lines] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const curves = lines.map((line) => line.split(" ").map(Number));
const map = Array.from({ length: 101 }, () => Array(101).fill(false));
const dxy = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let ans = 0;
for (const [ix, iy, d, g] of curves) {
  let ds = [d];
  for (let i = 0; i < g; i++) {
    ds = [...ds, ...ds.reverse().map((v) => (v + 1) % 4)];
  }
  let [x, y] = [ix, iy];
  map[x][y] = true;
  for (const dd of ds) {
    [x, y] = [x + dxy[dd][1], y + dxy[dd][0]];
    map[x][y] = true;
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (map[i][j] && map[i][j + 1] && map[i + 1][j + 1] && map[i + 1][j]) {
      ans += 1;
    }
  }
}
console.log(ans);
