# Week 2

# 완전탐색

- 가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법
- `시간 복잡도`를 고려해야 함
- 방식
  - `Brute Force 브루트 포스`
  - `Bit Mask 비트마스크` 2진수 표현 기법
  - `재귀 호출`
  - `백트래킹`
  - `순열`
  - `BFS`, `DFS`

## ✅ Brute Force 브루트 포스

- 반복문을 돌려 모든 경우를 체크한다.

### 소수 구하기

1. 가장 쉬운 방법 : 2부터 num - 1 까지 모두 나누어 본다.

- num이 커지면 효율적지 않다.

```
// num 이 소수인지 판별
for (i = 2; i < num; i++) {
    if (num % i == 0) break;    // 소수
}
```

2. 에라토스테네스의 체

   ![Sieve_of_Eratosthenes_animation](https://user-images.githubusercontent.com/68533016/156683998-40dcf15b-b3c7-42f2-8409-3abd8ac274b4.gif)

- 반복문을 통해 소수의 배수를 지워나간다.

```
// PrimeArray 배열을 모두 true (소수)로 초기화한 후 시작
for (i = 2; i <= num; i++)
{
    if (PrimeArray[i])
        for (j = 2 * i; j <= num; j += i)
            PrimeArray[j] = false;
}
```

## ✅ 재귀

- 나머지에 대해서 일을 위임할 때 사용
- 순열, 백트래킹 등에 쓰인다.

## ✅ 순열

- n 개의 원소 중 r 개의 원소를 중복 없이 나열하는 방법 / `순서`를 고려함
- 경우의 수는 n! 이므로 완전탐색을 이용하기 위해서는 N이 한자리 수여야 한다.
- 구현 방식
  - 배열의 처음부터 선택(고정)하면서 선택된 요소 이외의 배열에 대해 순열을 구한다.
- 수도 코드

  - `[1, 2, 3, 4]` 중에 3개를 순열로 뽑는 예시
  - ```1(fixed) -> permutation([2,3,4]) -> 2(fixed) -> permutation(3,4) -> ...
    2(fixed) -> permutation([1,3,4]) -> 1(fixed) -> permutation(3,4) -> ...
    3(fixed) -> permutation([1,2,4]) -> ...
    4(fixed) -> permutation([1,2,3]) -> ...
    ```

## ✅ 비트 마스크

- 2진수를 이용하는 컴퓨터의 연산을 이용하는 방식
- 완전 탐색에서 `각각의 원소가 포함되거나, 포함되지 않는 두 가지 선택으로 구성되는 경우`에 유용하게 사용한다.

### 모든 부분집합을 구하는 경우

- 어떤 집합의 부분집합은 집합의 각 원소가 해당 부분집단에 포함되거나 포함되지 않는 두 가지 경우만 존재한다.
- n자리 이진수 (n: 집합 원소의 개수)를 이용하여 각 원소의 포함 여부를 체크할 수 있다

<img width="669" alt="스크린샷 2022-03-04 오전 11 22 43" src="https://user-images.githubusercontent.com/68533016/156686951-1a98dc9b-cd2d-4e6a-a9d7-9f6641c3cc3e.png">
