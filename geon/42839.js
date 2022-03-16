const getPermutations = function (arr, selectNumber) {
  if (selectNumber === 1) return arr.map(el => [el]); 

  return arr.reduce((acc, fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map(el => [fixed, ...el]); 
      acc.push(...attached);
      return acc;
  }, []);
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const numbersArray = numbers.split('');
  const set = new Set();
  for(let i = 1; i <= numbersArray.length; i++) {
      getPermutations(numbersArray, i).forEach(v => {
          set.add(Number(v.join('')));
      });
  }
  const permutations = Array.from(set);
  return permutations.filter(v => isPrime(v)).length;
}