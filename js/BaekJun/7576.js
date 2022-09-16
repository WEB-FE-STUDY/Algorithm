const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const bfs = (boxes, starts) => {
  let day = 0;
  const directions = [[1,0],[ 0,1],[0,-1] ,[-1,0]];
  const queue = [];
  starts.map((start) => {
    queue.push(start);
    while (queue.length) {
      const visitLoc = queue.shift();
      const zerosArr = visit.forEach((width,idx) => {if(width.indexOf(0) !== -1){
        return [idx, width.indexOf(0)]
      }}
      if (zerosArr.length|| zerosArr.forEach((zero)=>{
        const [zeroX, zeroY] = zero;
        
      })) {
      }
    }
  });
};

const solution = (input) => {
  const [width, height] = input.shift().split(" ").map(Number);
  const visit = new Array(height).fill().map(() => new Array(width).fill(0));
  const box = input.map((el) => el.split(" ").map(Number));
  const ripedTomatoes = [];
  box.forEach((width, idx) => {
    if (width.indexOf(1) !== -1) {
      ripedTomatoes.push([idx, width.indexOf(1)]);
    }
  });
  let answer = 0;
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
