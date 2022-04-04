//프로그래머스 위장 Level2 60분
//[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]

function solution(clothes) {
  let answer = 1;
  const hashed = {};

  clothes.forEach((v) => {
    if (!hashed[v[1]]) hashed[v[1]] = [v[0]];
    else hashed[v[1]].push(v[0]);
  });

  for (let key in hashed) {
    answer *= hashed[key].length + 1;
  }

  return answer - 1;
}
