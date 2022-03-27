// H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747

const citations = [3, 0, 6, 1, 5];
const citations2 = [10, 10, 10, 10, 10];

function solution(citations) {
  let max = 0;
  for (let i = 1; i <= 10000; i++) {
    let less = 0, more = 0;
    for (let j = 0; j < citations.length; j++) {
      i >= citations[j] && less++;
      i <= citations[j] && more++;
    }
    if (less <= i && more >= i) max = i;
  }
  return max;
}

console.log(solution(citations));
