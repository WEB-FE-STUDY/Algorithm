// 캐시

function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  if (!cacheSize) return cities.length * 5;

  for (city of cities) {
    let lowerCity = city.toLowerCase();

    // 캐시에 있을 때
    if (cache.includes(lowerCity)) {
      time += 1;
      cache.splice(cache.indexOf(lowerCity), 1);
      cache.push(lowerCity);
      continue;
    }

    // 캐시에 없을 때
    // 캐시 꽉 찼으면
    if (cache.length === cacheSize) {
      cache.shift();
      cache.push(lowerCity);
      time += 5;
      continue;
    }
    // 캐시 비었을 때
    else {
      cache.push(lowerCity);
      time += 5;
    }
  }
  return time;
}

// 캐시에 있는지 확인 indexOf, includes ?

// LRU를 어떻게? -> 큐로

// 캐시에 없을 때 miss
// 캐시가 비어있으면 순차적으로 추가
// 캐시가 비어있지 않다면 LRU 업데이트, 실행시간 5 추가 ,캐시 업데이트

// 캐시에 있을 때 hit
// LRU 업데이트, 실행시간 1 추가
