// 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839

const numbers = "7843";

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let answer = 0;
  const set = new Set();

  const getPermutation = (arr, select) => {
    const result = [];
    if (select === 1) {
      arr.forEach(item => set.add(parseInt(item)));
      return arr;
    }

    arr.map((num, index) => {
      const fixed = num;
      const rest = arr.slice(0, index).concat(arr.slice(index + 1));
      const combinedRest = getPermutation(rest, select - 1);
      result.push(...combinedRest.map(item => {
        set.add(parseInt(`${fixed}${item}`));
        return `${fixed}${item}`;
      }));
    })

    return result;
  }

  getPermutation(numbers.split(''), numbers.length);

  set.forEach(num => isPrime(num) && answer++);

  return answer;
}

console.log(solution(numbers));
