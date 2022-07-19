// 삼각 달팽이

function solution(n) {
  let answer = [];
  let arr = [];

  // let y = -1;
  // let x = 0;
  // let num = 1;
  let count = 0;
  let currentY = -1;
  let currentX = 0;

  // 2차원 배열 초기화
  for (let i = 1; i <= n; i++) {
    let temp = Array(i).fill(0);
    arr.push(temp);
  }

  // for (let i = 0; i < n; i++) {
  //     for (let j = i; j < n; j++) {
  //         if (i % 3 === 0) y++;   // 아래로 내려감
  //         else if (i % 3 === 1) x++;  // 오른쪽으로
  //         else {  // 왼쪽 위 대각선으로 올라감
  //             x--;
  //             y--;
  //         }
  //         arr[y][x] = num;
  //         num++;
  //     }
  // }

  // console.log(arr)

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      currentY++;
      count++;
      arr[currentY][currentX] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      currentX++;
      count++;
      arr[currentY][currentX] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      currentY--;
      currentX--;
      count++;
      arr[currentY][currentX] = count;
    }
    n -= 3;
  }

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}
