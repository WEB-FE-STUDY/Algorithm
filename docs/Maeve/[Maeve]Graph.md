# [5월 9일 - 개념] 그래프

# 그래프란?

현상이나 사물을 정점과 간선으로 표현하는 것으로, 정점(vertex)는 대상이나 개체를 나타내고 간선(edge)는 이들 간의 관계를 나타낸다.

### 종류

- 간선의 가중치

<img width="233" alt="스크린샷 2022-05-05 오후 2 44 44" src="https://user-images.githubusercontent.com/68533016/166875477-69a9baf4-ff09-4136-931d-c9c57a892be7.png">

<img width="218" alt="스크린샷 2022-05-05 오후 2 44 54" src="https://user-images.githubusercontent.com/68533016/166875485-6fb82857-5174-49b8-8107-fec495420df0.png">

- 간선의 방향
  - 무방향 그래프
  - 방향 그래프

<img width="233" alt="스크린샷 2022-05-05 오후 2 44 44" src="https://user-images.githubusercontent.com/68533016/166875477-69a9baf4-ff09-4136-931d-c9c57a892be7.png">

<img width="232" alt="스크린샷 2022-05-05 오후 2 45 31" src="https://user-images.githubusercontent.com/68533016/166875494-20e1ffe4-3907-4d36-a7ad-a1af48ea7874.png">

### 그래프의 탐색

- 깊이 우선 탐색 (DFS)
- 너비 우선 탐색 (BFS)

# 그래프로 최단 경로 구하기

1. 다익스트라 알고리즘 (음의 가중치 허용 X)
2. 벨만-포드 알고리즘 (음의 가중치 허용 O)
3. 플로이드 워셜 알고리즘
4. 사이클 없는 그래프의 최단 경로 알고리즘

→ 1, 2, 3 은 단일 시작점 최단 경로 문제

→ 4는 모든 쌍 최단 경로 문제 (모든 정점 쌍 간의 최단 경로를 구함)

## 다익스트라 알고리즘

간선들의 가중치가 모두 0이상인 경우

최소 비용 중에서도, 두 노드 사이의 최소 비용인 경로를 찾을 때 유용하게 사용된다.

[https://yabmoons.tistory.com/364](https://yabmoons.tistory.com/364)

### 동작 원리

- dist 배열 : 해당 정점까지의 최소비용을 저장하는 배열
  - 초기에 모두 무한대 (INF)로 초기화되어 있음

1. 시작 노드와 직접적으로 연결된 모든 정점들의 거리를 비교해서 업데이트 시켜주고, 시작 노드를 방문 노드로 체크한다.
2. 방문한 정점들과 연결되어 있는 정점들 중, 비용이 가장 적게 드는 정점을 선택하고, 해당 정점을 방문한 정점으로 선택한다.
3. 2번 과정에 의해서 갱신될 수 있는 정점들의 거리를 갱신시켜준다. (최소 비용)
4. 2 ~ 3번 과정을 반복한다.

- 방문한 정점은 다시 보지 않는다.
  - 그리디 greedy 함

![Untitled](https://user-images.githubusercontent.com/68533016/166875639-61a0f35c-94bb-48d7-8309-9c9f904b1a62.png)

- 시작 노드는 1

![Untitled1](https://user-images.githubusercontent.com/68533016/166875649-4aa7f6a0-1585-4b89-92ce-316bf3fe13b9.png)
![Untitled2](https://user-images.githubusercontent.com/68533016/166875656-6ca2ad45-453b-447a-a148-e0bf6876894c.png)
![Untitled3](https://user-images.githubusercontent.com/68533016/166875659-afc00fdf-fbe3-4074-9700-380c0abe924b.png)
![Untitled4](https://user-images.githubusercontent.com/68533016/166875663-e910128d-49ce-4060-8693-de8f2d5b91b4.png)
![Untitled5](https://user-images.githubusercontent.com/68533016/166875666-d33816fb-1f9c-44ce-a636-aa2c6db12c18.png)
![Untitled6](https://user-images.githubusercontent.com/68533016/166875670-d92907ac-cd21-418c-9cdd-73b709fc72eb.png)

### 한계

그래프 간선의 가중치에 음수가 들어가면 다익스트라 알고리즘을 적용할 수 없다.

→ 다익스트라 알고리즘은 ‘모든 가중치가 양수일 경우'에만 적용시킬 수 있는 최소 비용을 구하는 알괴즘

## 벨만포드 알고리즘

한 정점에서 다른 모든 정점으로 가는데 걸리는 최소비용을 구하는데 사용하는 알고리즘이라는 점에서 다익스트라 알고리즘과 동일하다.

### 다익스트라와 차이점은?

- 다익스트라
  - greedy ⭕️: 지금 눈 앞에 보이는 정점 중 최소 비용으로 연결된 정점을 선택
- 벨만포드
  - greedy ❌: 모든 경우의 수를 탐색

### 동작 원리

1. 모든 간선들을 탐색하면서, 간선이 잇는 출발 정점이 ‘한 번이라도 계산된 정점'이면 해당 간선이 잇는 정점의 거리를 비교해서 업데이트한다.
2. 1번 과정을 반복한다.

→ 벨만포드 알고리즘은 ‘모든 간선들이 모든 정점들을 최단거리로 이을 수 있을 만큼 계속해서 반복’하여 거리를 갱신한다.

<img width="586" alt="벨만포드" src="https://user-images.githubusercontent.com/68533016/166875815-9e83ecf5-0224-4340-b022-1de2fd7aeb37.png">

### 주의할 점

음의 사이클이 존재하는지 체크해야 함

→ 탐색을 하면 할수록 비용이 무한대에 가까지 작아짐

## 플로이드 워셜 알고리즘

[https://chanhuiseok.github.io/posts/algo-50/](https://chanhuiseok.github.io/posts/algo-50/)

[https://velog.io/@kimdukbae/플로이드-워셜-알고리즘-Floyd-Warshall-Algorithm](https://velog.io/@kimdukbae/%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%9B%8C%EC%85%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Floyd-Warshall-Algorithm)

모든 최단 경로를 구하는 알고리즘

다익스트라는 하나의 정점에서 다른 모든 정점까지의 최단 거리를 구하는 알고리즘이라면,

플로이드-워셜 알고리즘은 한 번 실행하여 모든 노드 간 최단 경로를 구하는 알고리즘이다.

DP 알고리즘에 속함

→ 노드의 개수가 `n` 개 일 때, `n` 번 만큼 단계를 반복하며 `점화식에 맞게` 2차원 배열을 갱신하기 때문

→ 최단 거리를 갱신하는 점화식

<img width="514" alt="플로이드점화식" src="https://user-images.githubusercontent.com/68533016/166875924-993bda49-b166-435a-b532-3020ed14b3fa.png">

### 동작 원리

모든 노드 간의 최단 거리를 구해야 하므로 2차원 인접 행렬(배열)을 구성한다.

알고리즘은 여러 라운드로 구성된다 .각 경로에서 새로운 중간 노드로 사용할 수 있는 노드를 선택하고, 더 짧은 길이를 선택하여 줄이는 과정을 반복한다.

<img width="766" alt="플로이드1" src="https://user-images.githubusercontent.com/68533016/166875899-6aa5302c-5e15-4476-9155-3b011514bdd8.png">

그래프는 1번 ~ 4번 노드가 존재하므로 알고리즘은 총 4라운드의 과정을 거친다. 모든 노드들이 중간 노드로 선정하는 과정을 각 라운드마다 거친다.

1. 1번 노드를 새로운 중간 노드로 설정하여 테이블 갱신

<img width="743" alt="플로이드2" src="https://user-images.githubusercontent.com/68533016/166875911-87ba5b0e-5a45-417e-8d60-0b0fa86ed9b3.png">

2. 2번 노드를 거쳐 가는 경우를 고려하여 테이블 갱신

<img width="798" alt="플로이드3" src="https://user-images.githubusercontent.com/68533016/166875917-eb37167c-abbc-4882-be4f-67e3607d99fa.png">

3. 3번 노드를 거쳐 가는 경우를 고려하여 테이블 갱신

<img width="749" alt="플로이드4" src="https://user-images.githubusercontent.com/68533016/166875920-05b68943-e976-4ae5-8bf9-5edcb7ed97eb.png">

4. 4번 노드를 거쳐 가는 경우를 고려하여 테이블 갱신

<img width="744" alt="플로이드5" src="https://user-images.githubusercontent.com/68533016/166875921-086c1edb-496c-49fb-8689-9c63c529cf16.png">
