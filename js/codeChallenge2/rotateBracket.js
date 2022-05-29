function solution(s) {
  let answer = 0;
  let sArr = s.split("");
  let shiftedArr = [];
  if (s.length % 2 === 1) return 0;
  for (let i = 0; i < s.length; i++) {
    for (let k = 0; k < i; k++) {
      shiftedArr.push(sArr.shift());
    }
    const rotatedSArr = sArr.concat(shiftedArr);
    sArr = s.split("");
    shiftedArr = [];
    let isOpen = true;
    const stack = [];
    for (let el of rotatedSArr) {
      if (el === "{" || el === "[" || el === "(") stack.push(el);
      else {
        const bracket = stack.pop();
        switch (el) {
          case "]": {
            if (bracket === "[") continue;
            else {
              isOpen = false;
            }
            break;
          }
          case "}": {
            if (bracket === "{") continue;
            else {
              isOpen = false;
            }
            break;
          }
          case ")": {
            if (bracket === "(") continue;
            else {
              isOpen = false;
            }
            break;
          }
        }
      }
    }
    if (isOpen) answer += 1;
  }
  return answer;
}

const [s, s1, s2, s3, s4] = ["[](){}", "}]()[{", "[)(]", "}}}", "{{{}"];
console.log(solution(s4));
