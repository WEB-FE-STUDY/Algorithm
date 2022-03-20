# 너비 우선 탐색 (BFS, Breadth-First Search)

![https://blog.kakaocdn.net/dn/c305k7/btqB5E2hI4r/ea7vFo08tkDYo4c8wkfVok/img.gif](https://blog.kakaocdn.net/dn/c305k7/btqB5E2hI4r/ea7vFo08tkDYo4c8wkfVok/img.gif)

- 최대한 넓게 이동한 다음, 더 이상 갈 곳이 없을 때 아래로 이동한다.
- 루트 노드에서 인접한 노드를 먼저 탐색하는 방법이다.
- 주로 두 노드 사이의 **최단 경로**를 찾고 싶을 때 이 방법을 선택한다.
- 장점
    - 답이 되는 경로가 여러 개인 경우에도 최단 경로를 보장한다.
    - 최단 경로가 존재하면 깊이가 무한정 깊어진다고 해도 답을 찾을 수 있다.
- 단점
    - 경로가 매우 길 경우에는 탐색해야 하는 노드가 크게 증가하여 보다 많은 공간을 필요로 한다.
    - 해가 존재하지 않는다면 유한 그래프의 경우 모든 그래프를 탐색한 후에 실패로 끝난다.

## 구현

### 그래프 사용, 큐 사용

```jsx
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node); 
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(BFS(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
```

### 트리 사용, 큐 사용

```jsx
const bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.

  let values = [node.value] //그 값이 들어가고
  let queue = [node] //노드 자체가 들어간다

  while(queue.length!==0){
    let search = queue.shift(); //탐색 시작할 노드 하나 빼서
    for(let i=0; i<search.children.length; i++){ //그 노드의 children 배열을 순회
        values.push(search.children[i].value) //값은 values에 밀어넣고
        queue.push(search.children[i]) //children노드는 또 탐색을 해주기 위해 queue에 넣어준다
    }
  }
  return values;
   
};
```

# 깊이 우선 탐색 (DFS, Depth-First Search)

![https://blog.kakaocdn.net/dn/xC9Vq/btqB8n5A25K/GyOf4iwqu8euOyhwtFuyj1/img.gif](https://blog.kakaocdn.net/dn/xC9Vq/btqB8n5A25K/GyOf4iwqu8euOyhwtFuyj1/img.gif)

- 최대한 깊이 내려간 뒤 더 이상 갈 곳이 없을 경우 옆으로 이동한다.
- 모든 노드를 방문하고자 하는 경우에 이 방법을 선택한다.
- 두 방법 모두 모든 노드를 검색한다는 점에서 시간 복잡도는 동일하다.
  N은 노드, E는 간선일 때
    - 인접 행렬로 구현 : O(N^2)
    - 인접 리스트로 구현 : O(N+E)
- 일반적으로 E의 크기가 N^2에 비해 작으므로 인접 리스트 방식이 효율적이다.
- 미로 게임 등에서 **경로가 존재하는지를 판별**할 때 유용하다.
- 이동할 때마다 가중치가 붙는다거나 이동 과정에서 여러 제약이 있을 경우 DFS로 구현하는 것이 좋다.
- 장점
    - 현 경로 상의 노드를 기억하므로 적은 메모리를 사용한다.
    - 찾으려는 노드가 깊은 단계에 있는 경우 BFS보다 빠르게 찾을 수 있다.
    - BFS에 비해 좀 더 간단하다.
- 단점
    - 해가 없는 경로를 탐색할 경우 단계가 끝날 때까지 탐색한다. 효율성을 높이기 위해 미리 지정한 임의 깊이까지만 탐색하고 해를 발견하지 못하면 빠져나와 다른 경로를 탐색하는 방법을 사용한다.
    - DFS를 통해 얻어진 해가 최단 경로라는 보장이 없다.

## 구현

### 그래프 사용, 스택 사용

```jsx
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfs(graph, "A"));

// ["A", "C", "I", "J", "H", "G", "B", "D", "F", "E"]
```

### 트리 사용, 재귀함수 사용

```jsx
let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  
  let values = [node.value] //최상단 노드를 방문도장 찍고
  
  for(let i=0; i<node.children.length; i++){
      values = values.concat(dfs(node.children[i])) 
    //자식노드들을 탐색할 때 재귀함수를 호출하여 하나하나 values에 concat 시킨다!
  }
  return values;

};
```

## 백준 문제 추천

[DFS BFS란? 백준 문제추천](https://covenant.tistory.com/132)

> 참고
>
> - [https://devuna.tistory.com/32](https://devuna.tistory.com/32)
> - [https://velog.io/@sangbooom/JS-BFS-DFS](https://velog.io/@sangbooom/JS-BFS-DFS)
> - [https://velog.io/@devjade/JavaScript%EB%A1%9C-Tree-%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0-BFS-DFS%EB%A1%9C-%ED%83%90%EC%83%89%ED%95%98%EA%B8%B0](https://velog.io/@devjade/JavaScript%EB%A1%9C-Tree-%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0-BFS-DFS%EB%A1%9C-%ED%83%90%EC%83%89%ED%95%98%EA%B8%B0)
> - [https://ryusm.tistory.com/48](https://ryusm.tistory.com/48)
