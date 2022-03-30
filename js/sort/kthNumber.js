function solution(array, commands) {
  const answer = [];
  commands.map((command) => {
    const slicedArr = array.slice(command[0] - 1, command[1]);
    const sortedSlicedArr = slicedArr.sort((a, b) => {
      return a - b;
    });
    answer.push(sortedSlicedArr[command[2] - 1]);
  });
  return answer;
}
const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(array, commands));
