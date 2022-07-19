// n^2 배열 자르기

function solution(n, left, right) {
  //     let answer = [];

  //     let start = Math.floor(left / n) + 1;
  //     let end = Math.floor(right / n) + 1;
  //     let start_remain = left % n;
  //     let end_remain = right % n;

  //     for (let i = start; i <= end; i++) {
  //         for (let j = 1; j <= n; j++) {
  //             if (j <= i) answer.push(i);
  //             else answer.push(j);
  //         }
  //     }
  //     return (answer.slice(start_remain, answer.length - (n - end_remain) + 1));

  let answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(parseInt(i / n), i % n) + 1);
  }
  return answer;
}

// 거꾸로 배열 채움
// 배열 잘라서 붙임
// left 부터 right 까지 자르기

// 전체 배열 다 구하면 시간 초과 남 -> left, right 범위만큼 구해야 함
// 1 2 3 4 5 6
// 2 2 3 4 5 6
// 3 3 3 4 5 6
// 4 4 4 4 5 6
// 5 5 5 5 5 6
// 6 6 6 6 6 6

// 각 값이 max(x, y) + 1 이래 .....
