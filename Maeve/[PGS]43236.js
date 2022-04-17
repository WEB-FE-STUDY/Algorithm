// 이분 탐색 - 징검다리

function solution(distance, rocks, n) {
  let answer = 0;
  let left = 0;
  let right = distance;

  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  console.log(rocks);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let current = 0;
    let removed_rocks = 0;
    let min = 1000000000;

    // 바위 삭제하는 과정
    for (let i = 0; i < rocks.length; i++) {
      let diff = rocks[i] - current;
      if (diff < mid) removed_rocks++;
      else {
        current = rocks[i];
        if (diff < min) min = diff;
      }
    }

    // 이분 탐색 과정
    if (removed_rocks > n) right = mid - 1;
    else {
      // removed_rocks <= n
      answer = min;
      left = mid + 1;
    }
  }

  return answer;
}
