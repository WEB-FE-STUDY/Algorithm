const begin = 'hit';
const target = 'cog';
const words = ["hot", "dot", "dog", "lot", "log"];

function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) {
    return answer;
  }
  // 한글자만 다른거 찾기
  const firstDepth = getNextDepth(begin, words);
  answer = dfs(firstDepth, target, words);
  
  return answer;
}

const getNextDepth = (begin, words) => {
  return words.filter(word => {
    let count = 0;
    [...word].forEach((w, i) => {
      if (w !== begin[i]) {
        count += 1;
      }
    });
    if (count === 1) {
      return word;
    }
  });
};

const dfs = (depth, target, words) => {
  if (depth.includes(target)) {
    return 1;
  }
  
  //words에서 depth의 단어들 삭제
  const restWords = words.filter(elem => {
    return !words.includes(elem) || !depth.includes(elem);
  });

  for (let i = 0; i <= depth.length; i++) {
    const nextDepth = getNextDepth(depth[i], words);
    return 1 + dfs(nextDepth, target, restWords);
  }
};

console.log(solution(begin, target, words));
