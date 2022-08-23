const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const results = [];

function getCombination(arr, combination, result) {
  if (combination.length === 6) {
    result.push(combination);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice(i + 1);
    getCombination(rest, [...combination, arr[i]], result);
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const [_, ...s] = input[i];
  const result = [];
  getCombination(s, [], result);
  results.push(result.map((v) => v.join(" ")).join("\n"));
}

console.log(results.join("\n\n"));
