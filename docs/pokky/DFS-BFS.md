# DFS
## 트리구조의 dfs
### Pre-order(전위순회)
* 그래프의 DFS와 순서가 같음.
   1) 루트노드 방문
   2) 왼쪽 자식 노드를 루트로 하는 서브 트리를 프리오더(재귀)
   3) 오른쪽 자식 노드를 루트로 하는 서브 트리를 프리오더(재귀)

### In-order(중위순회)
* Binary Search Tree에서 Delete를 구현할 때 인오더를 주로 사용함.
   1) 왼쪽 자식 노드를 루트로 하는 서브 트리를 인오더(재귀)
   2) 루트노드 방문
   3) 오른쪽 자식 노드를 루트로 하는 서브 트리를 인오더(재귀)

### Post-order(후위순회)
* 트리 관련 다이나믹 문제에서 자식이 모두 처리된 다음에 부모노드를 처리하는 방식으로 자주 쓰임
   1) 왼쪽 자식 노드를 루트로 하는 서브 트리를 포스트오더(재귀)
   2) 오른쪽 자식 노드를 루트로 하는 서브 트리를 포스트오더(재귀)
   3) 루트노드 방문
   
![image](https://user-images.githubusercontent.com/75062526/157084956-a0307823-4c51-4b03-a248-8b9eb565aa9d.png)

```jsx
// Depth-first Search(깊이 우선 탐색)
  // 1. Pre-Order traversal(전위 순회)
  preOrder() {
    const finalData = [];
    function traverse(node) {
      //finalData.push(node); 순서출력 아니니 필요없을 듯
      if(node.left) {
			//여기에 if(클래스, 아이디, 요소가 맞다) return
        traverse(node.left);
      }
      if(node.right) {
			//여기에 if(클래스, 아이디, 요소가 맞다) return
        traverse(node.right);
      }
    }
    traverse(this.root);
    return finalData;
  }

	//리턴 대신 배열에 찾은 걸 넣게해서 완전 탐색하면 querySelectAll
```

# BFS
![](https://images.velog.io/images/moon-yerim/post/172fccb2-8e1a-45dd-9f15-7bb31b332c09/image.png)
```jsx
  bfs() {
    let node = this.root;
    let queue = [node];
    let finalData = [];

    while(queue.length) {
      node = queue.shift();
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
      finalData.push(node.data);
    }
    return finalData;
  }
```
> [1분으로 보는 DFS/BFS 구현 방법](https://www.youtube.com/watch?v=CUTXL4NFTGE)
 [JavaScript로 Tree 구현하고 BFS, DFS로 탐색하기](https://velog.io/@devjade/JavaScript%EB%A1%9C-Tree-%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0-BFS-DFS%EB%A1%9C-%ED%83%90%EC%83%89%ED%95%98%EA%B8%B0)
[챕터7-2. 트리 | 순회방법(전위, 중위, 후위)](https://ldgeao99.tistory.com/402)
사진, 코드 : [ukcasso code](https://ukcasso.tistory.com/12)(중위, 후위도 있음) - 이 사이트가 이해 제일 잘 됨