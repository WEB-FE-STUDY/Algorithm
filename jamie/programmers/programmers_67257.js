// 수식 최대화
// https://programmers.co.kr/learn/courses/30/lessons/67257

const getPermutations = (operators) => {
  const permutations = [];

  const recursion = (permutation = [], extraOperators = operators) => {
    if (permutation.length === operators.length) permutations.push(permutation);
    for (const extraOperator of extraOperators) {
      recursion([...permutation, extraOperator], extraOperators.filter((operator) => operator !== extraOperator));
    }
  };

  recursion();

  return permutations;
};

const calc = (operator, numA, numB) => {
  if (operator === '+') return numA + numB;
  else if (operator === '-') return numA - numB;
  else if (operator === '*') return numA * numB;
};

function solution(expression) {
  const nums = expression.match(/\d+/g);
  const operators = expression.match(/[+*-]/g);
  const permutations = getPermutations([...new Set(operators)]);

  // 조합별 테스트
  return permutations.reduce((total, permutation) => {
    let copiedNums = [...nums];
    let copiedOperators = [...operators];

    // 조합에 있는 연산자를 순서대로 가져옴
    permutation.forEach((item) => {
      let i = 0;
      while (copiedOperators[i]) {
        if (copiedOperators[i] === item) {
          copiedNums[i] = calc(item, +copiedNums[i], +copiedNums[i + 1]);
          copiedNums.splice(i + 1, 1);
          copiedOperators.splice(i, 1);
        } else i++;
      }
    });

    return Math.max(Math.abs(total), Math.abs(copiedNums[0]));
  }, 0);
}

console.log(solution('100-200*300-500+20'), 60420);
console.log(solution('50*6-3*2'), 300);
