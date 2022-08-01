// 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const [zeros, count] = lottos.reduce(([zero, count], num) => {
    if (num === 0) zero++;
    if (win_nums.includes(num)) count++;
    return [zero, count];
  }, [0, 0]);
  if (zeros === 0) return [7 - (count || 1), 7 - (count || 1)];
  else return [7 - count - zeros, 7 - (count || 1)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]), [3, 5]);
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]), [1, 6]);
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]), [1, 1]);
console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]), [6, 6]);
