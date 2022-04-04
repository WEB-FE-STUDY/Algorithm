정렬 알고리즘은 특정한 순서에 따라 주어진 요소를 정렬하는 알고리즘이다. 특정한 순서란 오름차순 또는 내림차순이 될 수 있으며 이렇게 정렬하는데에도 여러가지 알고리즘이 존재한다.

## 📖선택 정렬(Selection Sort)

선택 정렬은 현재 위치에 들어갈 값을 선택하여 정렬하는 알고리즘이다. 현재 위치에 저장될 값의 크기가 작냐 크냐에 따라 최소 선택 정렬(Min-Selection Sort)와 최대 선택 정렬(Max-Selection Sort)로 구분할 수 있다

### 작동 로직

![https://blog.kakaocdn.net/dn/bKguwV/btq7BF3ZhM3/cIHJV8VUykHeZpuhioKth0/img.gif](https://blog.kakaocdn.net/dn/bKguwV/btq7BF3ZhM3/cIHJV8VUykHeZpuhioKth0/img.gif)

(최소 선택 정렬일 경우)

첫 번째에 들어갈 수가 가장 작은 수라고 가정한다

배열을 돌며 가장 작은 값을 찾는다

가장 작은 값을 찾으면 그 값을 현재 인덱스의 값과 바꿔준다

인덱스를 늘려가며 반복한다

### 예시 코드

```jsx
function selectionSort(arr) {
  let min;

  //start passes.
  for (let i = 0; i < arr.length; i++) {
    //index of the smallest element to be the ith element.
    min = i;

    //Check through the rest of the array for a lesser element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //compare the indexes
    if (min !== i) {
      //swap
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
```

### 장단점

장점

- 구현이 간단하다
- 비교하는 횟수에 비해 교환하는 횟수가 적다

단점

- 데이터를 하나씩 비교하기 때문에 시간이 오래 걸린다
- 정렬된 상태에서 새로운 데이터가 추가되면 정렬 효율이 좋지 않다

### 시간 복잡도

배열이 어떻게 되었든 전체 비교를 진행하기 때문에 `O(n^2)`의 시간 복잡도를 가진다

## 📖삽입 정렬(Insertion Sort)

삽입 정렬은 현재 위치에서 그 이하의 배열들을 비교하여 자신이 들어갈 위치를 찾아 그 위치에 삽입하는 알고리즘이다

### 작동 로직

![https://blog.kakaocdn.net/dn/bIjyVs/btq7DTGJzJE/PEek4jtFIF9jQSyEz9cnA0/img.gif](https://blog.kakaocdn.net/dn/bIjyVs/btq7DTGJzJE/PEek4jtFIF9jQSyEz9cnA0/img.gif)

첫 번째 요소가 정렬된 상태라고 가정하고 두 번째 요소부터 비교를 시작한다 두 번째 요소가 첫 번째 요소보다 작다면 자리를 바꾼다

첫 번째와 두 번째가 정렬된 상태라고 가정하고 그 뒤 요소를 비교하여 적절한 위치에 삽입한다

세 번째까지 정렬된 상태라고 가정하고 그 뒤 요소를 비교하여 적절한 위치에 삽입한다

반복하여 정렬한다

### 예시 코드

```jsx
function insertionSort(arr) {
  //Start from the second element.
  for (let i = 1; i < arr.length; i++) {
    //Go through the elements behind it.
    for (let j = i - 1; j > -1; j--) {
      //value comparison using ascending order.
      if (arr[j + 1] < arr[j]) {
        //swap
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));
```

### 장단점

장점

- 입력으로 들어오는 배열의 원소가 정렬되어있을수록 속도가 빠르다
- 정렬된 값은 교환이 일어나지 않는다

단점

- 삽입을 구현해야 하므로 자료구조의 영향을 많이 받는다
- 입력으로 들어오는 배열이 역순으로 정렬된 경우 성능이 좋지 않다

### 시간 복잡도

이미 정렬되어 있는 경우엔 한 번씩 밖에 비교를 하지 않아 시간 복잡도는 O(n)이지만, 최악의 경우(역으로 정렬된 경우) O(n^2)이다

Big-O는 상한을 기준으로 표기하기 때문에 시간 복잡도는 `O(n^2)` 이다

## 📖버블 정렬(Bubble sort)

버블 정렬은 첫 번째 원소부터 인접한 원소와 비교하며 자리를 바꿔가며 맨 끝부터 정렬하는 알고리즘이다. 즉 가장 큰 값을 하나씩 뒤로 보내면서 뒤쪽부터 정렬하는데 정렬 방식이 물방울이 튀어오르는 것과 같다고하여 버블 정렬이라고 이름이 붙여졌다고 한다(잘 모르겠다)

### 작동 로직

![https://blog.kakaocdn.net/dn/QHsaE/btq7CSWefxM/t87BtVJscdmlWJu4LKubPK/img.gif](https://blog.kakaocdn.net/dn/QHsaE/btq7CSWefxM/t87BtVJscdmlWJu4LKubPK/img.gif)

가장 앞 자리부터 두 원소를 비교하며 시작한다 필요 시 자리를 교환한다

그 다음 두 원소(두 번째와 세 번째)를 비교한다

이런 식으로 큰 요소를 제일 뒤로 보낸다

반복하여 정렬한다

### 예시 코드

```jsx
function bubbleSort(arr) {
  //Outer pass
  for (let i = 0; i < arr.length; i++) {
    //Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      //Value comparison using ascending order

      if (arr[j + 1] < arr[j]) {
        //Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 6]));
```

### 장단점

장점

- 구현이 간단하다
- 데이터를 하나씩 비교하기 때문에 정밀한 비교가 가능하다

단점

- 하나씩 비교하기 때문에 비교 횟수가 많아져 시간이 오래 걸린다

### 시간 복잡도

선택 정렬과 같이 배열이 어떻게 되어있던 전체 비교를 진행하므로 `O(n^2)`의 시간 복잡도를 가진다

## 📖병합 정렬(Merge Sort)

합병 정렬은 분할과 정복(divide and conquer) 기법을 사용한다. 배열을 작은 단위로 쪼개어 정렬한 결과를 합치면서 전체를 정렬하는 방식이다. 배열을 절반으로 나누어 분할하여 최소 단위로 쪼갠 후 정렬을 진행한다.

### 작동 로직

![https://blog.kakaocdn.net/dn/Ey9jN/btq7Ee461B4/KczCXqoUkQ9daqDM2Odb6K/img.gif](https://blog.kakaocdn.net/dn/Ey9jN/btq7Ee461B4/KczCXqoUkQ9daqDM2Odb6K/img.gif)

![https://www.section.io/engineering-education/sorting-algorithms-in-js/merge_sort.png](https://www.section.io/engineering-education/sorting-algorithms-in-js/merge_sort.png)

배열을 반으로 나누고 이를 쪼갠 배열의 크기가 0이나 1일 때 까지 반복한다

각각의 요소를 비교하여 정렬해준다(이 때 배열의 길이는 1이나 2)

새 배열을 생성한다

(오름차순의 경우) 쪼갠 배열들의 요소들을 비교하여 작은 것 부터 push한다

반복하며 넣어주고, 끝까지 저장하지 못 한 배열의 값을 순서대로 전부 다 새 배열에 저장한다

하나의 정렬된 배열이 될 때 까지 반복한다

### 예시 코드

```jsx
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(arr); //[7, 4, 3, 2, 1, 6, 5]
console.log(sortedArray); //[1, 2, 3, 4,5, 6, 7]
```

### 장단점

장점

- 항상 일정한 시간 복잡도(O(Nlog N))을 가진다
- 안정적이며 대부분의 경우에서 좋은 성능을 낸다

단점

- 추가 메모리 공간이 필요하다

### 시간 복잡도

합병 과정의 경우 하나의 배열을 나눈 배열들이기 때문에 전체 배열의 길이가 N일 경우 O(N)의 시간 복잡도를 가진다

분할 과정은 매번 반씩 감소하므로 O(logN)의 시간 복잡도를 가진다

각 분할 별로 합병을 진행하므로, `O(NlogN)` 의 시간 복잡도를 가진다

정렬을 위한 배열을 하나 더 생성하므로 `O(2N)`의 공간 복잡도를 가진다

## 📖퀵 정렬(Quick Sort)

퀵 정렬 또한 분할과 정복을 이용하여 수행하는 알고리즘이다. `pivot point` 라고 하는 기준이 되는 축을 하나 설정하는데, 이 값을 기준으로 작은 값은 왼쪽으로 큰 값은 오른쪽으로 옮기는 방식으로 정렬을 진행한다

### 작동 로직

![https://blog.kakaocdn.net/dn/tBBW4/btq7EzBbhg8/kSIpggnLpcinwhgjL1FMR1/img.gif](https://blog.kakaocdn.net/dn/tBBW4/btq7EzBbhg8/kSIpggnLpcinwhgjL1FMR1/img.gif)

pivot point로 잡을 배열의 값을 하나 정한다 보통 맨 앞이나 뒤, 혹은 전체 배열 값 중 중간값이나 랜덤 값으로 정한다

left, right 배열을 생성하고 pivot point보다 작으면 left, 크면 right에 넣어준다

이 과정을 재귀적으로 쪼개진 배열의 길이가 1일 떄 까지 진행한다

쪼개진 배열들을 합쳐 정렬된 배열을 만든다

### 예시 코드

```jsx
function partition(items, left, right) {
  //rem that left and right are pointers.

  let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    //increment left pointer if the value is less than the pivot
    while (items[i] < pivot) {
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (items[j] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }

  //return the left pointer
  return i;
}

function quickSort(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right); //get the left pointer returned

    if (left < index - 1) {
      //more elements on the left side
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side
      quickSort(items, index, right);
    }
  }

  return items; //return the sorted array
}

let items = [5, 3, 7, 6, 2, 9];

console.log(quickSort(items, 0, items.length - 1));
```

### 장단점

장점

- 평균 실행 시간이 빠르다

단점

- 축(pivot)을 어떻게 설정하느냐에 따라 성능의 차이가 심하다
- 안정성이 좋진 않다

### 시간 복잡도

분할과 정복을 이용하기 때문에 O(NlogN)의 시간 복잡도를 가진다

다만 퀵 정렬에는 최악의 경우가 존재하는데, 배열이 이미 정렬되어 있는 경우이다. 이 경우 분할이 N만큼 일어나므로 시간 복잡도는 `O(N^2)`가 된다

이를 방지하기 위해 전에 배열의 중간값이나 랜덤 값으로 pivit point를 정하는 방법을 쓰기도 한다

최악의 경우 때문에 병합 정렬보다 느린 알고리즘이라고 생각하기 쉽지만, 이는 발생하기 쉽지 않은 경우이고, 일반적으로 퀵 정렬이 병합 정렬보다 20%이상 빠르다고 한다
