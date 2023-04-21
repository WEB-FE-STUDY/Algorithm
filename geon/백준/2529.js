const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");
const visited = Array(10).fill(false);
const answers = [];

function compare(n, parity, m) {
  if (parity === ">") {
    return n > m;
  } else if (parity === "<") {
    return n < m;
  }
}

function recursion([cur, ...rest], visited, s) {
  if (s.length === n + 1) {
    answers.push(s);
    return;
  }
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i] && (s === "" || compare(Number(s[s.length - 1]), cur, i))) {
      visited[i] = true;
      recursion(rest, visited, `${s}${i}`);
      visited[i] = false;
    }
  }
}
recursion([null, ...arr], visited, "");
console.log(
  Math.max(...answers)
    .toString()
    .padStart(n + 1, 0)
);
console.log(
  Math.min(...answers)
    .toString()
    .padStart(n + 1, 0)
);
