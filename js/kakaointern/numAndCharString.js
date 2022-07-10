const nums = [
  { num: 0, char: "zero" },
  { num: 1, char: "one" },
  { num: 2, char: "two" },
  { num: 3, char: "three" },
  { num: 4, char: "four" },
  { num: 5, char: "five" },
  { num: 6, char: "six" },
  { num: 7, char: "seven" },
  { num: 8, char: "eight" },
  { num: 9, char: "nine" },
];
function solution(s) {
  const str = s.split("");
  let answer = 0;
  const filteredNum = [];
  nums.map((num) => {
    let isNumInArr = s.indexOf(num.char);
    while (isNumInArr !== -1) {
      filteredNum.push(num);
      isNumInArr = s.indexOf(num.char, isNumInArr + 1);
    }
  });
  console.log(filteredNum);
  filteredNum.map((num) => {
    const index = s.indexOf(num.char);
    str.splice(index, num.char.length, num.num);
    s = str.join("");
  });
  answer = Number(str.join(""));
  return answer;
}

const [s1, s2, s3] = ["one4oneeight", "23six5four7", "2three45sixseven"];
console.log(solution(s1));
