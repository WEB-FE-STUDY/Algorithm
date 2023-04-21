const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const checkCount = (xNum, oNum) => {
  return xNum === oNum || xNum === oNum + 1;
};

const isWin = (arr, symbol) => {
  for (let i = 0; i < 3; i++) {
    if (arr[i * 3] === symbol && arr[i * 3 + 1] === symbol && arr[i * 3 + 2] === symbol) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (arr[i] === symbol && arr[i + 3] === symbol && arr[i + 6] === symbol) {
      return true;
    }
  }
  if (arr[0] === symbol && arr[4] === symbol && arr[8] === symbol) {
    return true;
  }
  if (arr[2] === symbol && arr[4] === symbol && arr[6] === symbol) {
    return true;
  }
  return false;
};

const whoWin = (arr, xNum, oNum) => {
  if (isWin(arr, "X") && !isWin(arr, "O") && xNum === oNum + 1) {
    return true;
  } else if (!isWin(arr, "X") && isWin(arr, "O") && xNum === oNum) {
    return true;
  } else if (!isWin(arr, "X") && !isWin(arr, "O") && xNum === 5 && oNum === 4) {
    return true;
  }
  return false;
};

const check = (arr) => {
  let [xNum, oNum] = [0, 0];
  for (let i = 0; i < 9; i++) {
    if (arr[i] === "X") xNum++;
    else if (arr[i] === "O") oNum++;
  }
  return checkCount(xNum, oNum) && whoWin(arr, xNum, oNum) ? "valid" : "invalid";
};

const solution = (input) => {
  input.pop();
  const testArr = input.map((el) => el.split(""));

  testArr.forEach((test) => console.log(check(test)));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
