// 다트 게임

function solution(dartResult) {
  let answer = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    // 10인지 판별
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        temp = 10;
        i++;
      } else temp = dartResult[i];
    }

    if (dartResult[i] === "S") answer.push(Math.pow(temp, 1));
    else if (dartResult[i] === "D") answer.push(Math.pow(temp, 2));
    else if (dartResult[i] === "T") answer.push(Math.pow(temp, 3));
    else if (dartResult[i] === "*") {
      answer[answer.length - 2] *= 2;
      answer[answer.length - 1] *= 2;
    } else if (dartResult[i] === "#") answer[answer.length - 1] *= -1;
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

// 정규표현식 써야겠는데 모르겠음
