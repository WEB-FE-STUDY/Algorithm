function solution(progresses, speeds) {
  let answer = [];
  let current = [...progresses];
  while (current.length > 0) {
    for (let i = 0; i < current.length; i++) {
      if (current[i] < 100) {
        current[i] += speeds[i];
      }
    }
    let countFinished = 0;
    while (current[0] >= 100) {
      current.shift();
      speeds.shift();
      countFinished += 1;
    }
    if (countFinished > 0) {
      answer.push(countFinished);
    }
  }
  return answer;
}
const progresses = [20, 99, 93, 30, 55, 10];
const speeds = [5, 10, 1, 1, 30, 5];
console.log(solution(progresses, speeds));
