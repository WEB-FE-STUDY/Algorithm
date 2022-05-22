function solution(numbers) {
  let answer = [];
  numbers.map((num1, idx) => {
    for (let i = idx; i < numbers.length; i++) {
      if (idx === i) {
        continue;
      } else {
        answer.push(num1 + numbers[i]);
      }
    }
  });
  const set = new Set(answer);
  answer = [...set].sort((a, b) => a - b);
  return answer;
}

const numbers1 = [2, 1, 3, 4, 1];
const numbers2 = [5, 0, 2, 7];

console.log(solution(numbers1), solution(numbers2));
