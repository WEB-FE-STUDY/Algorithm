# DP

- 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문
  제를 해결할 때 사용하는 것

![image](https://user-images.githubusercontent.com/75062526/163842781-102fcf66-7b8b-42cc-923f-fa4a6e367aa9.png)


[알고리즘 - Dynamic Programming(동적 계획법)](https://hongjw1938.tistory.com/47)

## 시간복잡도

- O(2^n) ⇒ O(n)

## DP 사용 조건

- 겹치는 부분이 있어야 한다.
  - 계산한 값을 재사용해야 하기 때문에 작은 문제로 나눴을 때 동일한 문제가 많아
    야 한다
- 최적 부분 구조
  - 작은 문제의 최적 결과값이 큰 문제의 최적 결과값이 될 수 있는 경우에 적합하다

## 구현 방법

- Top-Down (Memoization 방식)
  - 재귀 사용
  ```jsx
  fuction fibonachi(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibonachi(n-2) + fibonachi(n-2);
  ```
- Bottom-Up (Tabulation 방식)
  - 보통 반복문 사용 (예시는 재귀)
  ```jsx const memory = [0];
      function fibonachi(n) {
      	if(n === 1) return 1;
      	if(n === 2) return 1;
      	if(memory[n] != null) return memory[n];
      	return memory[n] = fibonachi(n-1) + fibonachi(n-2);
      }
  ```

  ```jsx
  memory = [0, 1, 1, 2, 3, 5, 8, 13, ...]
  ```

## 점화식
```jsx
fibonachi(n) = fibonachi(n-1) + fibonachi(n-2)
```