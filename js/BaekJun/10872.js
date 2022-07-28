const input = require("fs").readFileSync("dev/stdin.txt").toString().trim();

const solution = (input) => {
  if (input === 0) return 1;
  if (input < 2) return input;
  return input * solution(input - 1);
};

console.log(solution(Number(input)));
