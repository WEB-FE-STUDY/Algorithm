const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const combinations = getCombinations(rest, selectNumber - 1);
    const attatched = combinations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });
  return results;
};

const solution = (input) => {
  const inputArr = input[1].split(" ").map(Number);
  const combinations = getCombinations(inputArr, inputArr.length);
  const sum = combinations.map((arr) => {
    const sumArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      const cur = arr[i];
      const next = arr[i + 1];
      sumArr.push(Math.abs(cur - next));
    }
    return sumArr.reduce((pre, cur) => pre + cur);
  });
  const answer = Math.max(...sum);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
