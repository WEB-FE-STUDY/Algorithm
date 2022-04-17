# [4월 18일 - 개념] 동적계획법

# 동적계획법 (Dynamic Programming)

하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결한다. (알고리즘 보단 문제해결 패러다임)

큰 문제를 작은 문제로 쪼개서 답을 저장해두고 재활용한다.

Divide and Conquer (분할 정복)!

## DP 를 사용하는 이유

- 재귀와 유사해보이지만, 재귀는 비효율적이다!
- ex) 피보나치 수열

```jsx
f(n) = f(n-1) + f(n-2)
```

![https://blog.kakaocdn.net/dn/t3PF0/btqSgLZbXTp/dRqSxgLwa4padvt3qtAqNk/img.png](https://blog.kakaocdn.net/dn/t3PF0/btqSgLZbXTp/dRqSxgLwa4padvt3qtAqNk/img.png)

- f(1)은 5번이나 호출된다
  → 한번 구한 작은 문제의 결과 값을 저장해두고 재사용하자

## DP 를 사용하기 위한 조건

1. 겹치는 부분 문제 (Overlapping Subproblems)

DP는 문제를 나누고 문제의 결과 값을 재활용하여 전체 답을 구한다.

따라서 동일한 작은 문제들이 반복하여 나타나야 한다.

위의 피보나치 수열의 경우 f(3), f(2), f(1)과 동일한 부분 문제가 중복되어 나타나므로 값을 재활용해서 쓸 수 있음 → DP!

1. 최적 부분 구조 (Optimal Substructure)

부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우다.

→ 특정 문제의 정답은 문제의 크기에 상관없이 항상 동일하다.

![다운로드](https://user-images.githubusercontent.com/68533016/163717495-7f166d71-5682-42c6-b326-90c783d97f39.png)

A - B 의 최적 경로를 찾을 때 중간에 X가 있는 경우,

A - X 의 최적 경로와 X-B 의 최적 경로를 합치면 A - X- B 의 전체 최적 경로가 보장된다.

## DP를 사용하는 과정

1. DP로 풀 수 있는 문제인지 파악
   1. 겹치는 부분 문제
   2. 최적 부분 구조
2. 문제의 변수 파악
3. 점화식 세우기
   1. 변수 간의 관계식 만들기
      `f(n) = f(n-1) + f(n-2)`
4. 메모이제이션 (memoization ⭕️ , memorization ❌)
   1. 작게 나눈 문제의 값을 저장 → 이 값을 재활용하여 사용
   2. 보통 배열에 저장
5. 기저 상태 파악
   1. 가장 작은 문제의 상태를 알아야 함! → 손으로 테스트 해도 괜찮음
   2. ex) 피보나치 수열에서 `f(0) = 1, f(1) = 1`
      → 우리는 이 값을 줘야 함
6. 구현하기
   1. Bottom-up → 반복문 사용
   2. Top-down → 재귀 사용

### Bottom-up

아래에서 부터 계산을 수행하고 더해 나가며 전체 문제를 해결(답을 구하는)하는 과정

dp[0]에서 시작해 dp[n]을 구하는 과정이다.

```jsx
int fibonacci(int n)
{
    dp[0] = 0, dp[1] = 1;
    for (int i = 2; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
}
```

- 반복문 으로 구현

### Top-down

dp[0] 의 기저 상태에서 출발하는 대신 dp[n]의 방식을 찾기 위해 위에서부터 바로 호출을 시작하여 dp[0]의 상태까지 내려간다음 해당 결과 값을 재귀를 통해 전이시켜 재활용하는 방식

→ 이 때 이미 계산이 완료된 경우 메모리에 저장되어 있던 내역을 꺼내 사용!

→ Memoization

```jsx
int fibonacci(int n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;

    if (dp[n] != -1) return dp[n];

    dp[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return dp[n];
}
```

- 재귀로 구현
- 메모이제이션
  → 함수 호출 줄임
  → 시간, 메모리 사용량 줄임

## Top-down 과 Bottom-up 중 뭐를 써야 할까?

알 수 없다. . ... .

문제를 풀어가며 찾아야 한다.

## 참고

- [https://hongjw1938.tistory.com/47](https://hongjw1938.tistory.com/47)
- [https://semaph.tistory.com/16](https://semaph.tistory.com/16)
