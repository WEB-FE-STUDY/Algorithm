# 동적 계획법 (Dynamic Programming)

- 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용한다.
- 특정한 알고리즘이 아닌 하나의 문제해결 패러다임
- 처음 진행되는 연산은 기록해두고, 이미 진행했던 연산이라면 다시 연산하는 게 아니라 기록되어 있는 값을 가져온다.

## DP를 쓰는 이유

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft3PF0%2FbtqSgLZbXTp%2FdRqSxgLwa4padvt3qtAqNk%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ft3PF0%2FbtqSgLZbXTp%2FdRqSxgLwa4padvt3qtAqNk%2Fimg.png)

- 일반적인 재귀를 사용하면 동일한 연산이 여러 번 반복되어 비효율적일 수 있지만, DP를 사용하면 연산값을 저장해두기 때문에 다시 연산할 필요가 없어 효율적으로 문제를 해결할 수 있다.
- 시간 복잡도를 O(n^2) → O(f(n)) 로 개선할 수 있다. (다항식 수준으로, 문제에 따라 다름.)

## ****DP의 사용 조건****

### **Overlapping Subproblems(겹치는 부분 문제)**

- DP는 기본적으로 문제를 나누고 그 문제의 결과 값을 재활용해서 전체 답을 구한다. 그래서 **동일한 작은 문제들이 반복하여 나타나는 경우에 사용이 가능**하다.
- ex. 이진탐색 vs 피보나치 수열

### **Optimal Substructure(최적 부분 구조)**

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfnwTm%2FbtqSsRROqcY%2FGAZup1WSsVUWsh70ohfWb0%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfnwTm%2FbtqSsRROqcY%2FGAZup1WSsVUWsh70ohfWb0%2Fimg.png)

- **부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우**를 의미한다.
- 위의 그림에서 A - X 사이의 최단 거리는 AX2이고 X - B는 BX2이다. 전체 최단 경로는 AX2 - BX2이다.

## DP 사용하기

1. DP로 풀 수 있는 문제인지 확인한다.
2. 문제의 변수 파악
3. 변수 간 관계식 만들기(점화식)
4. 메모하기(memoization or tabulation)
5. 기저 상태 파악하기
6. 구현하기

### DP로 풀 수 있는 문제인지 확인

- DP의 사용 조건을 충족하는 문제인지 체크한다.
- 보통 특정 데이터 내 최대화 / 최소화 계산을 하거나 특정 조건 내 데이터를 세야 한다거나 확률 등의 계산의 경우 DP로 풀 수 있는 경우가 많다.

### 문제의 변수 파악

- DP는 문제의 변수에 따라 결과 값을 찾고 그것을 전달하여 재사용한다. 그러므로 변수의 개수를 파악해야 한다.
- 피보나치 수열의 경우 n번째 숫자를 구하는 것이므로 n이 변수가 된다.

### **변수 간 관계식 만들기**

- 변수들 사이에 성립하는 관계를 나타내는 점화식을 정의한다.
- 점화식을 통해 결과값을 계산하고 문제 해결에 활용할 수 있다.

### **메모하기**

- 변수의 값에 따른 결과를 저장하며, 저장할 때에는 보통 배열을 사용한다.
- 결과를 저장할 배열을 미리 만들어두고 결과가 나올 때마다 배열에 저장해 해당 값을 재사용하는 방식으로 문제를 해결한다.
- Bottom-Up 방식에서는 Tabulation, Top-Down 방식에서는 Memoization이라고 한다.

### 기저 상태 파악하기

- 가장 작은 문제의 상태를 파악한다.
- 보통 몇 가지 예시를 직접 손으로 테스트하여 구성하는 경우가 많다.
- 피보나치 수열에서는 f(0) = 0, f(1) = 1 과 같은 방식이며, 이후 두 가지 숫자를 더해가며 값을 구하지만 가장 작은 문제는 저 2개로 볼 수 있다.
- 작은 문제의 상태를 파악한 후 미리 배열에 저장해둔다.

### 구현하기

- 두 방식의 시간 복잡도는 같지만, 실제로는 Bottom-Up 방식이 좀 더 빠르다고 한다.

1. Bottom-Up 방식
- 아래에서부터 계산을 수행하고 누적시켜서 큰 문제를 해결하는 방식이다.
- 반복문을 사용한다.
- 메모하는 것을 Tabulation이라고 부르는데, 반복을 통해 dp[0]부터 하나 하나씩 채우는 과정을 **"table-filling"** 이라고하며, 이 Table에 저장된 값에 직접 접근하여 재활용하므로 **Tabulation**이라는 명칭이 붙었다고 한다. 근본적인 개념은 Memoization과 크게 다르지 않다.

```jsx
let buFibo = (count) => {
  let mem = [0, 1];
  count--;

  while(count > 0){
    if(count === 0) return;
    mem.push(mem[mem.length - 2] + mem[mem.length - 1]);
    count--;
  }

  return mem[mem.length - 1];
}
```

2. Top-Down 방식
- dp[0]의 기저 상태에서 출발하는 대신 dp[n]의 값을 찾기 위해 **위에서 부터 바로 호출을 시작**하여 dp[0]의 상태까지 내려간 다음 해당 **결과 값을 재귀를 통해 전이시켜 재활용하는 방식**이다.
- 해결해놓은 하위 문제를 저장하기 위해 Memoization이 사용된다.

```jsx
let memFibo = (count) => {
  let mem = {};
  let recur = (num) => {
    if (num < 2) { return num };
    let num1 = mem[num - 1] || recur(num - 1);
    let num2 = mem[num - 2] || recur(num - 2);
    mem[num] = num1 + num2;
    return num1 + num2;
  }
  recur(count);
  return mem[count];
}
```

### 분할 정복과의 차이점

- 둘은 주어진 문제를 작게 쪼개서 하위 문제로 해결하고 연계적으로 큰 문제를 해결한다는 점은 같다.
- 다만 분할 정복은 하위 문제가 중복이 일어나지 않는 경우에, DP는 중복이 일어나는 경우에 사용한다.

### 탐욕법과의 차이점

- 탐욕법의 경우 각 단계별로 현재 상태에서 가장 최적의 경우를 판단해서 결정하기 때문에, 문제에 따라 최적해를 구할 수도 그렇지 않을 수도 있다. 하지만 동적 계획법의 경우 모든 가능성을 고려하므로 어떤 문제든 항상 최적의 결과가 도출된다.

> 참고
> 
> - [https://jaejade.tistory.com/40](https://jaejade.tistory.com/40)
> - [https://velog.io/@chelsea/1-동적-계획법Dynamic-Programming-DP](https://velog.io/@chelsea/1-%EB%8F%99%EC%A0%81-%EA%B3%84%ED%9A%8D%EB%B2%95Dynamic-Programming-DP)
> - [https://hongjw1938.tistory.com/47](https://hongjw1938.tistory.com/47)
> - [https://lsh424.tistory.com/76](https://lsh424.tistory.com/76)
