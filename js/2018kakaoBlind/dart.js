function makeScore(arr) {
  console.log(arr);
  let num = arr[0];
  if (arr[1] === "0") {
    num = 10;
  }
  switch (arr[arr.length - 1]) {
    case "S":
      return num;
    case "D":
      return num ** 2;
    case "T":
      return num ** 3;
  }
}

function solution(dartResult) {
  const dartArr = dartResult.split("");
  const concattedArr = [];
  for (let i = 0; i < dartArr.length; i += 2) {
    const check = dartArr[i + 2];
    if (Number.isNaN(Number(check))) {
      concattedArr.push(dartArr.slice(i, i + 3));
      i++;
    } else {
      concattedArr.push(dartArr.slice(i, i + 2));
    }
  }
  const answerArr = [];
  concattedArr.map((dart) => {
    const score =
      (dart[dart.length - 1] === "#") | (dart[dart.length - 1] === "*")
        ? makeScore([...dart].slice(0, -1))
        : makeScore(dart);
    switch (dart[dart.length - 1]) {
      case "#":
        answerArr.push(-1 * score);
        break;
      case "*":
        if (answerArr.length !== 0) {
          answerArr[answerArr.length - 1] *= 2;
        }
        answerArr.push(score * 2);
        break;
      default:
        answerArr.push(Number(score));
        break;
    }
  });
  let answer = answerArr.reduce((pre, cur) => (pre += cur));
  return answer;
}

const dartResult = "1D2S#10S";
const dartResult2 = `1D2S0T`;
console.log(solution(dartResult));
