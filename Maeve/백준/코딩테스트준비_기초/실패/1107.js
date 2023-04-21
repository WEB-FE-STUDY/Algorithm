// 1107 리모컨

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const channel = input[0];
  const brokenCount = Number(input[1]);
  const broken = input[2] ? input[2].split(" ").map(Number) : [];

  if (channel === "100") return console.log(0);
  if (brokenCount === 0) return console.log(channel.length);

  function getClosestNum(num) {
    let result = 10;
    for (let i = 0; i <= 9; i++) {
      if (!broken.includes(i)) {
        result = Math.min(result, Math.abs(num - i));
        // console.log(num, i, result, Math.abs(num - i));
      }
    }
    // console.log("두 수의 차이는 ", result);
    return result;
  }

  let answer = 0;

  for (let i = channel.length - 1; i >= 0; i--) {
    const num = Number(channel[i]);
    // console.log("num = ", num);
    if (!broken.includes(num)) answer++;
    else {
      answer++;
      // console.log("herre");
      const closestNum = getClosestNum(num);
      answer += closestNum;
    }
    console.log("answer = ", answer);
  }

  answer = Math.min(answer, Math.abs(+channel - 100));

  // console.log(channel, brokenCount, broken);
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

/*
채널이 100 이면 return 0
일단 고장난 개수가 0이면 return 채널 길이 

거꾸로 접근해서 그 숫자가 broken에 있으면 answer += 1;
broken에 없으면 근처 숫자 찾고 그 차이만큼 answer에 더하기 

answer 랑 Math.abs(channel - 100) 중에 min 값 출력

*/
