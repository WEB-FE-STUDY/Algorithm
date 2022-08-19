const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const getCombinations = (arr, targetNumber) => {
  const results = [];
  if (targetNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed) => {
    const rest = arr;
    const combinations = getCombinations(rest, targetNumber - 1);
    const attatched = combinations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });
  return results;
};

const solution = (input) => {
  const length = Number(input[0]);
  const inputArr = input[1].split("");
  const arr = [];
  for (let i = 0; i < length; i++) {
    const line = [];
    for (let j = i; j < length; j++) {
      line.push(inputArr.shift());
      if (line.at[-1] === "0") {
        line.at[-1] = 0;
      }
    }
    arr.push(line);
  }
  console.log(arr);
  const range = new Array(10).fill(0).map((_, i) => i + 1);
  const combinations = getCombinations(range, length);
  combinations.map((el) => {});
  let answer = 0;
  const a = "123";
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
