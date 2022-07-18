// [1차] 캐시
// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = [];

  return cities.reduce((time, v) => {
    const city = v.toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      time += 1;
    } else {
      if (cache.length === cacheSize) cache.shift();
      time += 5;
    }
    cache.push(city);
    return time;
  }, 0);
}

console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']), 50);
console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']), 21);
console.log(solution(2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']), 60);
console.log(solution(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']), 52);
console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']), 16);
console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']), 25);

