// 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length) {
    let count = 1;
    const work = progresses.shift();
    const speed = speeds.shift();
    const day = Math.ceil((100 - work) / speed);

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] + speeds[i] * day < 100) break;
      else count++;
    }

    progresses.splice(0, count - 1);
    speeds.splice(0, count - 1);

    answer.push(count);
  }

  return answer;
}

console.log(solution(progresses, speeds));
