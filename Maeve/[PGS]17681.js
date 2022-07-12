// [1차] 비밀지도

/* 출제 의도가 비트 연산 */
const solution = (n, arr1, arr2) => arr1.map((arr1, i) => (arr1 | arr2[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#"));

// function solution(n, arr1, arr2) {
//   let answer = [];

//   for (let i = 0; i < n; i++) {
//     let col = "";
//     let arr1_toBin = arr1[i];
//     let arr2_toBin = arr2[i];

//     for (let j = 0; j < n; j++) {
//       // if (arr1_toBin % 2 === 0 && arr2_toBin % 2 === 0) col = ' ' + col;
//       // else col = '#' + col;
//       col = arr1_toBin % 2 === 0 && arr2_toBin % 2 === 0 ? " " + col : "#" + col;
//       arr1_toBin = Math.floor(arr1_toBin / 2);
//       arr2_toBin = Math.floor(arr2_toBin / 2);
//     }
//     answer.push(col);
//   }

//   return answer;
// }
