const [s, t] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");

const sol = (t) => {
  if (t.length === s.length) {
    return t === s ? 1 : 0;
  }

  let result = 0;
  if (t[t.length - 1] === "A") {
    result = sol(t.slice(0, -1));
  }

  if (t[0] === "B") {
    result = result || sol(t.split("").reverse().join("").slice(0, -1));
  }

  return result;
};

console.log(sol(t));