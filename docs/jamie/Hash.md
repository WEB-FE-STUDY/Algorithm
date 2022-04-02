# 해시 (Hash)

## 직접 주소 테이블 (Direct Address Table)

- 해시 테이블이라는 개념의 출발점이 되는 자료 구조
- 입력받은 `value`가 `key`가 되는 데이터 매핑 방식
- 찾고자 하는 값과 테이블의 인덱스가 동일하므로 바로 값을 가져올 수 있다.

  ⇒ 시간 복잡도 : O(1)

- 값 탐색 뿐만 아니라 삽입, 수정, 삭제도 모두 O(1)의 시간 복잡도로 해결할 수 있다.
- 다만 값의 범위가 크다면 공간 효율성이 떨어지므로 연속적인 값들을 저장하거나 값의 범위의 차이가 크지 않은 데이터를 저장할 때 적합하다.


```jsx
class DirectAddressTable {
  constructor () {
    this.table = [];
  }

  setValue (value = -1) {
    this.table[value] = value;
  }

  getValue (value = -1) {
    return this.table[value];
  }

  getTable () {
    return this.table;
  }
}

const myTable = new DirectAddressTable();
myTable.setValue(3);
myTable.setValue(10);
myTable.setValue(90);

console.log(myTable.getTable());
```


## 해시 테이블 (Hash Table)

### 해시란?

- 해시는 단방향 암호화 기법으로, 해시 함수를 이용하여 고정된 길이의 암호화된 문자열로 바꾸는 것을 말한다.
- 해시 함수는 임의 크기 데이터를 고정된 크기의 값으로 매핑하는 데에 사용할 수 있는 함수이다.
- 이 때 매핑 전 원래 데이터의 값을 키, 매핑 후 데이터의 값을 해시값, 매핑하는 과정을 해싱이라고 한다.
- 해싱은 정보를 가능한 한 빠르게 저장하고 검색하기 위해 사용하는 기법 중 하나로, 최적의 검색이 필요한 분야에 사용된다.
- 성능 좋은 해시 함수들의 특징
    - 해시 함수 값 충돌의 최소화
    - 쉽고 빠른 연산
    - 해시 테이블 전체에 해시 값이 균일하게 분포
    - 사용할 키의 모든 정보를 이용하여 해싱
    - 해시 테이블 사용 효율이 높을 것


### 해시 테이블

- 직접 주소 테이블의 단점을 보완한 것
- 1953년 IBM에서 근무하던 한스 피터 룬이 사내 메모에서 해싱과 체이닝을 결합하여 처음 사용한 것으로 알려져 있으며, 지금까지도 현대 프로그래밍 언어에서 유용하게 사용되는 자료구조이다.
- 값을 바로 인덱스로 사용하지 않고 해시 함수를 통과시켜 사용한다.


### 해시 함수를 구현하는 방법

```jsx
// 간단한 해시 함수

function hashFunction (key) {
  return key % 10;
}

console.log(hashFunction(102948)); // 8
console.log(hashFunction(191919191)); // 1
console.log(hashFunction(13)); // 3
console.log(hashFunction(997)); // 7
```

- Division Method: 나눗셈을 이용하는 방법으로 입력값을 테이블의 크기로 나누어 계산한다. 테이블의 크기를 소수로 정하고 2의 제곱수와 먼 값을 사용해야 효과가 좋다고 알려져 있다.

  `주소 = 입력값 % 테이블의 크기`

- Digit Folding: 각 Key의 문자열을 ASCII 코드로 바꾸고 값을 합한 데이터를 테이블 내의 주소로 사용하는 방법이다.
- Multiplication Method: 숫자로 된 Key값 K와 0과 1사이의 실수 A, 보통 2의 제곱수인 m을 사용하여 다음과 같은 계산을 해준다. h(k)=(kAmod1) × m
- Univeral Hashing: 다수의 해시함수를 만들어 집합 H에 넣어두고, 무작위로 해시함수를 선택해 해시값을 만드는 기법이다.


## 해시의 충돌 (Hashg Collision)

- 해시는 고정 길이의 값을 반환한다. 즉, 범위가 한정적이기 때문에 다른 값을 넣어도 같은 해시값을 반환하는 경우가 있을 수 있다. 이렇게 되면 같은 곳에 덮어씌우는 일이 발생할 수 있고 이를 해시 충돌이라고 한다.
- 해시 함수를 아무리 잘 짜더라도 충돌을 근본적으로 방지하는 것은 어렵기 때문에, 충돌이 발생하더라도 우회할 수 있는 방법이 존재한다.


### 개별 체이닝, 분리 연결법 (Separate Chaining)

![https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDkhj3%2FbtqT8IyQwmw%2FIfpkN4HCNkFgU9jKYw7a9K%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDkhj3%2FbtqT8IyQwmw%2FIfpkN4HCNkFgU9jKYw7a9K%2Fimg.png)

- 충돌이 발생하는 경우 위 그림과 같이 연결리스트로 연결한다.
- 해시 테이블의 기본 방식이기도 하다. 기본적인 자료구조와 임의로 정한 간단한 알고리즘만 있으면 되므로 인기가 높다. 간단한 원리를 요약하면 다음과 같다.
    1. 키의 해시 값을 계산한다.
    2. 해시 값을 이용해 배열의 인덱스를 구한다.
    3. 같은 인덱스가 있다면 연결 리스트로 연결한다. 이 때 데이터를 삽입할 때의 수행 시간을 줄이기 위해 리스트의 헤드에 새로운 데이터를 넣는 방법을 많이 사용한다. 꼬리에 넣게 되면 헤드에서 시작해서 끝까지 탐색해야 하는데, 리스트의 길이가 길어질수록 수행 시간이 늘어나기 때문이다.
- 개별 체이닝을 사용할 때에는 해시 함수의 역할이 중요하다. 균일한 값을 반환하지 못하는 해시 함수를 사용할 경우 충돌이 많이 발생하여 특정 인덱스에 데이터가 몰리게 될 것이고, 해당 인덱스의 연결 리스트 길이는 계속해서 길어질 것이기 때문이다. 때문에 최대한 균일한 값을 반환하는 해시 함수를 사용하여 리스트의 길이를 어느 정도로 유지해주어야 한다.


### 오픈 어드레싱, 개방 주소법 (Open Addressing)

- 충돌이 발생했을 때 빈 공간을 탐색해 해결하는 방식이다. 때문에 모든 원소가 자신의 해시값과 일치하는 주소에 저장된다는 보장은 없다.
- 해시 함수를 통해 얻은 인덱스가 아니라 다른 인덱스를 허용한다는 의미로 개방 주소(Open Address)라고 한다.
- 연결 리스트를 통해 사실상 무한히 저장할 수 있는 개별 체이닝 방식과 달리, 오픈 어드레싱 방식은 전체 슬롯의 개수 이상은 저장할 수 없다.
- 때문에 일정 이상 채워지면, 즉 기준이 되는 로드 팩터 비율을 넘어서게 되면 더 큰 크기의 또 다른 버킷(배열)을 생성한 후 여기에 새롭게 복사하는 리해싱 작업이 일어난다.

<aside>
💡 **로드 팩터 (Load Factor)**
: 해시 테이블에 저장된 데이터 개수 n을 버킷의 개수 k로 나눈 것이다.
로드 팩터 비율에 따라 해시 함수를 재작성해야 할지 또는 해시 테이블의 크기를 조정해야 할지를 결정한다. 또한 이 값은 해시 함수가 키들을 잘 분산해주는지를 말하는 효율성 측정에도 사용된다.
일반적으로 로드 팩터가 증가할 수록 해시 테이블의 성능은 점점 감소하게 되며, 자바의 경우 디폴트 로드 팩터인 0.75를 넘어서면 해시 테이블의 공간을 재할당한다.
</aside>   
   

1. **선형 탐사법 (Linear Probing)**

![https://media.vlpt.us/images/codenmh0822/post/6c6f8ca0-4396-46d4-a6a8-30c705778dce/image.png](https://media.vlpt.us/images/codenmh0822/post/6c6f8ca0-4396-46d4-a6a8-30c705778dce/image.png)

- 충돌이 발생했을 때 정해진 `n` 칸만큼의 옆 방을 주는 방식이다. 정해진 만큼 이동하면서 빈 공간이 나타날 때까지 탐색하게 된다.
- 구현 방법이 간단하고, 의외로 전체적인 성능이 좋은 편이기도 하다.
- 하지만 선형 탐사를 사용하면 해시 테이블에 저장되는 데이터들이 고르게 분포되지 않고 뭉치는 경향이 있다.
  (해시값 1이 연속으로 나오는 경우 데이터가 연속되어 저장되면서 2, 3이 나왔을 때도 충돌이 발생한다.)
- 이를 **클러스터링**이라고 하는데, 클러스터들이 점점 커지면 인근 클러스터들과 서로 합쳐지는 일이 발생한다. 이렇게 되면 해시 테이블의 특정 위치에는 데이터가 몰리게 되고 다른 위치에는 상대적으로 데이터가 거의 없는 상태가 발생할 수 있다. 이러한 클러스터링 현상은 탐사 시간을 오래 걸리게 하고, 전체적으로 해싱 효율을 떨어뜨리는 원인이 된다.


2. **제곱 탐사법 (Quadratic Probing)**

![https://media.vlpt.us/images/codenmh0822/post/1a6e8087-fe83-49af-b884-63be50254c88/image.png](https://media.vlpt.us/images/codenmh0822/post/1a6e8087-fe83-49af-b884-63be50254c88/image.png)

- 선형 탐사법과 동일하지만, 탐사 폭이 고정된 `n` 칸이 아니라 제곱으로 늘어난다는 차이점이 있다.
- 첫번째 충돌이 났을 때는 1의 제곱만큼, 두번째 충돌이 발생했을 때는 2의 제곱만큼 늘어나는 방식이다.
- 제곱 탐사법을 사용하면 충돌이 발생하더라도 데이터의 밀집도가 선형 탐사법보다 낮기 때문에 연쇄적인 충돌이 발생할 확률이 많이 줄어든다.


3. **이중 해싱 (Double Hashing)**

- 말 그대로 해시 함수를 이중으로 사용하는 것을 의미한다.
- 하나는 최초 해시를 얻을 때 사용하고, 다른 하나는 충돌이 났을 때 탐사할 이동폭을 얻기 위해 사용한다.
- 충돌이 생기더라도 다른 해시 함수를 거치면서 다른 탐사 이동폭을 제공하기 때문에 값이 골고루 저장될 확률이 높아진다.
- 이 때 테이블 사이즈와 두번째 해시함수에 사용되는 수는 효율적인 키 분산을 위해 `소수`를 사용하는 것이 좋다.


## 해시 테이블 구현

```jsx
function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(71); // 테이블 사이즈 소수로 지정

  setItem = (value) => {
    const idx = hashStringToInt(value, this.table.length);
    this.table[idx] = value;
  };

  getItem = (value) => {
    const idx = hashStringToInt(value, this.table.length);
    return this.table[idx];
  };
}
```

- 소수의 크기를 가지는 테이블을 배열로 선언한다.
- setItem은 value를 받아 테이블에 넣어주고 getItem은 value를 받아 해당하는 값을 불러온다.
- 이 때, 배열의 인덱스는 숫자만 가능하므로 해시 함수를 통해 숫자로 변환해준다.

  각 문자열을 `charCodeAt` 메소드를 통해 유니코드로 변환하고 hash 값과 소수인 13을 곱해준 다음 테이블의 사이즈로 나눈 값을 반환한다. (키를 효율적으로 분산하기 위해 코드 작성하신 분이 임의로 소수를 고르셨다고 함)


> **참고**
>
> - [https://overcome-the-limits.tistory.com/9](https://overcome-the-limits.tistory.com/9)
> - [https://evan-moon.github.io/2019/06/25/hashtable-with-js/](https://evan-moon.github.io/2019/06/25/hashtable-with-js/)
> - [https://eunjinii.tistory.com/m/87](https://eunjinii.tistory.com/m/87)
> - [https://crmrelease.tistory.com/81](https://crmrelease.tistory.com/81)
> - 파이썬 알고리즘 인터뷰
