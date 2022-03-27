function isChangePossible(prev, next) {
  const length = prev.length;
  let diff = 0;
  for (let i = 0; i < length; i++) {
      if (prev[i] !== next[i]) diff++;
  }
  return diff === 1 ? true : false;
}
function solution(begin, target, words) {
  const queue = [begin];
  const depths = { [begin]: 0 };
  
  while(queue.length) {
      words.forEach(word => {
          if (!depths[word] && isChangePossible(queue[0], word)) {
              queue.push(word);
              depths[word] = depths[queue[0]] + 1;
          }
      });
      queue.shift();
  }
  return depths[target] || 0;
}
