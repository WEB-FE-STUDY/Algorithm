// 튜플
// sol 1 - set 사용
// set은 순서가 보장되므로 평탄화한 배열을 set으로 변경 시 앞 부분을 기준으로 중복된 수가 삭제된다.
function solution(s) {
  // 정규 표현식으로 {} dmf []으로 변경한다
  const array = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .flat();

  return [...new Set(array)];
}

// sol 2 - 하라는 대로 함
// function getElement(setList, answer) {
//     // setList에서 answer에 없는 숫자를 반환한다.
//     for (let i = 0; i < answer.length; i++) {
//         setList = setList.filter((ele) => parseInt(ele) !== answer[i]);
//     }
//     return parseInt(setList[0]);
// }

// function solution(s) {
//     let answer = [];
//     let strList = s.replace("{{", "").replace("}}", "").split("},{");

//     const setList = [];
//     for (let i = 0; i < strList.length; i++) {
//         setList.push(strList[i].split(','));
//     }

//     setList.sort((a, b) => a.length - b.length);

//     answer.push(parseInt(setList[0][0]));  // 넣고
//     for (let i = 1; i < setList.length; i++) {
//         let element = getElement(setList[i], answer);
//         answer.push(element);
//     }

//     return answer;
// }
