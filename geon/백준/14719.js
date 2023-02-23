const [[h, w], arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
let ans = 0;
let cnt = 0;
let flag = false;

for (let i = 1; i <= h; i++) {
  flag = false;
  cnt = 0;
  for (let j = 0; j < w; j++) {
    if (!flag && arr[j] >= i && arr[j + 1] < i) {
      flag = true;
    } else if (flag && arr[j] < i) {
      cnt += 1;
    } else if (flag && arr[j] >= i) {
      ans += cnt;
      cnt = 0;
      if (arr[j + 1] >= i) {
        flag = false;
      }
    }
  }
}

console.log(ans);
