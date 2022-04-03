// 베스트앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  const obj = {};

  for (const [index, genre] of genres.entries()) {
    if (obj[genre]) {
      obj[genre][0] += plays[index];
      obj[genre][1].push(index);
    } else {
      obj[genre] = [plays[index], [index]];
    }
  }

  const values = Object.values(obj).sort((a, b) => b[0] - a[0]);

  return values.reduce((arr, [_, indexes]) => {
    return arr.concat(...indexes
      .map(index => [index, plays[index]])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(value => value[0]));
  }, []);
}

function solution2(genres, plays) {
  const total = {};

  for (const [index, genre] of genres.entries()) {
    total[genre] ? total[genre] += plays[index] : total[genre] = plays[index];
  }

  let indexCount = 0, prevTotal = 0;

  return genres.map((genre, index) => { return { index, count: plays[index], total: total[genre] };})
    .sort((a, b) => {
      if (b.total - a.total < 0) return -1;
      if (b.total - a.total > 0) return 1;
      if (b.count - a.count < 0) return -1;
      if (b.count - a.count > 0) return 1;
    })
    .reduce((arr, { index, _, total }) => {
      if (total !== prevTotal) {
        indexCount = 0;
        prevTotal = total;
      }
      if (indexCount === 2) return arr;
      indexCount++;
      return arr.concat(index);
    }, []);
}

console.log(solution(genres, plays));
console.log(solution2(genres, plays));
