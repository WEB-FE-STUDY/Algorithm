function solution(N, stages) {
  let answer = [];
  const stageClear = [];
  for (let i = 1; i < N + 1; i++) {
    const stage = i;
    const peopleInStage = stages.filter((idx) => idx === stage).length;

    stageClear.push(peopleInStage);
  }
  console.log(stageClear);
  let challengeNum = stages.length;
  const failureRateArr = stageClear.map((stage, idx) => {
    const failureRate = stage / challengeNum;
    challengeNum -= stageClear[idx];

    return { rate: failureRate, idx: idx + 1 };
  });
  console.log(failureRateArr);
  failureRateArr.sort((a, b) => b.rate - a.rate);
  console.log(failureRateArr);
  answer = failureRateArr.map((stage) => stage.idx);
  return answer;
}

const [n1, stages1] = [5, [2, 1, 2, 6, 2, 4, 3, 3]];
const [n2, stages2] = [4, [4, 4, 4, 4, 4]];

console.log(solution(n1, stages1));
