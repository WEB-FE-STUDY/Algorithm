// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

const people = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const answer = [];

  const counts = people.map(person =>
    answers.reduce((count, answer, index) =>
      answer === person[index % person.length] ? ++count : count, 0)
  );

  const max = Math.max(...counts);

  counts.forEach((count, index) => count === max && answer.push(index + 1))

  return answer;
}
