// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

const transpose = matrix => matrix.reduce((result, row) =>
  row.map((_, i) =>
    row[i] ? [row[i], ...((result[i]) || [])] : [],
  ), [],
);

function solution(board, moves) {
  const basket = [];
  const newBoard = transpose(board);
  return moves.reduce((answer, move) => {
    const poppedItem = newBoard[move - 1].pop();
    if (!poppedItem) return answer;

    if (basket[basket.length - 1] === poppedItem) {
      basket.pop();
      return answer + 2;
    } else basket.push(poppedItem);

    return answer;
  }, 0);
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]), 4);
