// 체육복

function solution(n, lost, reserve) {
  let answer = 0;
  let students = [];

  for (let i = 0; i < n; i++) {
    students[i] = 1;
  }

  reserve.forEach((e) => students[e - 1]++);
  lost.forEach((e) => students[e - 1]--);

  for (let i = 0; i < n; i++) {
    if (students[i]) answer++;
    else if (students[i - 1] == 2) {
      students[i - 1]--;
      answer++;
    } else if (students[i + 1] == 2) {
      students[i + 1]--;
      answer++;
    }
  }

  return answer;
}
