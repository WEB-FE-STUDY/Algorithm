const input = require("fs").readFileSync("dev/stdin.txt").toString().trim();

const solution = (input) => {
  let answer = 0;
  let inputNum = Number(input);
  const inputArr = input.split("").map(Number);
  const amount = 9;
  for (let i = 0; i < inputArr.length; i++) {
    if (i !== inputArr.length - 1) {
      const current = amount * 10 ** i * (i + 1);
      answer += current;
      inputNum -= amount * 10 ** i;
    } else {
      answer += inputNum * inputArr.length;
    }
  }
  return answer;
};

console.log(solution(input));
