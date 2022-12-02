// 1208 부분수열의 합 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  const sumMap = new Map();
  let answer = 0;

  const getLeftSum = (index, sum) => {
    if (index === Math.trunc(N / 2)) {
      // 부분합을 map에 넣음
      if (!sumMap.has(sum)) sumMap.set(sum, 1);
      else sumMap.set(sum, sumMap.get(sum) + 1);
      return;
    }

    getLeftSum(index + 1, sum + numbers[index]);
    getLeftSum(index + 1, sum);
  };

  const getRightSum = (index, sum) => {
    if (index === N) {
      // map에서 (S - sum)을 찾음
      if (sumMap.has(S - sum)) answer += sumMap.get(S - sum);
      return;
    }

    getRightSum(index + 1, sum + numbers[index]);
    getRightSum(index + 1, sum);
  };

  getLeftSum(0, 0);
  getRightSum(Math.trunc(N / 2), 0);

  // console.log(sumMap);

  if (S == 0) answer -= 1; // S = 0인 경우, 왼쪽 &오른쪽 모두 공집합인 경우 있으므로 하나 뺌
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/*
1초 - 1억  https://lemonlemon.tistory.com/54
더하거나 더하지 않거나 -> 2가지 
2^40 = 짱큼
2^20 = 1,048,567 백만 
// 반으로 나눠서 각자 부분 수열의 합을 구함
// 0 ~ N/2까지 부분 수열의 합을 map에 넣음  {sum: value}
// N/2 ~ N까지의 부분 수열의 합을 구할 땐 map{S-sum}을 이용해서 
// S가 0인 경우 예외처리 
*/
