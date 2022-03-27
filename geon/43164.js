function findRoute(from, ticketsObject, leftDepth) {
  if (leftDepth === 0) return [from];
  let tos = ticketsObject[from] || [];
  for (let i = 0; i < tos.length; i++) {
      const to = tos[i];
      tos.splice(i, 1);
      const route = findRoute(to, ticketsObject, leftDepth - 1);
      if (route) {
          return [from, ...route];
      }
      tos.splice(i, 0, to);
  }
  return false;
}

function solution(tickets) {
  const answer = ["ICN"];
  const maxDepth = tickets.length;
  const ticketsObject = tickets.reduce((acc, [from, to], index) => {
      if (acc[from]) {
          acc[from].push(to);
          acc[from].sort();
      }
      else {
          acc[from] = [to];
      }
      return acc;
  }, {});
  return findRoute("ICN", ticketsObject, maxDepth);
}
