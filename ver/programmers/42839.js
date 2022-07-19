//프로그래머스 소수찾기 Level2

function solution (numbers) {
    let answer = 0;
    const numbersArr = numbers.split("");
    const cases = [];

    for(let i = 1; i <= numbersArr.length; i++){
        cases.push(...getPermutations(numbersArr, i).map((el) => Number(el.join(""))));
    }

    const set = new Set(cases);

    set.forEach((el) => {
        if(isPrime(el)) answer++;
    })

    return answer;
}

function getPermutations (arr, selectNumber) {
    const results = [];

    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });

    return results;
}

function isPrime(num) {
    if(num < 2) return false;
    if(num === 2 || num === 5) return true;
    if(num % 2 === 0) return false;
    if(num % 5 === 0) return false;

    for(let i = 2; num > i; i++){
        if(num % i === 0) return false;
    }

    return true;
}
