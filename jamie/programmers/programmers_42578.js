// 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578

const clothes = [['yellowhat', 'headgear'], ['bluesunglasses', 'eyewear'], ['green_turban', 'headgear']];
const clothes2 = [['crowmask', 'face'], ['bluesunglasses', 'face'], ['smoky_makeup', 'face']];

// 1번 케이스 시간 초과
function solution(clothes) {
  let obj = {}, count = 0;

  for (const [_, type] of clothes) {
    obj[type] ? obj[type]++ : obj[type] = 1;
  }

  const dfs = (values, depth = 1) => {
    values.forEach((value, index) => {
      for (let i = 1; i <= value; i++) {
        count++;
        index + 1 !== values.length && dfs(values.slice(index + 1), depth + 1);
      }
    })
  };

  dfs(Object.values(obj));

  return count;
}

// 공식 적용
function solution2(clothes) {
  let obj = {};

  for (const [_, type] of clothes) {
    obj[type] ? obj[type]++ : obj[type] = 1;
  }

  return Object.values(obj).reduce((prev, cur) => prev *= (cur + 1), 1) - 1;
}

console.log(solution(clothes));
console.log(solution2(clothes));
