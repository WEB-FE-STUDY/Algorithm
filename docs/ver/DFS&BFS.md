# \***\*깊이/너비 우선 탐색(DFS/BFS)\*\***

![https://blog.kakaocdn.net/dn/bx56b3/btq3htSZkqf/6RPOyejs1gRJArDVlvDNIK/img.gif](https://blog.kakaocdn.net/dn/bx56b3/btq3htSZkqf/6RPOyejs1gRJArDVlvDNIK/img.gif)

## 깊이 우선 탐색(DFS)

트리나 그래프에서 한 루트에서 시작해서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식을 말한다. 일반적으로 재귀호출을 사용하여 구현한다.

대표적으로 백트래킹에 사용되는데, 자식노드를 탐색하고 다시 부모 노드로 돌아오는 것을 뜻한다.

### 트리 구조에 적용

[https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIDSTw%2Fbtq3hnrPpgQ%2FjGpx6PvM60CtpKO23NeI21%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIDSTw%2Fbtq3hnrPpgQ%2FjGpx6PvM60CtpKO23NeI21%2Fimg.png)

일반적으로 전위 순회(Preorder Traversal)이 사용 된다.

### 예시

```jsx
let find = false; //플래그
let target = null;

const DFS = (element, className) => {
  if (find) return;
  if (element.classList.contains(className)) {
    find = true;
    target = element;
    return;
  }

  [...element.children].forEach((child) => {
    DFS(child, className);
  });
};
```

querySelector를 구현할 때 만들었던 DFS 함수

파라미터로 들어 온 element의 자식 노드를 재귀로 순회하며 calssName이 일치하는 element를 찾으면 즉시 반환

```jsx
let targets = [];

const fullDFS = (element, className) => {
  if (element.classList.contains(className)) {
    targets.push(element);
  }

  [...element.children].forEach((child) => {
    fullDFS(child, className);
  });
};
```

querySelectorAll을 구현할 때 만들었던 fullDFS 함수

### DFS 활용

- BFS에 비해 공간 효율적(space-efficient)이다. 현재 경로 상의 노드들만 기억하면 되기 때문에 상대적으로 작은 저장 공간을 필요로 한다.
- 목표 노드가 깊은 곳에 있을 경우 상대적으로 빨리 찾을 수 있다.

## 너비 우선 탐색(BFS)

BFS의 핵심은 레벨 기반 또는 행 기반 이라는 점이다. 특정 정점(노드)를 기준으로 목표 정점까지 가는 경로를 찾을 때 기준 정점에서 가까운 정점들(같은 레벨 또는 행)을 먼저 탐색한다. 일반적으로 선입선출 방식은 큐 자료구조를 사용한다.

주로 두 노드 사이의 최단 경로를 찾고 싶을 때 이 방법을 선택한다.

### BFS 활용

- 출발 정점부터 목표 정점까지 가는 경로가 분명히 존재하는 경우, 그리고 그런 경로가 여러개인 경우 최단 경로를 찾아야 할 때 유용하다

## DFS와 BFS의 시간 복잡도

두 방식 모두 조건 내의 모든 노드를 검색한다는 점에서 시간 복잡도는 동일하다

**O(|V| + |E|)**

|V|: *number of vertices* , |E|: *number of edges*
