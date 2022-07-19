function solution(progresses, speeds) {
  let answer = [];

  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let cur = days[0];
  let cnt = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] > cur) {
      answer.push(cnt);
      cur = days[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  answer.push(cnt);

  return answer;
}
