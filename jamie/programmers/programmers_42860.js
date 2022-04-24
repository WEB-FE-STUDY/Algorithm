// 조이스틱
// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const nameArray = name.split(''), length = name.length;
  let move = length - 1, upDown = 0;

  nameArray.forEach((str, i) => {
    const alphabet = chars.indexOf(str);
    alphabet <= 13 ? upDown += alphabet : upDown += (26 - alphabet);

    let index = i + 1;
    while (index < length && nameArray[index] === 'A') index++;

    move = Math.min(move, i * 2 + length - index);
    move = Math.min(move, (length - index) * 2 + i);
  })
  return upDown + move;
}

console.log(solution("JEROEN"), 56);
console.log(solution("JAN"), 23);
console.log(solution("ABABAAAAAAABA"), 10);
console.log(solution("BBBBAAAABA"), 12);
