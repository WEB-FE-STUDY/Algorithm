function solution(n) {
  let deverseNum = 2;
  while (deverseNum < n) {
    let check = n % deverseNum;
    if (check === 1) {
      return deverseNum;
    }
    deverseNum++;
  }
}
