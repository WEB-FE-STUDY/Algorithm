// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

const priorities = [2, 1, 3, 2];
const location = 2;

const isHighPriority = (doc, arr) => {
  return arr.every((elem) => doc.priority >= elem.priority);
};

function solution(priorities, location) {
  const arr = priorities.map((priority, idx) => {
    return { idx, priority };
  });
  let answer = 0;

  while (arr.length) {
    const doc = arr.shift();
    if (isHighPriority(doc, arr)) {
      answer++;
      if (doc.idx === location) break;
    } else {
      arr.push(doc);
    }
  }

  return answer;
}

console.log(solution(priorities, location));
