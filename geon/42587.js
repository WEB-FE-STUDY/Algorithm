function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [priority, index]);
  const order = priorities.sort((a, b) => b - a);
  let count = 0;
  while (true) {
    const front = queue.shift();
    const [priority, index] = front;
    if (priority < order[0]) {
      queue.push(front);
    } else {
      count++;
      if (index === location) {
        break;
      } else {
        order.shift();
      }
    }
  }
  return count;
}
