function solution(priorities, location) {
  let answer = 1;
  let curLocation = location;
  let target = priorities[location];
  while (true) {
    const max = Math.max(...priorities);
    const check = priorities.shift();
    if (check === max) {
      if (curLocation === 0) break;
      else {
        curLocation--;
        answer++;
      }
    } else {
      priorities.push(check);
      if (curLocation === 0) {
        curLocation = priorities.length - 1;
      } else {
        curLocation--;
      }
      target = priorities[curLocation];
    }
  }
  return answer;
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
console.log(solution(priorities, location));
