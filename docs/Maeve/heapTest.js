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

const pq = new PriorityQueue();

pq.enqueue(9, 9);
pq.enqueue(4, 9);
pq.enqueue(1, 0);
pq.enqueue(0, 2);

pq.printHeap();
pq.dequeue();

pq.printHeap();
pq.dequeue();

pq.printHeap();
