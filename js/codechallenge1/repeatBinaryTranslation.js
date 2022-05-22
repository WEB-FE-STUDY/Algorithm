function solution(s) {
  let answer = [];
  let [translation, zero] = [0, 0];
  let string = s;
  while (string !== "1") {
    let stringArr = string.split("");
    stringArr.map((num) => {
      if (Number(num) === 0) {
        zero += 1;
      }
    });
    const noZeroStringArr = stringArr.filter((num) => num !== "0");
    console.log(String(noZeroStringArr.length));
    string = parseInt(String(noZeroStringArr.length)).toString(2);
    console.log(string);
    translation += 1;
  }
  answer = [translation, zero];
  return answer;
}
