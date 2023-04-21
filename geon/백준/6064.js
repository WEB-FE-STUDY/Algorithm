const [_, ...arr] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const answer = [];
arr.forEach((line) => {
  let [m, n, x, y] = line.split(" ").map(Number);
  if (m < n) {
    [m, n, x, y] = [n, m, y, x];
  }
  let year = x;

  while (year <= m * n) {
    if (y === (year % n || n)) {
      answer.push(year);
      break;
    }
    year += m;
  }
  if (year > m * n) {
    answer.push(-1);
  }
});

console.log(answer.join("\n"));
