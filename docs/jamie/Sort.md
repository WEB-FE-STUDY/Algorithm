# 정렬

## 정렬의 안정성

정렬되지 않은 상태일 때 같은 키값을 가진 원소의 순서가 정렬된 후에도 계속 유지되는가?

- 안정 정렬 : 정렬 후에도 기존의 순서가 유지된다.
- 불안정 정렬 : 정렬 후 **기존의 순서가 유지된다는 보장을 할 수 없다.**

ex. 포커 카드 정렬

![https://t1.daumcdn.net/cfile/tistory/9957C8375C35A1411C](https://t1.daumcdn.net/cfile/tistory/9957C8375C35A1411C)

위와 같은 포커 카드를 숫자 순으로 정렬할 때 안정 정렬과 불안정 정렬을 각각 다음과 같다.

![https://t1.daumcdn.net/cfile/tistory/99D4AB375C35A14222](https://t1.daumcdn.net/cfile/tistory/99D4AB375C35A14222)

안정 정렬의 경우 원래의 배열 순서가 유지되므로 하트 4 뒤에 스페이드 4가 위치하는 것을 확인할 수 있다.

![https://t1.daumcdn.net/cfile/tistory/99345A375C35A1431E](https://t1.daumcdn.net/cfile/tistory/99345A375C35A1431E)

불안정 정렬의 경우 원래 순서를 보장하지 못하므로 하트 4와 스페이드 4의 순서가 뒤바뀌어 정렬될 수 있다.

## 선택 정렬

- 현재 위치에 들어갈 데이터를 찾아 선택하는 알고리즘
- 비교 정렬 - 데이터를 비교하면서 찾는다.
- 제자리 정렬(in-place sort) - 데이터 외에 추가적인 공간을 필요로 하지 않는다. 정확히는 데이터를 교환하는 과정에서 임시 변수를 필요로 하나 충분히 무시할 만큼 적은 양이므로 제자리 정렬로 본다.
- 불안정 정렬 - 원래 순서를 보장하지 못한다.
- O(n^2) - 전체 배열을 순회하는 것을 n번만큼 반복한다.

### 과정 (오름차순 정렬)

![https://blog.kakaocdn.net/dn/qjbEC/btqNiW4IUsW/6XCnYWRkk437W3kQYBDlP1/img.gif](https://blog.kakaocdn.net/dn/qjbEC/btqNiW4IUsW/6XCnYWRkk437W3kQYBDlP1/img.gif)

1. 최솟값을 저장할 임시 변수를 만들고, 맨 앞의 값을 저장하도록 한다.
2. 주어진 리스트를 돌면서 최솟값을 찾는다.
3. 최솟값을 맨 앞 인덱스의 값과 교환한다.
4. 그 다음 인덱스부터 시작해 나머지 값들 중 최솟값을 찾고, 1~3 과정을 계속 반복한다.

```jsx
function swap(arr, index1, index2) {
	let tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

function selectionSort(arr, start = 0) {
	if (start < arr.length - 1) {
		let minIndex = start;
		for (let i = start; i < arr.length; i++) {
			if (arr[i] < arr[minIndex]) minIndex = i;
		}
		swap(arr, start, minIndex);
		selectionSort(arr, start + 1);
	}
}

const arr = [3, 6, 1, 8, 2, 4];
console.log(arr);
selectionSort(arr);
console.log(arr);
```

## 버블 정렬

- 두 개의 인접한 원소를 비교하면서 정렬하는 알고리즘
- 원소의 이동이 거품이 올라오는 것 같다고 해서 버블 정렬이라는 이름이 붙었다고 한다.
- 비교 정렬 - 데이터를 비교하면서 찾는다.
- 제자리 정렬(in-place sort) - 데이터 외에 추가적인 공간을 필요로 하지 않는다. 정확히는 데이터를 교환하는 과정에서 임시 변수를 필요로 하나 충분히 무시할 만큼 적은 양이므로 제자리 정렬로 본다.
- 안정 정렬 - 앞에서부터 차례대로 비교하므로 원래 순서를 보장한다.
- O(n^2) - 전체 배열을 순회하는 것을 n번만큼 반복한다.

### 과정 (오름차순 정렬)

![https://blog.kakaocdn.net/dn/camFmC/btqT18jLl9k/eewEO8cGnwQ0mopwu18r91/img.gif](https://blog.kakaocdn.net/dn/camFmC/btqT18jLl9k/eewEO8cGnwQ0mopwu18r91/img.gif)

1. 앞에서부터 현재 원소와 그 다음 원소를 비교한다.
2. 현재 원소가 다음 원소보다 크다면 둘의 위치를 바꾼다.
3. 다음 원소로 이동하여 다시 값을 비교하고, 위 과정을 계속 반복한다.

```jsx
function swap(arr, index1, index2) {
	let tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

function bubbleSort(arr, last = arr.length - 1) {
	if (last > 0) {
		for (let i = 1; i <= last; i++) {
			if (arr[i - 1] > arr[i]) swap(arr, i - 1, i);
		}
		bubbleSort(arr, last - 1);
	}
}

const arr = [3, 6, 1, 8, 2, 4];
console.log(arr);
bubbleSort(arr);
console.log(arr);
```

## 병합 정렬

- 분할 정복 알고리즘을 기반으로 정렬하는 알고리즘 (문제를 분할하고, 분할한 문제를 정복하여 합치는 것)

  ⇒ 정렬해야 할 리스트가 주어지면 해당 리스트를 계속 분할하여 작게 쪼개고, 더 이상 쪼갤 수 없을 지점에서는 인접한 부분리스트의 원소들끼리 비교하여 정렬하는 방식

- 비교 정렬 - 데이터를 비교하면서 찾는다.
- 제자리 정렬이 아님 - 정렬의 대상이 되는 데이터 외에 추가적인 공간을 필요로 한다. 제자리 정렬로 구현할 수는 있지만 성능을 일부 포기해야 한다.
- 안정 정렬 - 문제를 작게 쪼개어 앞의 부분리스트부터 차례대로 합쳐나가기 때문이다.

### 과정 (오름차순 정렬)

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F07jQt%2Fbtq1lao22zT%2FKkr0QfF1VGxi3bfGYp2r61%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F07jQt%2Fbtq1lao22zT%2FKkr0QfF1VGxi3bfGYp2r61%2Fimg.png)

1. 주어진 리스트를 절반으로 분할하여 부분 리스트로 나눈다.
2. 해당 부분리스트의 길이가 1이 될 때까지 계속해서 나눈다.
3. 인접한 부분리스트끼리 정렬하여 합친다.

```jsx
function merge(arr, start, mid, end) {
	// console.log(arr, start, mid, end);
	let tmp = [];
	for (let i = start; i <= end; i++) {
		tmp[i] = arr[i];
	}
	let part1 = start;
	let part2 = mid + 1;
	let index = start;
	while (part1 <= mid && part2 <= end) {
		if (tmp[part1] <= tmp[part2]) arr[index++] = tmp[part1++];
		else arr[index++] = tmp[part2++];
	}
	for (let i = 0; i <= mid - part1; i++) {
		arr[index + i] = tmp[part1 + i];
	}
}

function mergeSort(arr, start = 0, end = arr.length - 1) {
	if (start < end) {
		let mid = Math.floor((start + end) / 2);
		mergeSort(arr, start, mid);
		mergeSort(arr, mid + 1, end);
		merge(arr, start, mid, end);
	}
}

const arr = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(arr);
mergeSort(arr);
console.log(arr);
```

## 퀵 정렬

- 리스트를 피벗 `pivot` 을 기준으로 두 개의 리스트로 나누어 하나는 피벗보다 작은 값들의 리스트, 다른 하나는 피벗보다 큰 값들의 리스트로 정렬한 다음 각 부분 리스트에 대해 재귀적으로 수행하여 정렬하는 알고리즘
- 병합정렬과의 비교
    - 병합정렬 : 리스트를 절반으로 나누어 분할 정복을 한다.
    - 퀵 정렬 : 피벗의 값에 따라 각 부분리스트의 크기가 다를 수 있으므로 비균등하게 나뉜다.
- 비교 정렬 - 데이터를 비교하면서 찾는다.
- 제자리 정렬(in-place sort) - 데이터 외에 추가적인 공간을 필요로 하지 않는다.
- 불안정 정렬 - 하나의 피벗을 두고 부분 리스트를 만들 때 서로 떨어진 원소끼리 교환이 일어나기 때문이다.

### 과정 (오름차순 정렬)

[중간 피벗 정렬 과정 설명](https://st-lab.tistory.com/250)

1. 피벗을 하나 선택한다.
2. 피벗을 기준으로 피벗의 왼쪽에서는 배열의 처음부터 시작하여 피벗보다 큰 값을 찾고, 피벗의 오른쪽에서는 배열의 마지막 값부터 시작하여 피벗보다 작은 값을 찾는다.
3. 양 방향에서 찾은 두 원소를 교환한다.
4. 2~3 과정을 왼쪽에서 탐색하는 위치와 오른쪽에서 탐색하는 위치가 엇갈리지 않을 때까지 반복한다.
5. 엇갈린 기점을 기준으로 두 개의 리스트로 나누어 각 부분 리스트의 길이가 1이 아닐 때까지 1번부터의 과정을 반복한다.
6. 인접한 부분리스트끼리 합친다.

```jsx
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(list.length / 2)];
  const left = [],
    equal = [],
    right = [];

  for (const item of arr) {
    if (item < pivot) right.push(town);
    else if (item > pivot) left.push(town);
    else equal.push(town);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
};
```

```jsx
function swap(arr, index1, index2) {
	let tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

function partition(arr, start, end) {
	let pivot = arr[Math.floor((start + end) / 2)];
	while (start <= end) {
		while (arr[start] < pivot) start++;
		while (arr[end] > pivot) end--;
		if (start <= end) {
			swap(arr, start, end);
			start++;
			end--;
		}
	}
	return start;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
	let part2 = partition(arr, start, end);
	if (start < part2 - 1) quickSort(arr, start, part2 - 1);
	if (part2 < end) quickSort(arr, part2, end);
}

const arr = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(arr);
quickSort(arr);
console.log(arr);
```

## 삽입 정렬

- 비교하고자 하는 타겟을 타겟 이전의 원소들과 비교하며 자리를 교환하는 알고리즘
- 비교 정렬 - 데이터를 비교하면서 찾는다.
- 제자리 정렬(in-place sort) - 데이터 외에 추가적인 공간을 필요로 하지 않는다. 정확히는 데이터를 교환하는 과정에서 임시 변수를 필요로 하나 충분히 무시할 만큼 적은 양이므로 제자리 정렬로 본다.
- 안정 정렬 - 앞에서부터 차례대로 비교하므로 원래 순서를 보장한다.

### 과정 (오름차순 정렬)

[삽입 정렬 과정 설명](https://st-lab.tistory.com/179)

1. 현재 타겟이 되는 숫자와 이전 위치에 있는 원소들을 차례로 비교한다. (타겟은 앞에서부터 차례로 지정되며, 첫번째 원소는 비교할 이전 원소가 없으므로 두번째 원소부터 지정한다.)
2. 타겟이 되는 숫자가 이전 위치에 있던 원소보다 작다면 서로 교환한다.
3. 그 다음 타겟을 찾아 위와 같은 방법으로 반복한다.

```jsx
function swap(arr, index1, index2) {
	let tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

function insertionSort(arr, target = 1) {
	if (target < arr.length) {
		let index = target;
		while (index < 0 || arr[index - 1] > arr[index]) swap(arr, index - 1, index--);
		insertionSort(arr, target + 1);
	}
}

const arr = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
console.log(arr);
insertionSort(arr);
console.log(arr);
```

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgDrzm%2Fbtq224ZGlGz%2FSBDLBKYcgVlptYt7hLHQn0%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgDrzm%2Fbtq224ZGlGz%2FSBDLBKYcgVlptYt7hLHQn0%2Fimg.png)

> 참고
>
> - [https://godgod732.tistory.com/10](https://godgod732.tistory.com/10)
> - [https://st-lab.tistory.com/104](https://st-lab.tistory.com/104) (정렬 알고리즘 정리 글, 자바로 되어있기는 한데 정리 잘 되어있음)
> - [https://www.youtube.com/playlist?list=PLjSkJdbr_gFZMNhIMl2AJ9n5c2hNK-qJk](https://www.youtube.com/playlist?list=PLjSkJdbr_gFZMNhIMl2AJ9n5c2hNK-qJk)
