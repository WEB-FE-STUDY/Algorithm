function solution(progresses, speeds) {
  var answer = [];
  let count = 1;
  let prevTime = null;

  for (let i = 0; i <= progresses.length; i++) {
    const time = Math.ceil((100 - progresses[i]) / speeds[i]);

    if (prevTime === null) {
      prevTime = time;
      continue;
    }

    if (prevTime >= time) {
      count += 1;
    } else {
      answer.push(count);
      count = 1;
      prevTime = time;
    }
  }

  return answer;
}
