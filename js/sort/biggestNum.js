function solution(numbers) {
  let answer = "";
  //   const numbersLengthArr = numbers.map((number) => {
  //     return String(number).length;
  //   });
  if (numbers.length < 2) return numbers;
  const pivot = numbers[0];
  const left = [];
  const right = [];

  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];
    if (pivot <= number) {
      if (String(pivot).length < String(number).length) {
        parseInt(String(pivot)[0]) <= parseInt(String(pivot)[0]);
      }
    }
  }
  return answer;
}

function solution(numbers) {
  let answer = "";
  const stringNumArr = numbers.map((number) => String(number));
  const sorttedStringNumArr = stringNumArr.sort((a, b) => b + a - (a + b));
  sorttedStringNumArr[0] === "0"
    ? (answer = "0")
    : (answer = sorttedStringNumArr.join(""));
  return answer;
}

const numbers1 = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];
const return1 = "6210";
const return2 = "9534330";

console.log(solution(numbers1));
console.log(solution(numbers2));
