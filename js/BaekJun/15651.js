const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [range, selectNum] = input.split(" ").map(Number);
  const rangeArr = new Array(range).fill().map((_, i) => i + 1);
  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    arr.forEach((fixed) => {
      const rest = arr;
      const combinations = getCombinations(rest, selectNumber - 1);
      const attatched = combinations.map((el) => [fixed, ...el]);
      results.push(...attatched);
    });
    return results;
  };
  const answer = getCombinations(rangeArr, selectNum)
    .map((arr) => arr.join(" ").split(","))
    .join("\n");
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});
