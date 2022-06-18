// 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

const getIndex = (num) => {
  if (!num) return [3, 1];
  else return [~~((num - 1) / 3), (num - 1) % 3];
};

const getDistance = (coordsA, coordsB) => {
  return Math.abs(coordsA[0] - coordsB[0]) + Math.abs(coordsA[1] - coordsB[1]);
};

function solution(numbers, hand) {
  let left = [3, 0];
  let right = [3, 2];

  const findClosestHand = (cur) => {
    const leftDistance = getDistance(left, cur);
    const rightDistance = getDistance(right, cur);
    if (leftDistance === rightDistance) return hand === 'left' ? 'L' : 'R';
    return leftDistance > rightDistance ? 'R' : 'L';
  };

  return numbers.reduce((str, num) => {
    const [row, col] = getIndex(num);
    let cur;

    if (col === 0) cur = 'L';
    else if (col === 2) cur = 'R';
    else cur = findClosestHand([row, col]);

    cur === 'L' ? left = [row, col] : right = [row, col];

    return str + cur;
  }, '');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'), 'LRLLLRLLRRL');
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"), "LRLLRRLLLRR");
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"), "LLRLLRLLRL");
