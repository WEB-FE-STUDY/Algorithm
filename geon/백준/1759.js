const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [l, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ");
const passwords = [];

function checkJaMo(s) {
  const mos = ["a", "e", "i", "o", "u"];

  let ja = 0;
  let mo = 0;

  for (let i = 0; i < s.length; i++) {
    if (mos.includes(s[i])) {
      mo += 1;
    } else {
      ja += 1;
    }
  }

  return mo >= 1 && ja >= 2;
}

function recursion(arr, s) {
  if (s.length === l) {
    passwords.push(s);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const base = arr[i];
    const rest = arr.slice(i + 1);
    if (rest) {
      recursion(rest, s + base);
    }
  }
}
recursion(arr.sort(), "");

const answer = passwords.filter(checkJaMo).join("\n");

console.log(answer);
