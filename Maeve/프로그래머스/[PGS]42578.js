// 위장

function solution(clothes) {
  let answer = 1;
  let map = new Map();

  for (let i = 0; i < clothes.length; i++) {
    map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) + 1);
  }

  for (let count of map) {
    answer *= count[1] + 1; // 동그란 안경 or 검정 선글라스 or 안 씀 => 3가지
  }

  return answer - 1; // 아무것도 안 입는 경우 제외
}
