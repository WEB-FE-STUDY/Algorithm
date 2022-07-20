//백준 약수의 합2 https://www.acmicpc.net/problem/17427 40분
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// const getDivisors = (num) => {
// 	const divisors = [];
// 	for (let i = 1; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) {
// 			divisors.push(i);
// 			if (num / i !== i) divisors.push(num / i);
// 		}
// 	}

// 	return divisors.sort((a, b) => a - b);
// };

// const solution = (input) => {
// 	const answer = [];
// 	for (let i = 1; i <= Number(input); i++) {
// 		const divisors = getDivisors(i);
// 		answer.push(...divisors);
// 	}
// 	return answer.reduce((acc, cur) => acc + cur);
// };

const solution = (input) => {
	const answer = [];
	for (let i = 1; i <= Number(input); i++) {
		answer.push(i * ((Number(input) / i) >> 0));
	}
	return answer.reduce((acc, cur) => acc + cur);
};

rl.on("line", (line) => {
	console.log(solution(line));
	rl.close();
});

//1~주어진 수 까지 각각의 약수의 합올 더한 값?
//시간초과
//1      =1
//1 2    =3
//1 3     =4
//1 2 4  =7
//1 5    =6
//1 2 3 6 =12
//1 7     =8
//1 2 4 8 =15
//1 3 9   =13
//1 2 5 10 =18

//1 10번      1 * 10/1
//2 5번       2 * 10/2
//3 3번       3 * 10/3 >> 0
//4 2번       4 * 10/4 >>0
//5 2번       5 * 10/5
//6 1번
//7 1번
//8 1번
//9 1번
//10 1번      10 * 10/10
