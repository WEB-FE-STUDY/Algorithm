const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const combinations = getPermutations(rest, selectNumber - 1);
    const attatched = combinations.map((el) => [fixed, ...el]);
    results.push(...attatched);
  });
  return results;
};

const getCosts = (arr1, arr2) => {
  let cost = 0;
  for (let i = 1; i < arr1.length; i++) {
    const wayCost = arr2[arr1[i - 1]][arr1[i]];
    if (wayCost === 0) {
      return false;
    } else {
      cost += wayCost;
    }
    if (i === arr1.length - 1) {
      cost += arr2[arr1[i]][arr1[0]];
    }
  }
  return cost;
};
const solution = (input) => {
  const inputArr = input;
  const citiesCount = Number(inputArr[0]);
  const cities = new Array(citiesCount).fill(0).map((_, idx) => idx);
  inputArr.shift();
  const waysArr = inputArr.map((city) => city.split(" ").map(Number));
  const permutations = getPermutations(cities, citiesCount);
  const costs = permutations.map((way) => getCosts(way, waysArr));
  let answer = Math.min(...costs);
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
