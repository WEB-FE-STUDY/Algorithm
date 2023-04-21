const [n, m, ...arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

function solution(arr, len) {
  if (len === 1) return arr.map((v) => [v]);

  return arr.flatMap((base) => {
    const rest = arr.filter((v) => v >= base);
    return solution(rest, len - 1).map((v) => [base, ...v]);
  });
}

arr.sort((a, b) => a - b);
const answer = solution(arr, m)
  .map((v) => v.join(" "))
  .join("\n");
console.log(answer);
