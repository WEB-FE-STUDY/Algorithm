const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const reverseTopDown = (arr) => {
  return [...arr].reverse();
};

const reverseleftRight = (arr) => {
  const [n, m] = [arr.length, arr[0].length];
  const reversedArr = new Array(n).fill(0).map(() => new Array(m).fill(0));
  reversedArr.forEach((line, i) =>
    line.forEach((_, j) => {
      reversedArr[i][j] = arr[i][arr[i].length - 1 - j];
    })
  );
  return reversedArr;
};

const spinRight = (arr) => {
  const [n, m] = [arr.length, arr[0].length];
  const spinnedArr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  spinnedArr.forEach((line, i) =>
    line.forEach((_, j) => {
      spinnedArr[i][j] = arr[arr.length - 1 - j][i];
    })
  );
  return spinnedArr;
};

const spinLeft = (arr) => {
  const [n, m] = [arr.length, arr[0].length];
  const spinnedArr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  spinnedArr.forEach((line, i) =>
    line.forEach((_, j) => {
      spinnedArr[i][j] = arr[j][spinnedArr.length - 1 - i];
    })
  );
  return spinnedArr;
};

const devideArea = (n, m) => {
  const devidedArr = new Array(n).fill(0).map(() => new Array(m).fill(1));
  const [halfN, halfM] = [n / 2, m / 2];
  devidedArr.forEach((line, i) => {
    line.forEach((_, j) => {
      if (i < halfN && j >= halfM) {
        devidedArr[i][j] = 2;
      } else if (i >= halfN && j >= halfM) {
        devidedArr[i][j] = 3;
      } else if (i >= halfN && j < halfM) {
        devidedArr[i][j] = 4;
      }
    });
  });
  return devidedArr;
};

const rotateRightDevideArr = (arr) => {
  const [n, m] = [arr.length, arr[0].length];
  const rotatedArr = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const devidedArr = devideArea(n, m);
  const [halfN, halfM] = [n / 2, m / 2];
  rotatedArr.forEach((line, i) =>
    line.forEach((_, j) => {
      switch (devidedArr[i][j]) {
        case 1:
          rotatedArr[i][j] = arr[i + halfN][j];
          break;
        case 2:
          rotatedArr[i][j] = arr[i][j - halfM];
          break;
        case 3:
          rotatedArr[i][j] = arr[i - halfN][j];
          break;
        case 4:
          rotatedArr[i][j] = arr[i][j + halfM];
          break;
        default:
          return;
      }
    })
  );
  return rotatedArr;
};

const rotateLeftDevideArr = (arr) => {
  const [n, m] = [arr.length, arr[0].length];
  const rotatedArr = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const devidedArr = devideArea(n, m);
  const [halfN, halfM] = [n / 2, m / 2];
  rotatedArr.forEach((line, i) =>
    line.forEach((_, j) => {
      switch (devidedArr[i][j]) {
        case 1:
          rotatedArr[i][j] = arr[i][j + halfM];
          break;
        case 2:
          rotatedArr[i][j] = arr[i + halfN][j];
          break;
        case 3:
          rotatedArr[i][j] = arr[i][j - halfM];
          break;
        case 4:
          rotatedArr[i][j] = arr[i - halfN][j];
          break;
        default:
          return;
      }
    })
  );
  return rotatedArr;
};

const solution = (input) => {
  const cal = input.pop().split(" ").map(Number);
  input.shift();
  const matrix = input.map((line) => line.split(" ").map(Number));
  let answer = matrix;
  cal.forEach((el) => {
    switch (el) {
      case 1:
        answer = reverseTopDown(answer);
        break;
      case 2:
        answer = reverseleftRight(answer);
        break;
      case 3:
        answer = spinRight(answer);
        break;
      case 4:
        answer = spinLeft(answer);
        break;
      case 5:
        answer = rotateRightDevideArr(answer);
        break;
      case 6:
        answer = rotateLeftDevideArr(answer);
        break;
    }
  });
  return answer.map((el) => el.join(" ")).join("\n");
};
rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
