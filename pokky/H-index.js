function solution(citations) {
  var answer = 0;
  let i = 0;

  citations.sort((a, b) => b - a);

  while (citations[i] >= i + 1) {
    i++;
  }

  answer = i;

  return answer;
}
