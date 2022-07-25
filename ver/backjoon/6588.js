//백준 골드바흐의 추측 실버1 https://www.acmicpc.net/problem/6588
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);
input.pop();

const isPrime = (num) => {
	const arr = new Array(num + 1).fill(1).fill(0, 0, 2);
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (arr[i]) {
			for (let j = i * i; j <= num; j += i) {
				arr[j] = 0;
			}
		}
	}
	return arr;
};

const max = Math.max(...input);
const primes = isPrime(max);

const solution = (input) => {
	const answer = [];
	input.forEach((num) => {
		for (let i = num; i >= num / 2; i--) {
			if (primes[i] && primes[num - i]) {
				answer.push(`${num} = ${num - i} + ${i}`);
				break;
			}
		}
	});
	console.log(answer.join("\n"));
};

solution(input);

//4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
