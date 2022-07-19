// k번째수
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let slicedArr = array.slice(commands[i][0] - 1, commands[i][1]);
    let sortedArr = slicedArr.sort((a, b) => a - b);
    answer.push(sortedArr[commands[i][2] - 1]);
  }

  return answer;
}

/* 
array.sort();   // 문자열(유니 코드) 기준 정렬 
array.sort((a, b) => (a - b));  //  숫자 기준 정렬  
*/
