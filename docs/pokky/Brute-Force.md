# 완전탐색(Bruete-Force)
- 모든 경우의 수를 다 확인하는 방법
- 순열, 백트래킹, BFS 등이 있다.
- 완전 탐색은 시간 복잡도를 고려해야 한다.

## DFS & BFS
> [컴맹분들도 이해할 수 있는 용어설명! DFS와 BFS](https://www.youtube.com/watch?v=-wsYtm0x3nw)

![](https://images.velog.io/images/moon-yerim/post/f542df56-c2d9-44b7-8423-d6c016023092/image.png)

[출처](https://velog.io/@dbsrud11/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-DFS-BFS)

## 백트래킹
[코딩테스트, 기초, 백트래킹 backtracking 소개
](https://www.youtube.com/watch?v=Ar40zcPoKEI&t=67s)

- 탐색을 하며 내려가다 현재 탐색이 무의미한 경우 되돌아가서 다시 찾아 내려가는 알고리즘
- 무의미한 경로를 더 이상 가지 않고 되돌아가는 것을 가지치기라고 한다.
- 가지치기를 하면서 불필요한 경로를 차단하기 때문에 경우의 수를 줄일 수 있다.
![](https://images.velog.io/images/moon-yerim/post/32b21609-85d7-4a40-a6ae-eb14d1f19ef6/image.png)

[출처](https://ttagu.blogspot.com/2016/04/blog-post.html?m=1)

### 예시
![](https://images.velog.io/images/moon-yerim/post/b42e6dc3-60a4-48e5-b255-af003f2ca2c1/image.png)

![](https://images.velog.io/images/moon-yerim/post/f014c80c-db1a-4b12-990a-3ed875807d2a/image.png)