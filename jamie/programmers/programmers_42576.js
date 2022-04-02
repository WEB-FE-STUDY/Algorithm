// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (const i in completion) {
    if (participant[i] !== completion[i]) return participant[i];
  }

  return participant[participant.length - 1];
}

console.log(solution(participant, completion));
