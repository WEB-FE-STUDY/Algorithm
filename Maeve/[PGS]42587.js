function solution(priorities, location) {
  let answer = 1;
  let target_index = location;

  while (priorities.length) {
    let front = priorities.shift();

    if (priorities.some((v) => v > front)) {
      // 중요도 높은 게 있으면
      priorities.push(front);
    } else {
      if (target_index === 0) break;
      answer++;
    }

    // target_index 조정
    if (target_index === 0) target_index = priorities.length - 1;
    else target_index--;
  }

  return answer;
}

// 고차함수 some을 알게 됨 - 하나라도 조건을 만족하면 return true;
