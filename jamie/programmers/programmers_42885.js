// 구명보트
// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let left = 0, right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) right--;
    left++;
    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100), 3);
console.log(solution([70, 80, 50], 100), 3);
console.log(solution([40, 50, 150, 160], 200), 2);
console.log(solution([100, 500, 500, 900, 950], 1000), 3);
