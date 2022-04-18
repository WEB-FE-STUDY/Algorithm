const n = 6;
const times = [7, 10];

function solution(n, times) {
  var answer = 0;

  times.sort((a, b) => a - b);
  let left = 0;
  let right = n * times[times.length - 1];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const capacity = times.reduce((prev, time) => {
      return prev + Math.floor(mid / time);
    }, 0);

    if (capacity >= n) {
      right = mid - 1;
    } else if (capacity < n) {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return left;
}

console.log(solution(n, times))
