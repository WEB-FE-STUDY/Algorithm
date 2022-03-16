function solution(brown, yellow) {
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
      if (yellow % i === 0 && 2 * (i + yellow / i) + 4 === brown) {
          return [yellow / i + 2, i + 2];
      }
  }
}