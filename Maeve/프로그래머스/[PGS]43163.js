// 단어 변환

// BFS
// let queue = [];
// let visited = Array.from({ length: 51 }, () => 0);

// function isAvailable(front, word) {
//   let count = 0;
//   for (let i = 0; i < front.length; i++) {
//     if (front[i] !== word[i]) count++;
//   }

//   if (count === 1) return true;
//   else return false;
// }

// function solution(begin, target, words) {
//   let answer = 0;

//   if (!words.includes(target)) return answer;

//   queue.push(begin);

//   while (queue.length !== 0) {
//     let front = queue.shift();
//     console.log(front);

//     let cnt = 0;
//     for (let i = 0; i < words.length; i++) {
//       if (!visited[i] && words[i] === target) break;

//       // 방문하지 않았고 한 자리만 다르면
//       if (!visited[i] && isAvailable(front, words[i])) {
//         // 방문 체크 하고 넣음
//         queue.push(words[i]);
//         cnt++;

//         visited[i] = 1;
//       }
//     }
//     console.log('cnt = ', cnt);
//   }

//   return answer;
// }

// DFS

let visited = [];
let answer = [];

function isAvailable(front, word) {
  let count = 0;
  for (let i = 0; i < front.length; i++) {
    if (front[i] !== word[i]) count++;
  }

  if (count === 1) return true;
  else return false;
}

function dfs(index, front, target, words, count) {
  if (words[index] === target) {
    if (count) answer.push(count);
    return;
  }

  for (let i = 0; i < words.length; i++) {
    if (!visited[i] && isAvailable(front, words[i])) {
      visited[index] = 1;
      dfs(i, words[i], target, words, count + 1);
    }
  }
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  for (let i = 0; i < words.length; i++) {
    visited = Array.from({ length: 51 }, () => 0);
    dfs(i, begin, target, words, 0);
  }

  return Math.min(...answer);
}

let begin = 'hit';
let target = 'cog';
let words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

console.log(solution(begin, target, words));
