# 탐욕법 (Greedy)

![https://images.velog.io/images/falling_star3/post/f7a2947a-c953-40e2-a24e-20a50f5b3f49/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png](https://images.velog.io/images/falling_star3/post/f7a2947a-c953-40e2-a24e-20a50f5b3f49/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png)

- 현재 상황에서 최선의 선택을 하여 해답에 도달하는 알고리즘
- 주어진 상황에서 최선의 선택을 했을지라도 최종 해답 또한 최적일 것이라는 보장이 없다.

## 사용 조건

1. 탐욕적 선택 속성(Greedy Choice Property)
- 앞의 선택이 이후의 선택에 영향을 주지 않아야 한다.

2. 최적 부분 구조(Optimal Substructure)
- 문제에 대한 최종 해결 방법이 부분 문제에 대해서도 최적의 해결 방법이어야 한다.
- 그리디 알고리즘을 사용하면 최적해를 구할 수 있다는 보장이 없으므로, 각 상황에서 최선이라고 생각하는 선택들로 인해 전체 문제의 최적해를 반드시 도출할 수 있는 문제에 적용해야 한다.
- 어떤 문제가 특정 구조를 만족하면 그리디 알고리즘이 최적해를 도출해낼 수 있는데, 이 구조를 매트로이드라고 한다. 단, 그리디 알고리즘이 최적해를 도출할 수 있는 모든 문제가 매트로이드 구조를 가지는 것은 아니다.

## 해결 절차

1. 선택 절차(Selection Procedure) : 현재 상태에서의 최적의 해답을 선택한다.
2. 적절성 검사(Feasibility Check) : 선택된 해가 문제의 조건을 만족하는지 검사한다.
3. 해답 검사(Solution Check) : 원래의 문제가 해결되었는지 검사하고, 해결되지 않았다면 선택 절차로 돌아가 위의 과정을 반복한다.

## 예시 문제 - 편의점 알바

### 문제

편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다.현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다.동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는 함수를 작성해 주세요.

### 풀이

1. 선택 절차
- 동전 개수를 줄이기 위해 가장 큰 단위의 동전부터 선택한다.
2. 적절성 검사
- 동전의 개수를 조절해가며 남은 금액을 초과하는지 검사한다.
3. 해답 검사
- 현재 선택된 모든 동전들의 합이 거슬러줄 금액과 일치하는지 검사한다.
- 액수가 부족하면 한 단계 작은 단위의 동전을 선택하여 이 과정을 반복한다.

```jsx
function partTimeJob(k) {
  let count = 0;
  const arr = [500, 100, 50, 10, 5, 1];
  for (let item of arr){
    count += Math.floor(k/item); // 동전의 개수
    k -= item * Math.floor(k/item); // 남은 돈 계산
  }
  return count;
}
```

> 참고
>
> - [https://hanamon.kr/알고리즘-탐욕알고리즘-greedy-algorithm/](https://hanamon.kr/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%83%90%EC%9A%95%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-greedy-algorithm/)
>
> - [https://velog.io/@contea95/탐욕법그리디-알고리즘#탐욕법그리디-알고리즘이란](https://velog.io/@contea95/%ED%83%90%EC%9A%95%EB%B2%95%EA%B7%B8%EB%A6%AC%EB%94%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#%ED%83%90%EC%9A%95%EB%B2%95%EA%B7%B8%EB%A6%AC%EB%94%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%B4%EB%9E%80)
>
> - [https://velog.io/@devjade/JavaScript로-greedy-algorithm탐욕-알고리즘-구현하기](https://velog.io/@devjade/JavaScript%EB%A1%9C-greedy-algorithm%ED%83%90%EC%9A%95-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
>
> - [https://dad-rock.tistory.com/673](https://dad-rock.tistory.com/673)
