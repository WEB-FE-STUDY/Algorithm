const [[n], ...s] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const arr = Array.from({ length: 2 ** n - 1 - (2 ** (n / 2) - 1) }, (_, i) =>
  (i + (2 ** (n / 2) - 1)).toString(2).padStart(n, 0)
)
  .filter((v) => v.split("1").length - 1 === n / 2)
  .map((v) => {
    let diff = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (v[i] === v[j]) {
          v[i] === "0" ? (diff += s[i][j] + s[j][i]) : (diff -= s[i][j] + s[j][i]);
        }
      }
    }
    return Math.abs(diff);
  });

console.log(Math.min(...arr));
