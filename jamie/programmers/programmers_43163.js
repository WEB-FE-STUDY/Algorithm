// 단어 변환
// https://programmers.co.kr/learn/courses/30/lessons/43163

const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const words2 = ["hot", "dot", "dog", "lot", "log"];

function isOneLetterDifferent(wordA, wordB) {
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) return wordA.slice(i + 1) === wordB.slice(i + 1);
  }
}

function solution(begin, target, words) {

  function dfs(begin, visited = [], depth = 1, count = new Set()) {
    for (let word of words) {
      if (!visited.includes(word) && isOneLetterDifferent(begin, word)) {
        if (word === target) return count.add(depth);
        else dfs(word, visited.concat(word), depth + 1, count);
      }
    }
    return count;
  }

  const counts = dfs(begin);
  return counts.size ? Math.min(...counts) : 0;
}

console.log(solution(begin, target, words));
