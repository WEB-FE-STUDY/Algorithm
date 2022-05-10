# 그래프 (Graph)

![https://miro.medium.com/max/976/0*UgMHEDLriw2efXbx](https://miro.medium.com/max/976/0*UgMHEDLriw2efXbx)

정점(`Node` / `Vertex`)과 간선(`Edge`)으로 연결되어 있는 객체 간의 관계를 표현한다.

## 그래프의 용어

- 정점(`node` / `vertext`) : 위치라는 개념
- 간선(`edge`) : 정점을 연결하는 선
- 인접 정점(`adjacent vertex`) : 간선에 직접 연결된 정점
- 차수(`degree`) : 한 정점에 연결된 간선의 수 (주로 무방향 그래프에서 사용)
- 입력 차수(`in-degree`) : 한 정점으로 들어오는 간선의 수 (주로 방향그래프에서 사용)
- 출력 차수(`out-degree`) : 한 정점에서 나가는 간선의 수(주로 방향그래프에서 사용)
- 사이클(`cycle`) : 한 정점에서 출발하여 시작했던 정점으로 돌아오는 경로

## 그래프의 종류

<img src="https://blog.kakaocdn.net/dn/dw8QqI/btq7DVw0tCO/nuMCO1xM0YJwfBlAinKvE1/img.png" alt="무방향 그래프 & 방향 그래프" />
<div style="display: flex;">
  <img src="https://cdn.filepicker.io/api/file/8wkz8ZEaROeBaPyEY2i1" alt="가중치 그래프" width="50%" />
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdtlpYK%2FbtqSbaEBdgX%2FUldMBA9Va8rNKQ00nKu4F1%2Fimg.png" alt="완전 그래프" />
</div>
   

- 무방향 그래프 (`undirected graph`) : 간선을 통해 양방향으로 이동할 수 있는 그래프로, 정점 A와 정점 B를 연결하는 간선은 (A, B)와 같이 쌍으로 표현한다.
- 방향 그래프 (`directed graph`) : 간선에 방향성이 존재하는 그래프로, A → B 로만 이동할 수 있다면 <A, B>로 표현한다. <A, B>와 <B, A>는 다르다.
- 가중치 그래프 (`weighted graph`) : 간선에 비용이나 가중치가 할당된 그래프로, 네트워크라고도 불린다.
- 완전 그래프 (`complete graph`) : 모든 정점 간에 간선이 존재하는 그래프로, 무방향 완전 그래프의 정점의 수가 `n`일 때 전체 간선의 수는 `n * (n-1) / 2` 이다.


## 그래프의 구현 방식

### 인접 리스트 (Adjacency List)

![https://t1.daumcdn.net/cfile/tistory/2269874B584C17F301](https://t1.daumcdn.net/cfile/tistory/2269874B584C17F301)

![https://t1.daumcdn.net/cfile/tistory/265E074D584C26DD2B](https://t1.daumcdn.net/cfile/tistory/265E074D584C26DD2B)   

- 각 정점에 연결되어 있는 정점들을 연결 리스트로 표현한다.
- 정점의 개수만큼 인접리스트가 존재하고, 각 인접 리스트에는 인접한 정점 정보가 저장된다. 그래프는 각 인접리스트에 대한 헤드 포인터를 배열로 갖는다.
- 장점
    - 실제로 연결된 노드들에 대한 정보만 저장하므로, 인접 리스트 내 모든 원소의 개수의 합이 간선의 개수와 같다 ⇒ 간선의 개수에 비례하는 메모리만 차지한다.
    - 그래프의 모든 간선의 수를 알아내려면 각 정점의 헤더 노드부터 모든 인접 리스트를 탐색해야 하므로 O(N+E)의 시간이 소요된다.
- 단점
    - 두 정점을 연결하는 간선을 조회하거나 정점의 차수를 알기 위해서는 정점의 인접 리스트를 탐색해야 하므로 정점의 차수만큼의 시간이 필요하다.
    - 구현이 비교적 어렵다.
   
   
### 인접 행렬 (Adjacency Matrix)

![https://miro.medium.com/max/1400/0*38aeCTBOyULNnQCm](https://miro.medium.com/max/1400/0*38aeCTBOyULNnQCm)

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAX0fJ%2FbtqSsQxDVL3%2FUMyk36B9WbAqVOzNkLpO8k%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAX0fJ%2FbtqSsQxDVL3%2FUMyk36B9WbAqVOzNkLpO8k%2Fimg.png)

- 그래프의 정점을 2차원 배열로 표현한 것으로, 모든 정점의 연결 여부를 저장한다.
- 무방향 그래프는 인접 행렬이 대칭 구조를 가진다.
- 가중치 그래프의 경우 행렬에서 0과 1이 아니라 각 간선의 가중치 값이 저장된다. 이 때 가중치가 0인 것과 간선이 없는 것이 구별되어야 한다.
- 장점
    - 두 정점을 연결하는 간선을 조회할 때 O(1) 시간복잡도로 가능하다.
    - 정점의 차수를 구할 때 인접행렬의 i번째 행의 값을 모두 더하면 되므로 O(n)의 시간 복잡도를 가진다.
    - 구현이 비교적 간단하다.
- 단점
    - 간선의 수와 무관하게 항상 n^2 크기의 2차원 배열이 필요하므로 메모리 공간이 낭비된다.
    - 그래프의 모든 간선의 수를 알아내려면 인접행렬 전체를 확인해야 하므로 O(n^2)의 시간이 소요된다.
  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs9cNv%2FbtqSdtcL9I9%2FWGH8cw8sqPuRDW1jygiwkk%2Fimg.png" alt="무방향 그래프 & 방향 그래프" />
   

## 그래프의 메소드

- **addNode()** : 새로운 node를 생성하여 그래프에 추가한다.
- **contains()** : node.value가 존재하는 지 확인하고 boolean 값을 출력한다.
- **removeNode()** : node를 삭제하고, 연결되어 있는 간선 또한 제거한다.
- **addEdge()** : 새로운 edge 를 생성하여 두 개의 노드를 연결한다.
- **hasEdge()** : node가 서로 연결되어 있는 지 확인하여 boolean 값을 출력한다.
- **removeEdge()** : node를 연결하는 edge를 제거한다.
- **forEachNode()** : 각 노드를한 번씩 호출하여 그래프를 통과한다.

## 그래프 순회 방법

- 깊이 우선 탐색 (DFS)
- 너비 우선 탐색 (BFS)

# 트리 (Tree)

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbyVSy%2FbtqCvy6XZpM%2FOacTnki6JIQJuFYWaDpXY1%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbyVSy%2FbtqCvy6XZpM%2FOacTnki6JIQJuFYWaDpXY1%2Fimg.png)

- 그래프와 같이 노드와 노드 간을 연결하는 간선으로 구성된 자료 구조이다.
- 트리는 그래프의 한 종류이다.
- 방향성이 있으며 사이클이 존재하지 않는다.
- 부모 - 자식 관계라는 개념이 있으며 최상위에 루트 노드가 존재한다. (계층형 그래프)
   

## 트리의 용어

- 루트 노드(`root node`) : 부모가 없는 노드, 트리는 하나의 루트 노드 만을 가진다.
- 단말 노드(`leaf node`) : 자식이 없는 노드
- 내부(`internal`) 노드 : 단말 노드가 아닌 노드
- 간선(`edge`) : 노드를 연결하는 선
- 형제(`sibling`) : 같은 부모를 가지는 노드
- 조상 노드(`ancestors node`) : 임의의 노드에서 루트 노드에 이르는 경로상에 있는 노드들
- 노드의 크기(`size`) : 자신을 포함한 모든 자손 노드의 개수
- 노드의 깊이(`depth`) : 루트에서 어떤 노드에 도달하기 위해 커쳐야하는 간선 수
- 노드의 레벨(`level`) : 트리의 특정 깊이를 가지는 노드의 집합
- 노드의 차수(`degree`) : 각 노드에서 뻗어나온 가지의 수
- 트리의 차수(`degree of tree`) : 트리에서 가장 큰 차수
- 트리의 높이(`height`) : 가장 깊숙히 있는 노드의 깊이

## 트리의 종류

### 이진 트리 (Binary Tree)

- 자식을 최대 2개까지 가질 수 있는 트리

### 삼항 트리 (Ternary Tree)

- 자식을 최대 3개까지 가질 수 있는 트리

### 이진 탐색 트리 (Binary Search Tree)

![https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1920px-Binary_search_tree.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1920px-Binary_search_tree.svg.png)

- 기본적인 특징은 이진 트리와 같다.
- 다만 노드의 왼쪽에는 자신보다 값이 작은 노드가, 오른쪽에는 자신보다 값이 큰 노드가 온다.
- 이 조건은 부모 자식 관계에만 적용되는 것이 아니다. 4를 기준으로 보면 상위에 있는 3도 4의 왼쪽에 있으므로 자신보다 작아야 하고, 1 또한 4보다 작다. 반면 4의 오른쪽에 있는 7, 13 또한 자신보다 큰 값을 갖고 있다.

### 완전 이진 트리 (Complete Binary Tree)

![https://gmlwjd9405.github.io/images/data-structure-tree/Complete-Binary-Tree.png](https://gmlwjd9405.github.io/images/data-structure-tree/Complete-Binary-Tree.png)

- 이진 트리의 조건을 만족하면서 아래 조건을 만족해야 한다.
- 마지막 레벨을 제외한 나머지 레벨에서는 노드들이 꽉 차있어야 한다.
- 마지막 레벨은 왼쪽부터 노드가 채워져있어야 한다.

### 정 이진 트리 (Full Binary Tree)

![https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png](https://cdn.programiz.com/sites/tutorial2program/files/full-binary-tree_0.png)

- 이진 트리의 조건을 만족하면서 아래 조건을 만족해야 한다.
- 루트 노드를 제외한 모든 노드들은 2개의 자식 노드를 가지거나, 자식 노드가 하나도 없어야 한다.

### 포화 이진 트리 (Perfect Binary Tree)

![https://media.geeksforgeeks.org/wp-content/uploads/binary_tree-1.png](https://media.geeksforgeeks.org/wp-content/uploads/binary_tree-1.png)

- 이진 트리의 조건을 만족하면서 아래 조건을 만족해야 한다.
- 마지막 레벨에 있는 노드를 제외한 모든 나머지 노드들이 2개의 자식 노드를 가져야 한다.

## Tree 구현

```jsx
class Tree {
  constructor(value) {
		// constructor로 만든 객체는 트리의 Node가 된다.
    this.value = value;
    this.children = []; // 자식노드들도 객체형태인데 이 노드들을 담을 배열
  }

// 노드를 삽입하는 메소드
  insertNode(value) {
    const childNode = new Tree(value); //인스턴스 객체(=자식노드) 생성
    this.children.push(childNode); //자식노드를 푸시
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메소드
  contains(value) {
    if (this.value === value) {
      return true;
    }
		// TODO: 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색하세요.
    else{
      for(let i=0; i<this.children.length; i++){
        const childNode = this.children[i];
        if (childNode.contains(value)) { //자식노드들이 value를 
          return true;
        }
      }
    }
		// 전부 탐색했음에도 true가 나오지 않는다면 마지막엔 false 반환
    return false;
  }
}
```

```jsx
const rootNode = new Tree(null);

for(let i = 0; i <= 4; i++) {
  if(rootNode.children[i]) {
    rootNode.children[i].insertNode(i)
  }
 rootNode.insertNode(i); 
}
rootNode; // 초반엔 rootNode에 자식 노드들이 한 개도 없으므로 rootNode = {value: null, children: Array(5)}
rootNode.contains(5); //false
rootNode.contains(1); //true
```

## 이진트리 순회 방법

![이진트리 순회 방법 예시](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/52a25cdb-b71d-430a-8ea1-2518ab420f6b/download.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220510T160612Z&X-Amz-Expires=86400&X-Amz-Signature=9077db817e68648df540b513f626d685c141f5eb380c62d28b9eed3ee1f21b91&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22download.png%22&x-id=GetObject)

### 전위 순회 (Preorder Traversal)

- root → left → right
- 순서 : 1 - 2 - 4 - 8 - 9 - 5 - 10 - 11 - 3 - 6 - 12 - 13 - 7 - 14 - 15

### 중위 순회 (Inorder Traversal)

- left → root → right
- 순서 : 8 - 4 - 9 - 2 - 10 - 5 - 11 - 1 - 12 - 6 - 13 - 3 - 14 - 7 - 15

### 후위 순회 (Postorder Traversal)

- left → right → root
- 순서 : 8 - 9 - 4 - 10 - 11 - 5 - 2 - 12 - 13 - 6 - 14 - 15 - 7 - 3 - 1

> 참고
>
> - [https://bamdule.tistory.com/68](https://bamdule.tistory.com/68)
> - [https://medium.com/@gwakhyoeun/til-자료구조-graph-이해하기-6f92fd87a0bd](https://medium.com/@gwakhyoeun/til-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-graph-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-6f92fd87a0bd)
> - [https://suyeon96.tistory.com/32](https://suyeon96.tistory.com/32)
> - [https://gusrb3164.github.io/computer-science/2021/04/16/graph,tree/](https://gusrb3164.github.io/computer-science/2021/04/16/graph,tree/)
> - [https://sarah950716.tistory.com/12](https://sarah950716.tistory.com/12)
> - [https://velog.io/@keum0821/트리의-개념과-이진-트리](https://velog.io/@keum0821/%ED%8A%B8%EB%A6%AC%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%AC)
> - [https://hongku.tistory.com/160](https://hongku.tistory.com/160)
