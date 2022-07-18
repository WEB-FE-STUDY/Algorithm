// 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302

const distanceCase = [
  [[0, 1], [0, -1], [1, 0], [-1, 0]],
  [[1, 1], [1, -1], [-1, -1], [-1, 1]],
  [[0, 2], [0, -2], [2, 0], [-2, 0]],
];

const checkIndex = (col, row) => {
  return col >= 0 && col <= 4 && row >= 0 && row <= 4;
}

function solution(places) {
  return places.map((place) => {
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 5; row++) {
        if (place[col][row] === 'P') {
          for (const [posA, posB] of distanceCase[0]) {
            if (checkIndex(col + posA, row + posB) && place[col + posA][row + posB] === 'P') return 0;
          }
          for (const [posA, posB] of distanceCase[1]) {
            if (checkIndex(col + posA, row + posB) && place[col + posA][row + posB] === 'P') {
              if (place[col][row + posB] !== 'X' || place[col + posA][row] !== 'X') return 0;
            }
          }
          for (const [posA, posB] of distanceCase[2]) {
            if (checkIndex(col + posA, row + posB) && place[col + posA][row + posB] === 'P') {
              if (place[col + (posA / 2)][row + (posB / 2)] !== 'X') return 0;
            }
          }
        }
      }
    }
    return 1;
  })
}

console.log(solution([['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'], ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'], ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'], ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'], ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP']]), [1, 0, 1, 1, 1]);
