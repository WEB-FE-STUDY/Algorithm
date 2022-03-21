const numbers = [4, 1, 2, 1];
const target = 4;

function solution(numbers, target) {
  var answer = 0;
  
  const dfs = (depth, sum) => {
    //모두 탐색했을 경우
    console.log(depth, sum)
    if (depth === numbers.length){
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);
  return answer;
}


solution(numbers, target);
