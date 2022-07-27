// 3085 사탕 게임
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

const solution = (input) => {
  const N = Number(input[0]);
  input.shift(0);
  const map = input.map((el) => el.split(""));

  const getMax = () => {
    // 좌우(행) 계산
    let rowMax = 1;
    for (let i = 0; i < N; i++) {
      let max = 1;
      for (let j = 0; j < N - 1; j++) {
        if (map[i][j] === map[i][j + 1]) max++;
        else {
          rowMax = Math.max(rowMax, max); // 여기서도 값 업데이트 해야 함
          max = 1; // max = 0 아님
        }
      }
      rowMax = Math.max(rowMax, max);
    }

    // 위아래(열) 계산
    let colMax = 1;
    for (let i = 0; i < N; i++) {
      let max = 1;
      for (let j = 0; j < N - 1; j++) {
        if (map[j][i] === map[j + 1][i]) max++;
        else {
          colMax = Math.max(colMax, max);
          max = 1;
        }
      }
      colMax = Math.max(colMax, max);
    }

    // console.log("max = ", Math.max(rowMax, colMax));
    return Math.max(rowMax, colMax);
  };

  // console.log(map);

  let candy = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      // 좌우
      [map[i][j], map[i][j + 1]] = [map[i][j + 1], map[i][j]];
      candy = Math.max(candy, getMax());
      [map[i][j + 1], map[i][j]] = [map[i][j], map[i][j + 1]];
      // 위 아래
      [map[j][i], map[j + 1][i]] = [map[j + 1][i], map[j][i]];
      candy = Math.max(candy, getMax());
      [map[j + 1][i], map[j][i]] = [map[j][i], map[j + 1][i]];
    }
  }

  console.log(candy);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 하나 바꾸고 행 체크 & 열 체크해서 update max
// ㄹㅇ 브루트 포스 ..

/*
const arr = ["AAA", "BBB"];
여기서 'AAA' 를 'ADC'로 바꾸고 싶음
arr[0][1] = 'D'  이렇게 하면 값이 안 바뀐다 

const newArr = arr.map(el => el.split('')); 
const arr =[['A', 'A', 'A'], ['B', 'B', 'B']]; 
이렇게 split 해서 값 변경해야 함 

*/
