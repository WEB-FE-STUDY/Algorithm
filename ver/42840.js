//프로그래머스 모의고사 Level1
const solution = (answers) => {
  const answer = [];
  const length = answers.length;

  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const counting = [0, 0, 0];

  for (let i = 0; i < length; i++) {
    let answerI = answers[i];
    if (supo1[i % 5] === answerI) counting[0]++;
    if (supo2[i % 8] === answerI) counting[1]++;
    if (supo3[i % 10] === answerI) counting[2]++;
  }

  const max = Math.max(counting[0], counting[1], counting[2]);
  if (counting[0] === max) answer.push(1);
  if (counting[1] === max) answer.push(2);
  if (counting[2] === max) answer.push(3);

  return answer;
};
