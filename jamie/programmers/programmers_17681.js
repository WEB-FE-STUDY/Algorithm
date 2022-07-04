// [1차] 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const answer = [];
  arr1.forEach((numA, i) => answer.push(numA | arr2[i]));
  return answer.map(num => {
    let binary = num.toString(2);
    if (binary.length !== n) binary = `${'0'.repeat(n - binary.length)}${binary}`;
    return binary.replace(/1/g, "#").replace(/0/g, ' ');
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]), ['#####', '# # #', '### #', '# ##', '#####']);
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]), ['######', '### #', '## ##', ' #### ', ' #####', '### # ']);
