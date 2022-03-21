우선 정렬 알고리즘 종류에는 `Selection Sort`, `Bubble Sort`, `Quick Sort`, `Insertion Sort`, `Shell Sort`, `Merge Sort`, `Heap Sort`, `Radix Sort`등이 있다.

# **실행 방법에 따른 분류**

비교식 정렬(comparative sort)와 분산식 정렬(distribute sort)가 있다.

- **비교식 정렬**
    
    비교하고자 하는 각 키값들을 한 번에 두 개씩 비교하여 교환하는 방식으로 정렬을 실행하는 방법
    
- **분산식 정렬**
    
    키값을 기준으로 하여 자료를 여러 개의 부분 집합으로 분해하고, 각 부분 집합을 정렬함으로써 전체를 정렬하는 방식으로 실행하는 방법이다.
    

# **정렬 장소에 따른 분류**

내부 정렬(internal sort)와 외부 정렬(external sort)가 있다.

- **내부 정렬**
    - 정렬할 자료를 메인 메모리에 올려서 정렬하는 방식이고 정렬 속도가 빠르지만 정렬할 수 있는 자료의 양이 메인 메모리의 용량에 따라서 제한된다.
    - 교환 방식(Selection, Bubble, Quick), 삽입 방식(Insertion, Shell), 병합 방식(2-way 병합, n-way 병합), 분배 방식(Radix), 선택 방식(Heap, Tree) 등이 있다.
- **외부 정렬**
    - 정렬할 자료를 보조 기억장치에서 정렬하는 방식이고 대용량의 보조 기억 장치를 사용하기 때문에 내부 정렬보다 속도는 떨어지지만 내부 정렬로 처리할 수 없는 대용량의 자료에 대한 정렬이 가능하다.
    - 병합 방식(2-way 병합, n-way 병합) 이 있다.

[정렬 알고리즘 기초](https://medium.com/@joongwon/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B8%B0%EC%B4%88-805391cb088e)

# 버블 정렬

인접한 두 개의 원소를 비교하여 자리를 교환하는 방식

**예시) 오름차순**

 ![](https://images.velog.io/images/moon-yerim/post/09fdd2de-bec7-4b12-90e3-1ca5fb3d35a6/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7%201.jpg)

```jsx
var bubbleSort = function(array) {
  var length = array.length;
  var i, j, temp;
  for (i = 0; i < length - 1; i++) { // 순차적으로 비교하기 위한 반복문
    for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
      if (array[j] > array[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
        temp = array[j]; // 두 수를 서로 바꿔준다
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

bubbleSort([5,1,7,4,6,3,2,8]);
```

[코딩테스트, 초급, 버블정렬,Bubble Sorting](https://www.youtube.com/watch?v=s3FdRKHTp_o)

[ZeroCho Blog](https://www.zerocho.com/category/Algorithm/post/57f67519799d150015511c38)

# 퀵소트

분할 정복을 사용하는 정렬 방법

**예시) 오름차순**
![](https://images.velog.io/images/moon-yerim/post/fad3c1df-213f-4295-8a8c-b83671574336/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7%201.png)

```jsx
const quickSort = function (arr) {
  if (arr.length <= 1) return arr; //나누고 나누다 배열이 1개가 되면 정렬할 필요 없으니 리턴

  const pivot = arr[0]; //피봇을 가장 첫번째 걸로...굳이? => start, end포인터를 안써서 그런가?
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) { //배열 순회
    if (arr[i] <= pivot) left.push(arr[i]); //현재 인덱스의 값이 피봇보다 작거나 같다면 왼쪽(작은 것들)이 될 배열에 푸시
    else right.push(arr[i]);//피봇보다 크다면 오른쪽(큰 것들)이 될 배열에 푸시
  }

  const lSorted = quickSort(left);//나눠진 왼쪽 배열에서 다시 퀵소트
  const rSorted = quickSort(right);//나눠진 오른쪽 배열에서 다시 퀵소트
  return [...lSorted, pivot, ...rSorted];//정렬된 값들을 합쳐서 리턴
};

출처: https://im-developer.tistory.com/135 [Code Playground]
```

[코딩테스트, 기초, 퀵정렬, 퀵소트, Quick Sort](https://www.youtube.com/watch?v=slL5GQNHYx8)

[[CS]Quick-sort with Hungarian (Küküllőmenti legényes) folk dance](https://www.youtube.com/watch?v=Fj5SuEuaPhc)

[JavaScript로 퀵정렬(quick sort)알고리즘 구현하기](https://velog.io/@devjade/JavaScript%EB%A1%9C-%ED%80%B5%EC%A0%95%EB%A0%ACquick-sort%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

# 안정 vs 불안정

- 안정
    정렬 후에도 원래 순서가 유지되는 정렬
    
- 불안정
    정렬 후에 원래 순서가 유지된다는 보장을 할 수 없는 정렬

![](https://images.velog.io/images/moon-yerim/post/1b95830c-51c1-41d1-a2d6-13dfe79976ad/image.png)

### 버블정렬은 안정 정렬, 퀵소트는 불안정 정렬
[[알고리즘] - 퀵 정렬(Quick sort) #6](https://godgod732.tistory.com/3)

[[알고리즘] 기본 정렬 알고리즘 비교| stable vs not stable| in-place vs not in-place | 선택 정렬(selection sort), 버블 정렬(bubble sort), 삽입 정렬(insertion sort), 합병 정렬(merge sort), 퀵 정렬(quick sort)](https://code-lab1.tistory.com/24)