// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];

// const solution = (input) => {
//   return input.map((idx) => {
//     let input = Number(idx);
//     let count = "1";
//     while (true) {
//       const bigger = Number(count + "1");
//       if (bigger % input === 0) {
//         console.log(String(bigger).length);
//         break;
//       } else {
//         count = String(bigger);
//       }
//     }
//   });
// };

// rl.on("line", (answer) => {
//   input.push(answer.trim());
// }).on("close", () => {
//   console.log(solution(input));
// });

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((idx) => +idx);
const solution = (input) => {
  input.map((idx) => {
    let input = Number(idx);
    let count = 1;
    let length = "1";
    while (true) {
      if (count % input === 0) {
        console.log(length.length);
        break;
      } else {
        count = count * 10 + 1;
        count %= input;
        length += "1";
      }
    }
  });
};
solution(input);
