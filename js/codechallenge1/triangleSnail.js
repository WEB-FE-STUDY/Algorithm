function solution(n) {
  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = new Array(i).fill(0);
  }
  let [height, width, num] = [-1, 0, 0];
  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) {
      height += 1;
      num += 1;
      answer[height][width] = num;
    }
    for (let j = 0; j < i - 1; j++) {
      width += 1;
      num += 1;
      answer[height][width] = num;
    }
    for (let j = 0; j < i - 2; j++) {
      height -= 1;
      width -= 1;
      num += 1;
      answer[height][width] = num;
    }
  }
  return answer.flat();
}
console.log(solution(4));
