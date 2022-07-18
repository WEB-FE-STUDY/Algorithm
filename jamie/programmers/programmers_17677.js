// [1차] 뉴스 클러스터링
// https://school.programmers.co.kr/learn/courses/30/lessons/17677

const getMultiSet = (str) => {
  const multiSet = [];
  const arr = str.toLowerCase().split('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (/[a-zA-Z]/.test(arr[i]) && /[a-zA-Z]/.test(arr[i + 1])) multiSet.push(`${arr[i]}${arr[i + 1]}`);
  }
  return multiSet;
};

const getSet = (arr1, arr2) => {
  const intersection = [];
  const union = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return [intersection, union.concat(arr2)];
};

function solution(str1, str2) {
  const str1MultiSet = getMultiSet(str1);
  const str2MultiSet = getMultiSet(str2);
  const [intersection, union] = getSet(str1MultiSet, str2MultiSet);
  const jacquard = !intersection.length && !union.length ? 1 : intersection.length / union.length;
  return ~~(jacquard * 65536);
}

// const makeArr = (str) => {
//   const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P' ,'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   str = [...str.toUpperCase()];
//
//   const arr = new Array;
//
//   str.filter((e, i) => {
//     if (abc.includes(str[i]) && abc.includes(str[i+1])) arr.push(str[i]+str[i+1]);
//   });
//
//   return arr;
// };

// function solution(str1, str2) {
//   const arr1 = makeArr(str1);
//   const arr2 = makeArr(str2);
//
//   const set = new Set([...arr1, ...arr2]);
//   let union = 0;          // 합집합
//   let intersection = 0;   // 교집합
//
//   set.forEach(v => {
//     const tmp1 = arr1.filter(e => e === v).length;
//     const tmp2 = arr2.filter(e => e === v).length;
//
//     union += Math.max(tmp1, tmp2);
//     intersection += Math.min(tmp1, tmp2);
//   });
//
//   return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
// }

console.log(solution('FRANCE', 'french'), 16384);
console.log(solution('handshake', 'shake hands'), 65536);
console.log(solution('aa1+aa2', 'AAAA12'), 43690);
console.log(solution('E=M*C^2', 'e=m*c^2'), 65536);
console.log(solution('DDEFGHH', 'ABDDD'), 7281);
console.log(solution('AACCC', 'A A A A A C C C C'), 0);
console.log(solution('A+C', 'DEF'), 0);
console.log(solution('AAA', 'BAAAA'), 32768);
console.log(solution('abbb', 'abc'), 16384);
console.log(solution('AAbbaa_AA', 'BBB'), 13107);
console.log(solution('di mi mi mi mi', 'di di di go'), 8192);
console.log(solution('CCDEFGHH', 'ABCCC'), 6553);
