//프로그래머스 카펫 Level2

function solution(brown, yellow) {
    var answer = [0, 0];

    const s = brown + yellow;
    const divisors = getDivisors(s);
    const length = divisors.length;

    for(let i = 0; i < length; i++){
        if(divisors[i] < 3) continue;

        let BROWN = (2 * divisors[i]) + (2 * divisors[length-(i+1)]) - 4;

        if(BROWN === brown){
            answer[0] = divisors[length-(i+1)]
            answer[1] = divisors[i]
            return answer;
        }
    }
}

function getDivisors(num) {
    const divisors = [];

    for(let i = 0; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
            divisors.push(i);
            divisors.push(num / i);
        }
    }
    divisors.sort((a, b) => a - b);

    return divisors
}