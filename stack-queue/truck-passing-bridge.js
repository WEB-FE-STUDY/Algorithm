const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = Array.from({ length: bridge_length }, () => 0);

  while (bridge.length > 0) {
    bridge.shift();
    time += 1;
    
    const sumOnBridge = bridge.reduce((prev, cur) => prev + cur, 0);
    
    if (sumOnBridge === 0 && truck_weights.length === 0) {
      return time;
    }

    if (sumOnBridge + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      bridge.push(truck);
    } else {
      bridge.push(0);
    }
  }

  return time;
}

console.log(solution(bridge_length, weight, truck_weights));
