const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [range, length] = input.split(" ").map(Number);
  const rangeArr = [];
  for (let i = 1; i <= range; i++) {
    rangeArr.push(i);
  }
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
  console.log(
    getCombinations(rangeArr, length)
      .map((arr) => arr.join(" ").split(","))
      .join("\n")
  );
};

rl.on("line", (answer) => {
  solution(answer);
  rl.close();
});
