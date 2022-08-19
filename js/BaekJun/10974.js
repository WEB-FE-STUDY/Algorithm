const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const inputNum = Number(input);
  const arr = new Array(inputNum).fill(0).map((_, idx) => idx + 1);

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
  return getCombinations(arr, arr.length)
    .map((arr) => arr.join(" ").split(","))
    .join("\n");
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
