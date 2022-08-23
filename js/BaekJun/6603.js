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
    const rest = arr.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attatched = combinations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });
  return results;
};

const solution = (input) => {
  const count = 6;
  const inputArr = input;
  inputArr.pop();
  inputArr.forEach((input) => {
    const rangeArr = input.split(" ").map(Number);
    rangeArr.shift();
    const combinations =
      getCombinations(rangeArr, count)
        .map((arr) => arr.join(" ").split(","))
        .join("\n") + "\n";
    console.log(combinations);
  });
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
