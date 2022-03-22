const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

function solution(n, computers) {
  var answer = 0;
  const visited = Array.from({ length: computers.length }, () => 0);

  const dfs = computer => {
    visited[computer] = true;

    computers[computer].forEach((_, linkedComputer) => {
      if (
        computers[computer][linkedComputer] === 1 &&
        !visited[linkedComputer]
      ) {
        dfs(linkedComputer);
      }
    });
  };
  
  computers.forEach((_, computer) => {
    if (!visited[computer]) {
      dfs(computer);
      answer += 1;
    }
  });

  return answer;
}

console.log(solution(n, computers));

// function solution(n, computers) {
//   var answer = 0;

//   const check = [];
//   //check배열을 모두 false로 채워주는 초기화
//   for (const computer of computers) {
//     check.push(false);
//   }

//   function DFS(node) {
//     //방문 중인 노드 체크
//     check[node] = true;
//     //인접행렬을 돌면서 i가 노드가 됨 방문하고있는 노드
//     for (let linkedNode = 0; linkedNode < computers.length; linkedNode++) {
//       //computers[node][linkedNode]이 1이다 = 연결되어있다
//       //!check[linkedNode] = 방문을 안했다
//       //연결되었지만 방문했으면 체크 안해도 되니까 두 조건 다 만족해야 함
//       if (computers[node][linkedNode] === 1 && !check[linkedNode]) {
//         //두 조건다 만족했다면 연결된 노드에서 다시 타고갈 노드를 찾아야 함 dfs반복
//         DFS(linkedNode);
//       }
//     }
//   }

//   //노드의 개수만큼 돌아야한다. 다른 노드랑 연결이 되어있었다면 dfs를 돌면서 check 됐을 테니 아래 이프문에서 검사
//   //이 포문이 없으면 연결이 안된 노드라면 탐색을 안하게 됨
//   for (let node = 0; node < computers.length; node++) {
//     //체크에 없다 = 방문 안했다
//     if (!check[node]) {
//       DFS(node);
//       //dfs한 번 다 돌았다 그럼 연결되어있는 노드들을 다 돌았다.
//       answer += 1;
//     }
//   }

//   return answer;
// }
