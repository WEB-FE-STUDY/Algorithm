const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  return commands.map(command => {
    const [begin, end, target] = command;
    const newArray = array.slice(begin - 1, end).sort((a, b) => a - b);
    return newArray[target - 1];
  });
}

console.log(solution(array, commands));
