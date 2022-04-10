function solution(participant, completion) {
  let answer = "";
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();
  for (let i = 0; i < sortedParticipant.length; i++) {
    const participant = sortedParticipant[i];
    const completion = sortedCompletion[i];
    if (participant !== completion) {
      answer = participant;
      return answer;
    }
  }
}

const participant1 = ["mislav", "stanko", "mislav", "ana"];
const completion1 = ["stanko", "ana", "mislav"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion2 = ["josipa", "filipa", "marina", "nikola"];
const participant3 = ["leo", "kiki", "eden"];
const completion3 = ["eden", "kiki"];

console.log(solution(participant1, completion1));
console.log(solution(participant2, completion2));
console.log(solution(participant3, completion3));
