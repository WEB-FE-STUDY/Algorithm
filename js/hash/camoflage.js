function solution(clothes) {
  let answer = 1; // 0에는 어떤 숫자를 곱해도 0이기에 1로 해줌
  const hash = {};

  for (let cloth of clothes) {
    // hash에 옷의 종류를 넣어주되, 이미 hash에 있다면 +1, 없다면 1로 선언
    if (hash[cloth[1]]) {
      hash[cloth[1]]++;
    } else {
      hash[cloth[1]] = 1;
    }
  }
  for (let key in hash) {
    answer *= hash[key];
  }
  return answer - 1; // 하나도 안 입엇을 경우 제거
}
const cloth1 = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const cloth2 = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

console.log(solution(cloth1));
console.log(solution(cloth2));
