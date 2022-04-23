// 디스크 컨트롤러
// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
  const length = jobs.length;
  let currentTime = 0, totalTime = 0;
  const heap = [];

  jobs.sort((a, b) => {
    if (b[0] - a[0] < 0) return -1;
    if (b[0] - a[0] > 0) return 1;
    if (b[1] - a[1] < 0) return -1;
    if (b[1] - a[1] > 0) return 1;
  });

  while (jobs.length || heap.length) {

    let i = jobs.length - 1;

    if (i >= 0 && jobs[i][0] <= currentTime) {
      heap.push(jobs.pop());
      i--;
      heap.sort((a, b) => a[1] - b[1]);
      continue;
    }

    if (heap.length) {
      const [startTime, workTime] = heap.shift();
      currentTime += workTime;
      totalTime += currentTime - startTime;
    }

    else {
      currentTime = jobs[jobs.length - 1][0];
    }
  }
  return Math.floor(totalTime / length);
}

console.log(solution([[0, 10], [2, 10], [9, 10], [15, 2]]), 14)
console.log(solution([[0, 10], [2, 12], [9, 19], [15, 17]]), 25)
console.log(solution([[0, 3], [1, 9], [2, 6]]), 9)
console.log(solution([[0, 1]]), 1)
console.log(solution([[1000, 1000]]), 1000)
console.log(solution([[0, 1], [0, 1], [0, 1]]), 2)
console.log(solution([[0, 1], [0, 1], [0, 1], [0, 1]]), 2)
console.log(solution([[0, 1], [1000, 1000]]), 500)
console.log(solution([[100, 100], [1000, 1000]]), 550)
console.log(solution([[10, 10], [30, 10], [50, 2], [51, 2]]), 6)
console.log(solution([[0, 3], [1, 9], [2, 6], [30, 3]]), 7)
console.log(solution([[0, 1], [1, 1], [50, 7]]), 3)
console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]), 72)
