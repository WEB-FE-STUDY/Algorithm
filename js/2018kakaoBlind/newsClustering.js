function twoWordSplit(str) {
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    const node = str.substr(i, 2);
    if (node.match(/[A-Za-z]{2}/)) {
      result.push(node.toLowerCase());
    }
  }
  return result;
}

function solution(str1, str2) {
  const [word1Arr, word2Arr] = [twoWordSplit(str1), twoWordSplit(str2)];

  const set = new Set([...word1Arr, ...word2Arr]);
  let union = 0;
  let intersection = 0;
  set.forEach((item) => {
    const has1 = word1Arr.filter((x) => x === item).length;
    const has2 = word2Arr.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  const answer = union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
  return answer;
}

// function twoWordSplit(str) {
// const strArr = str.replace(/ /g, "").split(""); // 문자열만 추출 후 공백 제거
// for (let i = 0; i < strArr.length - 1; i++) {
//   arr.push(strArr.slice(i, i + 2));
// }
// const joinedArr = arr.map((arr) => arr.join(""));
// return joinedArr;
// }
// const sum = word1Arr.length + word2Arr.length - intersection;

// function solution(str1, str2) {
//   const [word1Arr, word2Arr] = [twoWordSplit(str1), twoWordSplit(str2)];
// const sum = [...new Set([...word1Arr, ...word2Arr])];
// const intersection = word1Arr.filter((word) => word2Arr.includes(word)).length;
// const sum = word1Arr.length + word2Arr.length - intersection;
//   const answer = union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
//   return answer;
// }
const [str1, str2] = ["abc", "abbb"];
console.log(solution(str1, str2));
