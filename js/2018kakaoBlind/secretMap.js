function makeDecimalArr(n, arr) {
  const decimalArr = arr.map((num) => {
    const decimal = num.toString(2).split("");
    if (decimal.length !== n) {
      const length = n - decimal.length;
      for (let i = 0; i < length; i++) {
        decimal.unshift("0");
      }
    }
    return decimal;
  });
  return decimalArr;
}
function solution(n, arr1, arr2) {
  const [decimalArr1, decimalArr2] = [makeDecimalArr(n, arr1), makeDecimalArr(n, arr2)];
  const answer = decimalArr1.map((decimalNum, idx1) => {
    const shopArr = decimalNum.map((num, idx2) => {
      if (num === "1" || decimalArr2[idx1][idx2] === "1") {
        num = "#";
      } else {
        num = " ";
      }
      return num;
    });
    return shopArr.join("");
  });
  return answer;
}

const [n1, arr11, arr21] = [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]];

const [n2, arr12, arr22] = [6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]];

console.log(solution(n1, arr11, arr21));
