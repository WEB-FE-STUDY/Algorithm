const getPermutations = (numbersArr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return numbersArr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  numbersArr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
};

const checkPrimeNum = (arr) => {
  let count = 0;
  let check = true;
  arr.map((num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) check = false;
    }
    if (check === true && num !== 1 && num !== 0) {
      console.log(num);
      count++;
    }
    check = true;
  });
  return count;
};
function solution(numbers) {
  const numbersArr = numbers.split("");
  let permutation = [];
  for (let i = 0; i < numbersArr.length; i++) {
    const sol = getPermutations(numbersArr, i + 1);
    permutation = permutation.concat(sol);
  }
  const joined = [];
  permutation.map((v) => {
    v = parseInt(v.join(""));
    joined.push(v);
  });
  const deduplicated = [...new Set(joined)]; // 중복 제거
  //   console.log(deduplicated);
  const answer = checkPrimeNum(deduplicated);
  return answer;
}
const numbers = "1231";
console.log(solution(numbers));
