// 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  return JSON.parse(s.replace(/{/gi, '[').replace(/}/gi, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((answer, arr) => [... answer, ...arr.filter(num => !answer.includes(num))], []);
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'), [2, 1, 3, 4]);
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'), [2, 1, 3, 4]);
console.log(solution('{{20,111},{111}}'), [111, 20]);
console.log(solution('{{123}}'), [123]);
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'), [3, 2, 4, 1]);
