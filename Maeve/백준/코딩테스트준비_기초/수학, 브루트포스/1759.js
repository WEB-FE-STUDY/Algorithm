// 1759 암호 만들기
const { resolveObjectURL } = require("buffer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [L, C] = input[0].split(" ").map(Number);
  const letters = input[1].split(" ").sort();

  const vowel = ["a", "e", "i", "o", "u"];
  const answer = [];

  function recursive(str, startIndex) {
    if (str.length === L) {
      let vowel_count = 0;
      for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) vowel_count++;
      }
      if (vowel_count >= 1 && L - vowel_count >= 2) answer.push(str);
      return;
    }

    for (let i = startIndex; i < C; i++) {
      recursive(str + letters[i], i + 1);
    }
  }

  recursive("", 0);

  console.log(answer.join("\n"));
};

rl.on("line", (passwords) => {
  input.push(passwords.trim());
}).on("close", () => {
  solution(input);
});

// 4 6
// a t c i s w
// a c i s t w

// 순열 다 구하고 조건 만족(모음 1개, 자음 2개)하는 경우만 filter.. ? -> ok
// 아니면 모음 1개, 자음 2개 뽑고 나머지 뽑고 나열 ..? -> 귀찮을 것 같음
