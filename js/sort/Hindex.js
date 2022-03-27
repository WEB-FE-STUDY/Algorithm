function solution(citations) {
  let answer = 0;
  const sortedCitations = citations.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < sortedCitations.length; i++) {
    const citation = sortedCitations[i];
    if (citation <= i) {
      answer = i;
      return answer;
    }
  }
  answer = sortedCitations.length;
  return answer;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
