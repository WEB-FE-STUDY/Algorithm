function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue_weight = 0;
  let queue = [];

  for (let i = 0; i < bridge_length; i++) {
    // 주의: 다리 길이만큼 0을 넣어야함
    queue.push(0);
  }

  time++;

  let cur_truck = truck_weights.shift();
  queue.shift();
  queue.push(cur_truck);
  queue_weight += cur_truck;

  while (queue_weight) {
    time++;

    let next_truck = truck_weights.shift(); // 다음 트럭
    queue_weight -= queue.shift(); // 큐 맨 앞 요소

    if (queue_weight + next_truck <= weight) {
      queue.push(next_truck);
      queue_weight += next_truck;
    } else {
      queue.push(0); // 올라갈 수 없다면 0 넣기
      truck_weights.unshift(next_truck);
    }
  }

  return time;
}

// 한줄평: 문제 이해도 오래 걸렸고 푸는 데도 한참 걸렸다.
