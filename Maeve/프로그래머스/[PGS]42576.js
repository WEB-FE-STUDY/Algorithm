// 완주하지 못한 선수
let map = new Map();

function solution(participant, completion) {
  participant.forEach((e) => {
    // if (!map.has(e)) map.set(e, 1);
    // else map.set(e, map.get(e) + 1);
    map.set(e, (map.get(e) || 0) + 1);
  });

  completion.forEach((e) => {
    map.set(e, map.get(e) - 1);
  });

  for (let value of map) {
    if (value[1] === 1) return value[0];
  }
}
