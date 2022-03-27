function solution(array, commands) {
  return commands.reduce((acc, [i, j, k]) => {
      acc.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
      return acc;
  }, []);
}
