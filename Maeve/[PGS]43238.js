// 이분탐색 - 입국 심사

function solution(n, times) {
  let answer = 0;
  times.sort((a, b) => a - b);

  let left = 1;
  let right = n * times[times.length - 1];
  answer = right;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let people = 0;

    times.forEach((time) => (people += Math.floor(mid / time)));

    console.log(people);

    if (people < n) left = mid + 1;
    else {
      // people >= n
      if (mid <= answer) answer = mid;
      right = mid - 1;
    }
  }

  return answer;
}

const n = 6;
const times = [7, 10];
console.log(solution(n, times));
