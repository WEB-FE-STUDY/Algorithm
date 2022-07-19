// 두 개 뽑아서 더하기

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) answer.push(numbers[i] + numbers[j]);
    }
  }

  answer.sort((a, b) => a - b);

  return answer.filter((v, i) => answer.indexOf(v) === i);
}
