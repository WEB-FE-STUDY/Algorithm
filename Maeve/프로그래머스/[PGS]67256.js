// 키패드 누르기

function solution(numbers, hand) {
  let answer = "";

  let leftHand = [0, 0];
  let rightHand = [2, 0];
  let keypad = [
    [1, 0],
    [0, 3],
    [1, 3],
    [2, 3],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 1],
    [1, 1],
    [2, 1],
  ];

  let chosenHand = "";

  for (let i = 0; i < numbers.length; i++) {
    const target = numbers[i];
    if (target % 3 === 1) chosenHand = "left";
    else if (target % 3 === 0 && target !== 0) chosenHand = "right";
    else {
      // 거리 구하고
      const toLeft = Math.abs(keypad[target][0] - leftHand[0]) + Math.abs(keypad[target][1] - leftHand[1]);
      const toRight = Math.abs(keypad[target][0] - rightHand[0]) + Math.abs(keypad[target][1] - rightHand[1]);
      // 거리비교해서 움직인 좌표 업데이트 & answer 더하기
      if (toLeft === toRight) {
        if (hand === "right") chosenHand = "right";
        else chosenHand = "left";
      } else {
        if (toLeft < toRight) chosenHand = "left";
        else chosenHand = "right";
      }
    }

    if (chosenHand === "right") {
      answer += "R";
      rightHand[0] = keypad[target][0];
      rightHand[1] = keypad[target][1];
    } else {
      answer += "L";
      leftHand[0] = keypad[target][0];
      leftHand[1] = keypad[target][1];
    }
  }

  return answer;
}
