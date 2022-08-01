// 로또의 최소 순위와 최저 순위

function solution(lottos, win_nums) {
  let minCount = lottos.filter((el) => win_nums.includes(el)).length;
  let zeroCount = lottos.filter((el) => el === 0).length;

  let maxCount = minCount + zeroCount;

  const maxRank = maxCount >= 2 ? 7 - maxCount : 6;
  const minRank = minCount >= 2 ? 7 - minCount : 6;

  return [maxRank, minRank];
}

/* 
몇 개 맞췄는지 카운트
0의 개수 카운트 

*/
