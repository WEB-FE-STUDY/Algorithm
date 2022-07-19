//프로그래머스 완주하지 못한 선수 Level1 10분

// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();

//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       return participant[i];
//     }
//   }
// }

function solution(participant, completion) {
  const hashed = new Map();

  participant.forEach((name) => {
    if (hashed.get(name)) {
      hashed.set(name, hashed.get(name) + 1);
      return;
    }
    hashed.set(name, 1);
  });

  completion.forEach((name) => {
    hashed.set(name, hashed.get(name) - 1);
  });

  for (let entries of hashed) {
    if (entries[1] > 0) return entries[0];
  }
}
