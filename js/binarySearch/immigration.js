function solution(n, times) {
  let answer = 0;
  const sortedTimes = times.sort((a, b) => {
    return a - b;
  });
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    const immigrate = times.reduce(
      (pre, cur) => pre + Math.floor(mid / cur),
      0
    );
    if (immigrate >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left;
}

const n1 = 6;
const times1 = [7, 10];
const n2 = 10;
const times2 = [6, 8, 10];
console.log(solution(n1, times1));
