function solution(jobs) {
  let [answer, sum] = [0, 0];
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });
  const heap = [];
  let [wait, i] = [0, 0];
  // 힙이 비이면 종료
  while (i < jobs.length || heap.length !== 0) {
    if (i < jobs.length && jobs[i][0] <= wait) {
      heap.push(jobs[i++]);
      heap.sort((a, b) => {
        return a[1] - b[1];
      });
      continue;
    }
    console.log(heap);
    // 도착한 작업 없을 때
    if (heap.length === 0) {
      wait = jobs[i][0];
    } else {
      const [start, work] = heap.shift();
      sum += wait + work - start;
      wait += work;
    }
  }
  answer = parseInt(sum / jobs.length);
  return answer;
}
const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];
console.log(solution(jobs));
