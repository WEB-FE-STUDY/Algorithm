function checkDistance(arr) {
  const roomArr = [];
  arr.map((line) => {
    roomArr.push(line.split(""));
  });
  let [isOkay, i, j] = [1, 0, 0];

  while (isOkay) {
    const checkSeat = roomArr[i][j];
    if (checkSeat === "P") {
    }
  }
}

function solution(places) {
  const answer = [];
  places.map((room) => checkDistance(room));
  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
