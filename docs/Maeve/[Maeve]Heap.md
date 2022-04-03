# [4월 4일 - 개념] 힙(Heap)

# 힙 (Heap)

![https://media.vlpt.us/images/emplam27/post/d33ee896-7638-4c80-a03d-219b1200534c/%ED%9E%99%20-%201.png](https://media.vlpt.us/images/emplam27/post/d33ee896-7638-4c80-a03d-219b1200534c/%ED%9E%99%20-%201.png)

**완전 이진 트리**를 기초로 하는 자료구조이다.

완전 이진 트리는 **마지막을 제외한 모든 노드에서 자식들이 꽉 채워진 이진트리**이다.

## 특징

- 최대힙 (Max heap)과 최소힙 (Min Heap)으로 나눠진다.
  - 최대힙 : 부모 노드의 값이 자식 노드들의 값보다 항상 크다.
  - 최소힙: 부모 노드의 값이 자식 노드들의 값보다 항상 작다.
- 따라서 느슨한 정렬(반 정렬) 상태이다.
  - 형제 간 우선순위는 고려되지 않음 (only 부모 자식간의 관계)
- 최솟값 또는 최대값을 빠르게 찾아내기 위해 만들어진 자료구조이다.
  - 중복값을 허용
- 시간 복잡도
  - 삽입 / 삭제 : `O(1)`
  - 삽입 / 삭제로 인한 heapify : `O(logN)`
    - 부모 노드가 자식 노드보다 우선 순위만 높으면 된다.
      → 결국 트리의 깊이만큼 비교를 하면 된다 .
  - 힙이 아닌 배열을 힙으로 만들기 (build heap) : `O(NlogN)`
    - 여러 번의 heapify 과정을 거침

## 구현

배열로 구현한다.

### 인덱스

![IMG_9D43D34CE085-1](https://user-images.githubusercontent.com/68533016/161419481-1b5b3cd0-c049-43e2-b751-5e834ee2aa3f.jpeg)

- 왼쪽 자식 = 부모 인덱스 \* 2 + 1
- 오른쪽 자식 = 부모 인덱스 \* 2 + 2
- 부모 인덱스 = (자식 인덱스 - 1) / 2

### Min Heap 구현

```jsx
// Min Heap 구현하기

class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0]; // 항상 최상위 노드가 peek 됨

  insert = (key, value) => {
    // 우선순위를 비교하기 위해서 key, value로 받음
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp(); // 배열의 가장 마지막에 추가하고, 다시 min heap의 형태를 갖춤
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    // 루트노드가 되기 전까지
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 key 값보다 크다면
      // 부모 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break를 만나서 자리를 찾았으면
    // 마지막 찾은 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  };

  // 최솟값을 꺼내는 삭제 매커니즘
  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); // 루트를 뽑고
      this.heapifyDown(); // 다시 min heap의 형태를 갖춤
    }

    return rootNode;
  };

  // 변경된 루트노드가 제 자리를 찾아가도록 하는 메소드
  heapifyDown = () => {
    let index = 0;
    let count = this.heap.length;
    const rootNode = this.heap[index];

    // left child가 있을 때까지 계속 검사
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // 왼쪽, 오른쪽 자식 중에 더 작은 값을 찾는다
      // rightChild가 있다면 key 값을 비교해 더 작은 값을 찾는다
      // 없다면 leftChild가 더 작은 값을 가지는 인덱스가 된다
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      // 자식 노드의 키 값이 루트 노드보다 작다면 위로 끌어 올린다
      if (this.heap[smallerChildIndex].key < rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}
```

```jsx
// Priority Queue 구현하기

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
  printHeap = () => console.log(this.heap);
}
```

## 참고

- [https://jun-choi-4928.medium.com/javascript로-heap-priority-queue-구현하기-8bc13bf095d9](https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9)
- [https://velog.io/@emplam27/자료구조-그림으로-알아보는-힙Heap](https://velog.io/@emplam27/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-%ED%9E%99Heap)
- [https://velog.io/@yuhyerin/HeapSort](https://velog.io/@yuhyerin/HeapSort)
