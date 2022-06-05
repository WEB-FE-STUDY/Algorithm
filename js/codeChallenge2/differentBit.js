function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const binTarget = numbers[i].toString(2);
    let num = numbers[i] + 1;
    while (true) {
      let diff = 0;
      const binNum = num.toString(2);
      const targetArr = binTarget.split("");
      for (let i = 0; i < binNum.length - binTarget.length; i++) {
        targetArr.unshift("0");
      }
      const numArr = binNum.split("");
      targetArr.map((el, idx) => {
        if (el !== numArr[idx]) {
          diff++;
        }
      });
      if (diff > 2) {
        num++;
      } else {
        answer.push(num);
        break;
      }
    }
  }
  return answer;
}
const numbers = [2, 7];

console.log(solution(numbers));

//10,11 시간초과
// Mdn 다큐먼트를 보니, 32 bit 가 넘어가는 숫자는 32비트 이후부분을 잘라버린다고 하네요. 그래서 숫자가 커지면 단순히 ^ 를 사용해서는 풀지 못했습니다. ㅠ.ㅠ
