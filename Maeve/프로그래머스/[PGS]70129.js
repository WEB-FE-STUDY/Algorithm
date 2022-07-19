// 이진 변환 반복하기

function solution(s) {
  let answer = [];
  let convertCount = 0;
  let zeroCount = 0;

  while (true) {
    if (s.length === 1) {
      answer.push(convertCount);
      answer.push(zeroCount);
      break;
    }

    let c = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") c++;
    }

    zeroCount += s.length - c;
    convertCount++;

    let tempString = "";

    while (c) {
      tempString += c % 2;
      c = Math.floor(c / 2);
    }

    s = tempString;
  }

  return answer;
}
console.log(solution("110010101001"));
