function solution(lottos, win_nums) {
  let [max, min] = [7, 7];
  lottos.forEach((num) => {
    if (win_nums.includes(num)) {
      min--;
      max--;
    } else if (num === 0) {
      max--;
    }
  });
  if (min === 7) min--;
  if (max === 7) max--;
  const answer = [max, min];
  return answer;
}

const [lottos, winNums] = [
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
];
console.log(solution(lottos, winNums));
