const [n, ...arr] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/);
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(max * min);
