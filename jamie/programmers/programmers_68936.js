// 쿼드압축 후 개수 세기
// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {

  const object = { 0: 0, 1: 0 };
  const end = arr.length - 1;

  const recursion = (x1, y1, x2, y2, n) => {

    if (x1 === x2 && y1 === y2) {
      object[arr[x1][y1]] += 1;
      return;
    }

    let isAllEqual = true, elem = arr[x1][y1];

    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (elem !== arr[i][j]) {
          isAllEqual = false;
          break;
        }
      }
      if (!isAllEqual) break;
    }

    if (isAllEqual) object[arr[x1][y1]] += 1;
    else {
      const newN = n / 2;
      recursion(x1, y1, x1 + newN - 1, y1 + newN - 1, newN);
      recursion(x1, y1 + newN, x1 + newN - 1, y2, newN);
      recursion(x1 + newN, y1, x2, y1 + newN - 1, newN);
      recursion(x1 + newN, y1 + newN, x2, y2, newN);
    }
  }

  recursion(0, 0, end, end, arr.length);

  return [object[0], object[1]];
}

console.log(solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]), [4, 9]);
