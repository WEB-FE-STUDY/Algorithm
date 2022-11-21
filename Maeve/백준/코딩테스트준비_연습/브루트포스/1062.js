// 1062 가르침

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, k] = input.shift().split(" ").map(Number);
  let answer = 0;

  if (k < 5) {
    console.log(0);
    return;
  }

  const ALPHABET = new Array(26).fill(false);
  const a = "a";

  ALPHABET["a".charCodeAt(0) - a.charCodeAt(0)] = true;
  ALPHABET["n".charCodeAt(0) - a.charCodeAt(0)] = true;
  ALPHABET["t".charCodeAt(0) - a.charCodeAt(0)] = true;
  ALPHABET["c".charCodeAt(0) - a.charCodeAt(0)] = true;
  ALPHABET["i".charCodeAt(0) - a.charCodeAt(0)] = true;

  // 체크되지 않은 ALPHABET에서 k - 5 개의 조합을 뽑으면 된다

  const getReadableString = () => {
    // k - 5 개 조합 뽑힌 상태
    let count = 0;

    for (let string of input) {
      let isAvailable = true;
      for (let i = 0; i < string.length; i++) {
        const ASCII_INDEX = string[i].charCodeAt(0) - a.charCodeAt(0);
        if (!ALPHABET[ASCII_INDEX]) {
          isAvailable = false;
          break; // 시간 단축
        }
      }
      if (isAvailable) count++;
    }

    return count;
  };

  const dfs = (index, count) => {
    if (count === k - 5) {
      answer = Math.max(answer, getReadableString());
      return;
    }

    for (let i = index; i < 26; i++) {
      if (ALPHABET[i]) continue;
      ALPHABET[i] = true;
      dfs(i, count + 1);
      ALPHABET[i] = false;
    }
  };

  dfs(0, 0);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
