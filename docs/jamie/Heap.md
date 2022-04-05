# 힙 Heap

: 우선순위 큐를 위하여 만들어진 자료 구조

## 우선순위 큐

- 우선 순위의 개념을 큐에 도입한 자료구조
- 데이터들은 우선 순위를 가지고 있고, 우선 순위가 높은 데이터가 먼저 나간다.

| 자료 구조 | 삭제되는 요소 |
| --- | --- |
| 스택 (Stack) | 가장 최근에 들어온 데이터 |
| 큐 (Queue) | 가장 먼저 들어온 데이터 |
| 우선순위 큐 (Priority Queue) | 가장 우선순위가 높은 데이터 |

### 이용 사례

- 시뮬레이션 시스템
- 네트워크 트래픽 제어
- 운영 체제에서의 작업 스케줄링
- 수치 해석적인 계산

### 구현

- 배열, 연결 리스트, 힙으로 구현이 가능하나 힙으로 구현하는 것이 가장 효율적이다.

| 표현 방법 | 삽입 | 삭제 |
| --- | --- | --- |
| 순서 없는 배열 | O(1) | O(n) |
| 순서 없는 연결 리스트 | O(1) | O(n) |
| 정렬된 배열 | O(n) | O(1) |
| 정렬된 연결 리스트 | O(n) | O(1) |
| 힙 | O(logn) | O(logn) |

## 힙 Heap

- 완전 이진 트리의 일종으로, 우선순위 큐를 위해 만들어졌다.
- 여러 값들 중 최댓값이나 최솟값을 빠르게 찾아내도록 만들어진 자료구조이다.
- 일종의 반정렬 상태 (느슨한 정렬 상태) 를 유지한다.
    - 큰 값이 상위 레벨에 있고, 작은 값이 하위 레벨에 있다.
    - 간단히 말해 부모 노드의 키 값이 자식 노드의 키 값보다 항상 큰(작은) 이진 트리를 말한다.
    - 키값 대소 관계는 부모 자식 간에만 성립되며, 형제 사이에는 대소 관계가 정해지지 않는다.
- 힙 트리에서는 중복된 값을 허용한다. (이진 탐색 트리에서는 중복된 값을 허용하지 않는다.)

### 종류

![https://gmlwjd9405.github.io/images/data-structure-heap/types-of-heap.png](https://gmlwjd9405.github.io/images/data-structure-heap/types-of-heap.png)

- 최대 힙 (Max Heap)
    - 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리
    - key(부모 노드) ≥ key(자식 노드)
- 최소 힙 (Min Heap)
    - 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리
    - key(부모 노드) ≤ key(자식 노드)


### 구현

![https://gmlwjd9405.github.io/images/data-structure-heap/heap-index-parent-child.png](https://gmlwjd9405.github.io/images/data-structure-heap/heap-index-parent-child.png)

- 힙을 저장하는 표준적인 자료 구조는 배열이다.
- 구현을 쉽게 하기 위해 첫번째 인덱스인 0은 사용되지 않는다.
- 특정 위치의 노드 번호는 새로운 노드가 추가되어도 변하지 않는다.
    - 예로, 루트 노드의 오른쪽 노드 번호는 항상 3이다.
- 부모 노드와 자식 노드의 관계
    - 왼쪽 자식의 인덱스 = (부모의 인덱스) * 2
    - 오른쪽 자식의 인덱스 = (부모의 인덱스) * 2 + 1
    - 부모의 인덱스 = (자식의 인덱스) / 2    (몫)

## 힙 연산

- 데이터의 삽입과 삭제가 일어남에 따라 최대 힙의 조건이 깨질 수 있으므로 노드의 위치를 바꿔가며 재구조화를 해주어야 한다.
- 삽입과 삭제의 경우 연산 자체는 O(1)로 작동하지만, 재구조화하는 작업을 거치기 때문에 O(logn)의 시간 복잡도를 가진다.

### 삽입

- 가장 말단 노드에 새로운 데이터가 추가되면 부모 노드와 비교해가며 재구조화를 한다.
- 재구조화는 아래에서 위로 이루어진다.

![https://gmlwjd9405.github.io/images/data-structure-heap/maxheap-insertion.png](https://gmlwjd9405.github.io/images/data-structure-heap/maxheap-insertion.png)

```jsx
const arr = ['-', 9, 7, 6, 5, 4, 3, 2, 2, 1, 3];

const swap = (arr, indexA, indexB) => {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

const upHeapify = (arr, index = arr.length - 1) => {
  const parent = parseInt(index / 2);
  const leftChild = parent * 2;
  const rightChild = parent * 2 + 1;

  if (arr[parent] < arr[leftChild]) {
    swap(arr, parent, leftChild);
    upHeapify(arr, parent);
  }

  else if (arr[parent] < arr[rightChild]) {
    swap(arr, parent, rightChild);
    upHeapify(arr, parent);
  }
}

const insertData = (arr, data) => {
  arr.push(data);
  upHeapify(arr);
}

console.log(arr);
insertData(arr, 8)
console.log(arr);

// [ '-', 9, 8, 6, 5, 7, 3, 2, 2, 1, 3, 4]
```

### 삭제

- 루트 노드가 삭제되었을 경우, 가장 말단 노드를 루트 노드에 넣어준 뒤 재구조화를 한다.
- 재구조화는 위에서 아래로 이루어진다.

![https://gmlwjd9405.github.io/images/data-structure-heap/maxheap-delete.png](https://gmlwjd9405.github.io/images/data-structure-heap/maxheap-delete.png)

```jsx
const arr = ['-', 9, 7, 6, 5, 4, 3, 2, 2, 1, 3];

const swap = (arr, indexA, indexB) => {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

const downHeapify = (arr, index = 1) => {
  const parent = index;
  const leftChild = parent * 2;
  const rightChild = parent * 2 + 1;

  if (arr[parent] < arr[leftChild]) {
    swap(arr, parent, leftChild);
    downHeapify(arr, leftChild);
  }

  else if (arr[parent] < arr[rightChild]) {
    swap(arr, parent, rightChild);
    downHeapify(arr, rightChild);
  }
}

const deleteData = (arr) => {
  arr[1] = arr.pop();
  downHeapify(arr);
}

console.log(arr);
deleteData(arr);
console.log(arr);

// ['-', 7, 5, 6, 3, 4, 3, 2, 2, 1]
```

### 힙이 아닌 배열을 힙으로 만들기

- 아예 힙의 조건을 만족하지 않는 배열을 힙으로 만들기 위해서 여러 번의 재구조화 작업을 거치므로 시간복잡도는 O(nlogn)이다.
- 부모가 될 수 있는 노드들을 골라 재구조화 작업을 수행한다.
- 아래에서부터 재구조화를 수행한다.
- 아래 그림과 똑같이 만들려면 부모 노드와 자식 노드를 비교할 때, 자식 노드 중 더 큰 쪽으로 부모 노드 값을 할당해주는 방식으로 하면 되지 않을까 싶다.

![https://media.vlpt.us/images/emplam27/post/b7a8132a-ec63-447d-9b98-a880b06938cf/%ED%9E%99%20-%20%EB%B0%B0%EC%97%B4%EC%9D%84%20%ED%9E%99%EC%9C%BC%EB%A1%9C.png](https://media.vlpt.us/images/emplam27/post/b7a8132a-ec63-447d-9b98-a880b06938cf/%ED%9E%99%20-%20%EB%B0%B0%EC%97%B4%EC%9D%84%20%ED%9E%99%EC%9C%BC%EB%A1%9C.png)

```jsx
const arr2 = ['-', 1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

const swap = (arr, indexA, indexB) => {
	[arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

const makeHeap = (arr, index) => {
  const parent = index;
  const leftChild = parent * 2;
  const rightChild = parent * 2 + 1;

  if (arr[parent] < arr[leftChild]) {
    swap(arr, parent, leftChild);
    makeHeap(arr, leftChild);
    makeHeap(arr, parent);
  }

  else if (arr[parent] < arr[rightChild]) {
    swap(arr, parent, rightChild);
    makeHeap(arr, rightChild);
    makeHeap(arr, parent);
  }
}

console.log(arr2);
for (let i = parseInt(arr2.length / 2); i > 0; i--) { makeHeap(arr2, i); }
console.log(arr2);

// ['-', 10, 9, 5, 6, 8, 2, 4, 1, 3, 7]

//      10
//    9     5
//  6   8  2  4
// 1 3 7
```
   

> 참고
>
> - [https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html](https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html)
> - [https://velog.io/@emplam27/자료구조-그림으로-알아보는-힙Heap](https://velog.io/@emplam27/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-%ED%9E%99Heap)
