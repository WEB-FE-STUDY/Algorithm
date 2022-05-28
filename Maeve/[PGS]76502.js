// 괄호 회전하기

let answer = 0;

function check(rotated) {
  // if (rotated[rotated.length - 1] === '(' || rotated[rotated.length - 1] === '{' || rotated[rotated.length - 1] === '[') return;

  let stack = [];

  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === "(" || rotated[i] === "{" || rotated[i] === "[") stack.push(rotated[i]);
    else if (rotated[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(rotated[i]);
    } else if (rotated[i] === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
      else stack.push(rotated[i]);
    } else if (rotated[i] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else stack.push(rotated[i]);
    }
  }

  if (stack.length === 0) answer++;

  // [(여는 괄호) 만나면 넣음
  // ](닫는 괄호) 만나면 top 확인해서 맞으면 top 빼고 아니면 넣음

  // 마지막에 스택 비어있으면 정답
}

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    let temp = "";

    check(temp.concat(s.substr(i, s.length - i), s.substr(0, i)));
  }

  return answer;
}

// 그냥 s 길이만큼 체크하면 되나 ...?
