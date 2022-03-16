function solution(answers) {
  const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const scores = answers.reduce((prev, cur, index) => {
      for (let i = 0; i < 3; i++) {
          if (cur === patterns[i][index % patterns[i].length]) prev[i]++;    
      }
      return prev;
  }, [0, 0, 0])
  const maxScore = Math.max.apply(null, scores);
  const answer = scores.reduce((prev, cur, index) => {
      if (cur === maxScore) prev.push(index + 1);
      return prev;
  }, [])
  return answer;
}