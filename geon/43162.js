const visit = (index, computers, visited) => {
  if (visited[index] === true) return;
  visited[index] = true;
  computers[index].forEach((node, i) => {
      if (i !== index && node === 1) {
          visit(i, computers, visited);   
      }
  });
};

function solution(n, computers) {
  const visited = Array.from({length: n}, _ => false);
  let count = 0;
  for (i in computers) {
      if (!visited[i]) count++;
      visit(i, computers, visited);
  }
  return count;
}
