function solution(bridge_length, weight, truck_weights) {
  let bridge = Array.from({ length: bridge_length }, () => 0); // bridgeLength 만큼 0으로 체워진 배열 생성
  let answer = 0;
  while (bridge.length > 0) {
    bridge.shift();
    if (truck_weights.length > 0) {
      let sum = bridge.reduce((prev, cur) => {
        prev + cur;
      });
      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    answer++;
  }
  return answer;
}
const bridgeLength = 2;
const weight = 10;
const truckWeights = [7, 4, 5, 6];

console.log(solution(bridgeLength, weight, truckWeights));
