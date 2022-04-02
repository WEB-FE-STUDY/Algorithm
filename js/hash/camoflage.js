function solution(clothes) {
  let answer = 1;
  const hash = {};

  for (const cloth of clothes) {
    hash[cloth[1]] = (hash[cloth[1]] || 1) + 1; //obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(옷의 개수)을 더해줌.
  }

  for (let key in hash) {
    answer *= hash[key];
  }
  return answer - 1;
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
