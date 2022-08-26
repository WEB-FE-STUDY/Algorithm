const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const subsets = (nums) => {
  const res = [];
  const dfs = (start = 0, arr = []) => {
    res.push(arr);
    if (arr.length === nums) return;
    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };
  dfs();

  return res;
};
const solution = (input) => {
  let answer = 0;
  const targetSum = input[0].split(" ").map(Number)[1];
  const numArr = input[1].split(" ").map(Number);
  const combinations = subsets(numArr);
  combinations.shift();
  const sumArr = combinations.map((arr) => arr.reduce((pre, cur) => pre + cur));
  sumArr.forEach((num) => {
    if (num === targetSum) {
      answer++;
    }
  });
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
