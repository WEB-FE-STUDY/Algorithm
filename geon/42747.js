function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);
  for (; hIndex + 1 <= citations[hIndex]; hIndex++) {}
  return hIndex;
}
