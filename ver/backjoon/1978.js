//백준 소수 찾기 실버 5 https://www.acmicpc.net/problem/1978 15분
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n")[1].split(" ").map(Number);

let answer = 0;

const isPrime = (num) => {
	const set = new Set();
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			set.add(i);
			set.add(num / i);
			if ([...set].length > 2) return false;
		}
	}
	if ([...set].length === 2) return true;
	return false;
};

input.forEach((num) => {
	if (isPrime(num)) answer++;
});

console.log(answer);
