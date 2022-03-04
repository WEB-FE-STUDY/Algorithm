// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583

const bridge_length = 5;
const weight = 5;
const truck_weights = [2, 2, 2, 2, 1, 1, 1, 1, 1];

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let total = 0;
  let time = 0;

  while (total || truck_weights.length) {
    total -= bridge.shift();

    if (total + truck_weights[0] <= weight) {
      const enterTruck = truck_weights.shift();
      bridge.push(enterTruck);
      total += enterTruck;
    } else {
      bridge.push(0);
    }

    time++;

    console.log(`total: ${total}, time: ${time}, bridge: ${bridge}, truck: ${truck_weights}`);
  }

  return time;
}

console.log(solution(bridge_length, weight, truck_weights));
