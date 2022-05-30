// 쿼드압축 후 개수 세기

let oneCount = 0;
let zeroCount = 0;

function check(arr, x, y, size) {
  let one = false;
  let zero = false;
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] === 1) one = true;
      else zero = true;
    }
  }
  if (one === true && zero === true) {
    check(arr, x, y, size / 2);
    check(arr, x + size / 2, y, size / 2);
    check(arr, x, y + size / 2, size / 2);
    check(arr, x + size / 2, y + size / 2, size / 2);
  } else if (one === true) {
    oneCount++;
    return;
  } else if (zero === true) {
    zeroCount++;
    return;
  }
}

function solution(arr) {
  let answer = [];

  check(arr, 0, 0, arr.length);

  answer.push(zeroCount, oneCount);

  return answer;
}
