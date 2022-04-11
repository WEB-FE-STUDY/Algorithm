![https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

- 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법
- 필요없는 범위를 탐색하지 않고 가능성을 좁혀가는 방법이라 리스트가 정렬되어 있어야 한다.
- 찾으려는 데이터와 중간에 위치한 데이터를 비교하는 행동을 찾을 때 까지 반복한다.
- 시간복잡도는 최선의 경우 O(1), 평균 및 최악의 경우 O(log N)이다.

```jsx
const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sample.sort((a, b) => a - b);

const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    // 가운데 인덱스
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    }
    
    // 대소 비교로 범위 지정
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
const result = binarySearch(sample, 7, 0, sample.length - 1);

console.log(result);
```