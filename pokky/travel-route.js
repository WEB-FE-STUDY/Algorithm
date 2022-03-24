const tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

function solution(tickets) {
  tickets.sort();
  return dfs('ICN', tickets, []);
}

const dfs = (airport, tickets, route) => {
  const newRoute = [...route, airport];

  if (tickets.length === 0) {
    return newRoute;
  }

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === airport) {
      const restTickets = tickets.filter(v => v !== tickets[i]);
      const answer = dfs(tickets[i][1], restTickets, newRoute);
      if (answer) return answer;
    }
  }
};

console.log(solution(tickets))
