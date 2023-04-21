const [n, k, ...a] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/).map(Number);
const robots = a.map(() => false);
let upper = Array.from({ length: n }, (_, i) => i);
let [z, zz] = [0, 0];
let ans = 0;
let cnt = 0;

const rotate = () => {
  upper = upper.map((v) => (v - 1 >= 0 ? v - 1 : v - 1 + 2 * n));
};

while (true) {
  ans += 1;
  rotate();
  const [upIdx, downIdx] = [upper[0], upper.at(-1)];
  if (robots[downIdx]) {
    robots[downIdx] = false;
  }
  for (let i = n - 2; i > 0; i--) {
    const idx = upper[i];
    const nextIdx = upper[i + 1];
    if (robots[idx] && !robots[nextIdx] && a[nextIdx]) {
      a[nextIdx] -= 1;
      robots[idx] = false;
      robots[nextIdx] = true;

      if (a[nextIdx] === 0) {
        cnt += 1;
      }
      if (robots[downIdx]) {
        z += 1;
      }
    }
  }

  if (robots[downIdx]) {
    robots[downIdx] = false;
    zz += 1;
  }
  if (a[upIdx]) {
    robots[upIdx] = true;
    a[upIdx] -= 1;
    if (a[upIdx] === 0) {
      cnt += 1;
    }
  }

  if (cnt >= k) {
    break;
  }
}

console.log(z, zz, ans);
