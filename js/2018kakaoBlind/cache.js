function solution(cacheSize, cities) {
  let answer = 0;
  const cacheArr = [];
  if (cacheSize === 0) {
    answer = cities.length * 5;
    return answer;
  }
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (cacheArr.includes(city)) {
      cacheArr.splice(cacheArr.indexOf(city), 1);
      cacheArr.unshift(city);
      answer++;
    } else {
      if (cacheArr.length < cacheSize) {
        cacheArr.unshift(city);
      } else {
        cacheArr.pop();
        cacheArr.unshift(city);
      }
      answer += 5;
    }
  }
  return answer;
}

const city1 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];
const city2 = ["Jeju", "Pangyo", "NewYork", "newyork"];

const cache1 = 3;
const cache2 = 2;

console.log(solution(cache2, city2));
