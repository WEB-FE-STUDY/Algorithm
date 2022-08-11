const { get } = require("http");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const getCombinations = (arr, targetNumber) => {
  const results = [];
  if (targetNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx + 1);
    const combinations = getCombinations(rest, targetNumber - 1);
    const attatched = combinations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });
  return results;
};
const getJalength = (arr) => {
  return arr.filter((el) => el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u");
};
const solution = (input) => {
  const amount = input[0].split(" ").map(Number)[0];
  const inputArr = input[1].split(" ").sort();
  const answer = getCombinations(inputArr, amount)
    .filter(
      (el) =>
        (el.includes("a") ||
          el.includes("e") ||
          el.includes("i") ||
          el.includes("o") ||
          el.includes("u")) &&
        getJalength(el).length >= 2
    )
    .map((arr) => arr.join("").split(","))
    .join("\n");
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
