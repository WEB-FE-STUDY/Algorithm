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

const inferNumber = (arr, arr2) => {
  const [num, sTarget, bTarget] = arr2;
  const numArr = String(num).split("").map(Number);
  let [strike, ball] = [0, 0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i] === numArr[j] && i === j) {
        strike++;
      }
      if (arr[i] === numArr[j] && i !== j) {
        ball++;
      }
    }
  }
  return sTarget === strike && bTarget === ball ? true : false;
};

const solution = (input) => {
  const N = Number(input.shift());
  const datas = input.map((el) => el.split(" ").map(Number));
  let range = getPermutations([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  datas.forEach(
    (data) =>
      (range = range.filter((el) => {
        return inferNumber(el, data) === true;
      }))
  );
  const answer = range.length;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
