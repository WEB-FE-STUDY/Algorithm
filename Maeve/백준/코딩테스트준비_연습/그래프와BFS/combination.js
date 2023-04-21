// function getCombinations(arr, N) {
//   const results = [];

//   if (N === 1) return arr.map((value) => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);

//     const combinations = getCombinations(rest, N - 1);

//     const attached = combinations.map((combination) => [fixed, ...combination]);
//     console.log(fixed, combinations);

//     results.push(...attached);
//   });

//   return results;
// }

// console.log(getCombinations([..."abcd"], 3));

// const M
const arrays = [1, 2, 3, 4, 5];
const comb = [];
const visited = new Array(5).fill(false);

const getComb = (index, count) => {
  if (count === 3) {
    console.log(comb);
    return;
  }

  for (let i = index; i < 5; i++) {
    if (!visited[i]) {
      visited[i] = true;
      comb.push(arrays[i]);
      getComb(i + 1, count + 1);
      comb.pop();
      visited[i] = false;
    }
  }
};

getComb(0, 0);
