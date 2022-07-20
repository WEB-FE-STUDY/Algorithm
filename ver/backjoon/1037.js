//백준 약수 https://www.acmicpc.net/problem/1037 15분

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

const solution = (input) => {
	const num = Number(input[0]);
	const divisors = input[1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	if (num === 1) return input[1] ** 2;
	return divisors[0] * divisors[divisors.length - 1];
};

rl.on("line", (line) => {
	input.push(line.trim());
}).on("close", () => {
	console.log(solution(input));
});

// 배열의 1번 원소를 sort해서 처음과 마지막 원소를 곱하기
// 원소의 개수가 홀수라면 제곱이니까 가운데 수를 제곱??
