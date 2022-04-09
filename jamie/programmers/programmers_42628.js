// 이중우선순위큐
// https://programmers.co.kr/learn/courses/30/lessons/42628

const operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];

const insertNum = (arr, num) => {
  if (!arr.length) arr.push(num);
  else {
    for (let i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
        arr.splice(i, 0, num);
        return;
      }
    }
    arr.push(num);
  }
}

const deleteNum = (arr, num) => {
  if (!arr.length) return;
  if (num === -1) arr.shift();
  else arr.pop();
}

function solution(operations) {
  const arr = [];
  operations.forEach(operation => {
    const [operator, num] = operation.split(' ');
    if (operator === 'I') insertNum(arr, parseInt(num));
    else deleteNum(arr, parseInt(num));
  })
  if (!arr.length) return [0, 0];
  else return [arr[arr.length - 1], arr[0]];
}

console.log(solution(operations), [333, -45]);
