// 입국심사
// https://programmers.co.kr/learn/courses/30/lessons/43238

const n = 6;
const times = [7, 10];

const check = (mid, times) => {
  return times.reduce((total, time) => {
    return total += parseInt(mid / time);
  }, 0);
}

function solution(n, times) {
  let max = n * Math.max(...times), min = 1;
  while (min + 1 < max) {
    let mid = min + parseInt((max - min) / 2);
    check(mid, times) >= n ? max = mid : min = mid;
  }
  return max;
}

console.log(solution(n, times), 28);
