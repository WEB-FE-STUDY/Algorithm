function solution(answers) {
  const [stu1Ans, stu2Ans, stu3Ans] = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let [stu1, stu2, stu3] = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    if (answer === stu1Ans[i % stu1Ans.length]) {
      stu1 += 1;
    }
    if (answer === stu2Ans[i % stu2Ans.length]) {
      stu2 += 1;
    }
    if (answer === stu3Ans[i % stu3Ans.length]) {
      stu3 += 1;
    }
  }
  const maxScore = Math.max(stu1, stu2, stu3);
  const scoreArray = [stu1, stu2, stu3];
  const bestStu = [];
  for (let i = 0; i < scoreArray.length; i++) {
    let checkScore = scoreArray[i];
    if (checkScore === maxScore) {
      bestStu.push(i + 1);
    }
  }
  return bestStu;
}
