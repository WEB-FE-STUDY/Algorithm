// 여행경로

let answer = [];
let sortedTickets = [];
let visited = [];

function getICN(sortedTickets) {
  for (let i = 0; i < sortedTickets.length; i++) {
    if (sortedTickets[i][0] === 'ICN') {
      return i;
    }
  }
}

function isAvailable(nextAirport, candidateAirport, sortedTickets) {
  if (nextAirport !== candidateAirport) return false;
  for (let i = 0; i < sortedTickets.length; i++) {
    // 방문하지 않은 것 중에 sortedTickets[i][0]과 nextAirport가 같은 게 하나도 없으면 문제 됨
    if (!visited[i] && sortedTickets[i][0] === nextAirport) return true;
  }

  return false;
}

function dfs(index, sortedTickets) {
  // 종료 조건

  let currentAirport = sortedTickets[index][0];
  let nextAirport = sortedTickets[index][1];

  // answer 에 넣어
  answer.push(currentAirport);

  // 방문 체크
  visited[index] = 1;

  if (!visited.includes(0)) {
    answer.push(nextAirport);
    return;
  }

  // dfs
  for (let i = 0; i < sortedTickets.length; i++) {
    // 방문한 적 없고 갈 수 있으면 dfs
    if (
      !visited[i] &&
      isAvailable(nextAirport, sortedTickets[i][0], sortedTickets)
    ) {
      dfs(i, sortedTickets);
    }
  }
}

function solution(tickets) {
  sortedTickets = tickets.sort();

  visited = Array.from({ length: sortedTickets.length }, () => 0);

  dfs(getICN(sortedTickets), sortedTickets);

  return answer;
}

// let tickets = [
//   ['ICN', 'SFO'],
//   ['ICN', 'ATL'],
//   ['SFO', 'ATL'],
//   ['ATL', 'ICN'],
//   ['ATL', 'SFO'],
// ];

let tickets = [
  ['ICN', 'AOO'],
  ['AOO', 'BOO'],
  ['BOO', 'COO'],
  ['COO', 'DOO'],
  ['DOO', 'EOO'],
  ['EOO', 'DOO'],
  ['DOO', 'COO'],
  ['COO', 'BOO'],
  ['BOO', 'AOO'],
];

console.log(solution(tickets));
