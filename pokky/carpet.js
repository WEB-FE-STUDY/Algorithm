function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;

      if ((height - 2) * (width - 2) === yellow) {
        return (answer = [width, height]);
      }
    }
  }
}