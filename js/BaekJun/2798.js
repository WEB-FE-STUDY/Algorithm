const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [_, target] = input[0].split(" ").map(Number);
  const cards = input[1].split(" ").map(Number);
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
  const allCombinationsSum = getCombinations(cards, 3).map((el) =>
    el.reduce((pre, cur) => pre + cur)
  );
  return Math.max(...allCombinationsSum.filter((num) => num <= target));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
