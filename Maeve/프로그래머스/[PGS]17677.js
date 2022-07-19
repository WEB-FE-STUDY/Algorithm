// 뉴스 클러스터링

function isAlpha(letter) {
  if ((letter >= "A" && letter <= "Z") || (letter >= "a" && letter <= "z")) return true;
  else return false;
}

function solution(str1, str2) {
  var answer = 0;
  let arr1 = [];
  let arr2 = [];

  let intersection = 0;
  let union = 0; // arr1 개수 + arr 2 개수 - intersection

  // 다중집합 만들기
  for (let i = 0; i < str1.length - 1; i++) {
    if (isAlpha(str1[i]) && isAlpha(str1[i + 1])) {
      arr1.push(str1.substr(i, 2).toLowerCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (isAlpha(str2[i]) && isAlpha(str2[i + 1])) {
      arr2.push(str2.substr(i, 2).toLowerCase());
    }
  }

  // ['a', 'a', 'a', 'b', 'b']
  // ['a', 'a', 'b', 'b', 'b']
  // 교집합 구할 때 선택된 원소 삭제해야 함
  // https://school.programmers.co.kr/questions/19688
  let arr2_copy = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2_copy.indexOf(arr1[i]) !== -1) {
      intersection++;
      arr2_copy.splice(arr2_copy.indexOf(arr1[i]), 1);
    }
  }

  if (arr1.length === 0 && arr2.length === 0) return 1 * 65536;

  union = arr1.length + arr2.length - intersection;

  answer = Math.floor((65536 * intersection) / union);

  return answer;
}

// 두 글자씩 잘라서 배열에 넣는 과정 -> 특수문자 있으면 넣지말고, 모두 소문자로 넣기
// 교집합 합집합 구하기

// Set 사용하기

function solution(str1, str2) {
  function getArray(word) {
    const result = [];
    for (let i = 0; i < word.length - 1; i++) {
      const el = word.substr(i, 2);
      if (el.match(/[A-Za-z]{2}/)) {
        result.push(el.toLowerCase()); // 여기서 소문자로 다 바꿈
      }
    }
    return result;
  }

  const arr1 = getArray(str1);
  const arr2 = getArray(str2);
  const set = new Set([...arr1, ...arr2]);

  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
