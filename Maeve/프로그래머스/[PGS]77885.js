// 2개 이하로 다른 비트

// 시간 초과
// let answer = [];

// function check(number) {
//     let temp = number;
//     temp++;

//     while(true) {
//         let count = 0;
//         let num2bin = number.toString(2);
//         let temp2bin = temp.toString(2);

//         // 자릿수 다를 때 어떻게 비교? -> 앞에 0 추가
//         if (num2bin.length !== temp2bin.length) num2bin = '0' + num2bin;

//         for (let i = temp2bin.length - 1; i >= 0; i--) {
//             if (num2bin[i] !== temp2bin[i]) count++;
//         }

//         if (count <= 2) {
//             answer.push(temp);
//             break;
//         }
//         else temp++;
//     }
// }

// function solution(numbers) {

//     for (let i = 0; i < numbers.length; i++) {
//         check(numbers[i]);
//     }

//     return answer;
// }

// // while문 돌면서 수 증가시켜 다른 비트 개수 구함
// // 1 이나 2 가 나오면 정답

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) answer.push(num + 1);
    else {
      // 최하위비트 0을 찾아 1로 바꾸로 바로 다음 1을 0으로 바꾼다
      let num2bin = num.toString(2);

      num2bin = num2bin.split("");

      // 111 같이 0이 하나도 존재하지 않을 경우를 대비해서 0을 앞에 넣음
      num2bin.unshift("0");

      let idx = 0;
      for (idx = num2bin.length - 1; idx >= 0; idx--) {
        if (num2bin[idx] === "0") break;
      }

      num2bin[idx] = "1";
      num2bin[idx + 1] = "0";

      answer.push(parseInt(num2bin.join(""), 2));
    }
  }

  return answer;
}
