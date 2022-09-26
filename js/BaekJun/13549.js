const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const [start, target] = input.split(" ").map(Number);
  const visit = new Array(100001).fill(0);
  const bfs = (start, target) => {
    const queue = [];
    queue.push([start, 0]);
    visit[start] = 1;
    while (queue.length) {
      const [cur, time] = queue.shift();
      if (cur === target) return time;
      [cur - 1, cur + 1, cur * 2].forEach((el) => {
        if (!visit[el] && el >= 0 && el <= 100000) {
          visit[el] = 1;
          if (el === cur * 2) {
            queue.unshift([el, time]);
          }
          queue.push([el, time + 1]);
        }
      });
    }
  };
  let answer = bfs(start, target);
  return answer;
};

rl.on("line", (answer) => {
  console.log(solution(answer));
  rl.close();
});

// switch (visit[cur * 2]) {
//     case 0:
//       [cur * 2 - 1, cur * 2 + 1].forEach((el) => {
//         if (visit[el] === 0 && el >= 0 && el <= 100000) {
//           visit[el] = 1;
//           queue.push(el);
//         }
//       });
//       break;
//     case 1:
//       [cur - 1, cur + 1].forEach((el) => {
//         if (visit[el] === 0 && el >= 0 && el <= 100000) {
//           visit[el] = 1;
//           queue.push(el);
//         }
//       });
//       break;
//   }
