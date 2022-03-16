function solution(numbers) {
  let answer = 0;
  let resultsOfPerm = [];
  let arrNumbers = numbers.split('');
  //console.log(arrNumbers);

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(el => [el]);
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1);
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map(el => [fixed, ...el]);
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  }

  let set_result = new Set();

  for (let i = 0; i < arrNumbers.length; i++) {
    resultsOfPerm = getPermutations(arrNumbers, i + 1).map(result =>
      Number(result.join('')),
    );

    resultsOfPerm.forEach(result => {
      if (!set_result.has(result)) {
        set_result.add(result);
        if (isPrime(result)) answer++;
      }
    });
  }
  return answer;
}
