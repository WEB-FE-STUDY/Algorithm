// [1차] 비밀지도

function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let col = "";
    let arr1_toBin = arr1[i];
    let arr2_toBin = arr2[i];

    for (let j = 0; j < n; j++) {
      // if (arr1_toBin % 2 === 0 && arr2_toBin % 2 === 0) col = ' ' + col;
      // else col = '#' + col;
      col = arr1_toBin % 2 === 0 && arr2_toBin % 2 === 0 ? " " + col : "#" + col;
      arr1_toBin = Math.floor(arr1_toBin / 2);
      arr2_toBin = Math.floor(arr2_toBin / 2);
    }
    answer.push(col);
  }

  return answer;
}
